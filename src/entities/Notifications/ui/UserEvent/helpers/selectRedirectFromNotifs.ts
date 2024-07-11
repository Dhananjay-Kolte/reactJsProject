import {
  toInboundShipmentRedirect,
  toOutboundShipmentRedirect,
} from './notificationFilteringCategories';

export const redirectToNFTOrAccount = (event: string) => {
  switch (event) {
    // pNFT
    case 'nftReceived':
      return { link: '/assets/solana' };
    case 'nftSentToWallet':
      return { link: '/assets/solana' };
    case 'nftSentToEmail':
      return { link: '/assets/solana' };
    // Account
    case 'accountEmailAdded':
      return { link: '/account' };
    case 'invitationAccepted':
      return { link: '/account' };
    case 'offerAccepted':
      return { link: '/assets/solana' };
    case 'offerReceived':
      return { link: '/assets/solana' };
    case 'offerCreated':
      return { link: '/assets/solana' };
    case 'cardSold':
      return { link: '/assets/solana' };
    case 'cardBurned':
      return { link: '/assets/solana' };
    default:
      return { link: null };
  }
};

export const redirectToShipment = (
  shipmentId: string | null,
  event: string,
  inboundShipmentsActive: IShipmentInbound[],
  inboundShipmentsPast: IShipmentInbound[],
  outboundShipmentsActive: IShipmentOutbound[],
  outboundShipmentsPast: IShipmentOutbound[],
) => {
  if (!!event && !!shipmentId) {
    if (toOutboundShipmentRedirect.includes(event)) {
      if (
        outboundShipmentsActive.some(
          (element: IShipmentOutbound) => element.customId === shipmentId,
        )
      )
        return {
          link: '/shipments/burned',
          param: 'Active',
          typeShipment: 'outbound',
        };

      if (
        outboundShipmentsPast.some(
          (element: IShipmentOutbound) => element.customId === shipmentId,
        )
      )
        return {
          link: '/shipments/burned',
          param: 'Past',
          typeShipment: 'outbound',
        };
    }

    if (toInboundShipmentRedirect.includes(event)) {
      if (
        inboundShipmentsActive.some(
          (element: IShipmentInbound) => element.id === shipmentId,
        )
      )
        return {
          link: '/shipments/mint/',
          param: 'Active',
          typeShipment: 'inbound',
        };

      if (
        inboundShipmentsPast.some(
          (element: IShipmentInbound) => element.id === shipmentId,
        )
      )
        return {
          link: '/shipments/mint/',
          param: 'Past',
          typeShipment: 'inbound',
        };
    }
  }
  return { link: null, param: null, typeShipment: null };
};
