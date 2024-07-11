import {
  getFieldsRequestBurnedCards,
  getFieldsRequestCards,
  getFieldsRequestCardsInbound,
} from './helpers';
import {
  INFtCardActivitiesPayload,
  StatusActivities,
} from '@/entities/Activity';
import {
  IGetAllCardInShipmentFields,
  ISelectFiltersAction,
} from '@/entities/AllCards';
import { IInboundShipmentTinyRadio } from '@/entities/InboundShipment';

const urls = {
  activity: {
    getCardActivity: (payload: {
      wallet: string;
      day?: string;
      status?: StatusActivities[];
      offset?: number;
      limit?: number;
    }) =>
      `card-activity?&wallet=${payload.wallet}${
        payload.day ? `&day=${payload.day}` : ''
      }${
        payload.status && payload.status.length
          ? `&action=${payload.status}`
          : ''
      }`,
    getNFTCardActivities: ({
      nftAddress,
      timeRange,
      statusFilter,
    }: INFtCardActivitiesPayload) =>
      `card-activity/${nftAddress}?day=${timeRange}${
        statusFilter && statusFilter.length ? `&action=${statusFilter}` : ''
      }`,
  },
  auth: {
    confirmEmail: (token: string): string => `auth/confirmEmail/${token}`,
    feedback: 'auth/create-client',
  },
  burned: {
    getAllBurnedCardsGET: (payload: ISelectFiltersAction) =>
      getFieldsRequestBurnedCards(payload),
    getBurnId: 'burn',
  },
  cards: {
    approveNFTTransfer: 'cards/p2p/approve',
    changeCard: (cardId: string) => `cards/update/${cardId}`,
    getAllCardsInInboundShipment: (payload: IGetAllCardInShipmentFields) =>
      getFieldsRequestCardsInbound(payload.shipmentId, payload.fields),
    getAllUserCards: (payload: ISelectFiltersAction) =>
      getFieldsRequestCards(payload, 'allCards'),
    getCard: (cardId: number) => `cards?id=${cardId}`,
    getNFTCard: (cardAddress: string) => `cards/publicNft/${cardAddress}`,
    reloadAllCards: (payload: string) => `cards/refresh-cards/${payload}`,
    reloadCard: (payload: string) => `cards/refresh-card/${payload}`,
    transferNFTCard: 'cards/p2p/send',
  },
  connectors: {
    changeStatus: (connectorId: string, status: string): string =>
      `/Connectors/${connectorId}/status?status=${status}`,
  },
  cookies: {
    cookie: 'users/cookies',
  },
  inboundShipment: {
    cancelInboundShipment: (id: string) => `shipping/cancel/${id}`,
    createInboundShipment: 'shipping',
    getAllInboundShipments: (payload: IInboundShipmentTinyRadio) =>
      `shipping/status-filter/${payload}`,
    getInboundShipmentId: (id: string) => `shipping/${id}`,
    mintedInboundShipment: (shipmentId: string) =>
      `shipping/${shipmentId}/transfer`,
  },
  listings: {
    boxes: 'boxes',
    calcListingFee: 'calcListingFee',
    createAcceptOfferTx: 'createAcceptOfferTx',
    createCancelListingTx: 'createCancelListingTx',
    createCancelOfferTx: 'createCancelOfferTx',
    createListTx: 'createListTx',
    createMakeOfferTx: 'createMakeOfferTx',
    createQuickBuyTx: 'createQuickBuyTx',
    createUpdateListingTx: 'createUpdateListingTx',
    createUpdateOfferTx: 'createUpdateOfferTx',
    getBuyerOffers: 'getBuyerOffers',
    getCardOffers: 'getCardOffers',
    getSellerListings: 'getSellerListings',
    getSellerOffers: 'getSellerOffers',
    listingCreateTxCreate: 'listingCreateTxCreate',
    listingCreateTxSend: 'listingCreateTxSend',
    listingUpdateTxCreate: 'listingUpdateTxCreate',
    listingUpdateTxSend: 'listingUpdateT',
    sendAcceptOfferTx: 'sendAcceptOfferTx',
    sendCancelListingTx: 'sendCancelListingTx',
    sendCancelOfferTx: 'sendCancelOfferTx',
    sendListTx: 'sendListTx',
    sendMakeOfferTx: 'sendMakeOfferTx',
    sendQuickBuyTx: 'sendQuickBuyTx',
    sendUpdateListingTx: 'sendUpdateListingTx',
    sendUpdateOfferTx: 'sendUpdateOfferTx',
  },
  marketplace: {
    getAllMarketplaceCards: (payload: ISelectFiltersAction) =>
      getFieldsRequestCards(payload, 'marketplace'),
  },
  notifications: {
    getAllNotifications: 'notifications',
    subscribe: 'notifications/subscribe',
  },
  outboundShipment: {
    createOutboundShipment: 'outbound-shipment',
    getAllOutboundShipments: (payload: IInboundShipmentTinyRadio) =>
      `outbound-shipment?status=${payload}`,
    getOutboundShipmentId: (id: string) => `outbound-shipment/${id}`,
  },
  profile: {
    changesEmailProfile: 'users/update/email',
    getProfile: 'users',
    getPublicProfile: (wallet: string) => `users/${wallet}`,
    info: 'users/info',
    resetPassword: 'users/resetPassword',
    sendInvitation: 'users/invite',
    updateProfile: 'users/update',
  },
  sealedBox: {
    getSealedBox: (sealedBoxId: string) => `boxes/${sealedBoxId}`,
    getSealedBoxActivity: (sealedBoxId: string) =>
      `/boxes/${sealedBoxId}/activities`,
    getSealedBoxListings: (sealedBoxId: string) =>
      `/boxes/${sealedBoxId}/listings`,
  },
  shippingAddress: {
    createShipmentAddress: 'shipping-address/create',
    deleteShipmentAddress: (payload: string) => `shipping-address/${payload}`,
    getAllShipmentAddresses: 'shipping-address',
    getShipmentAddressId: (payload: string) => `shipping-address/${payload}`,
    updateShipmentAddress: (payload: string) =>
      `shipping-address/update/${payload}`,
  },
  userCart: {
    burn: 'blockchain/burn',
    changeUserCart: 'cart/add-cards',
    getUserCart: 'cart',
    pay: 'blockchain/pay',
  },
};

export default urls;
