export enum AppRoutes {
  WELCOME_ROUTE = '/',
  LOGIN_PAGE = 'connect',
  ACCOUNT_PUBLIC_PAGE_ROUTE = 'account',
  LINKS_HANDLING_PAGE = 'link_handling',
  NFT_CARD_ROUTE = 'NFT_card',
  NFT_SEALED_BOX_CARD_ROUTE = 'NFT_sealed_card',
  MARKETPLACE_CARDS_ROUTE = 'marketplace_cards',
  MARKETPLACE_SEALED_BOX_ROUTE = 'marketplace_sealed_boxes',
  VIEW_SVG = 'view_svg',
  DASHBOARD_ROUTE = 'dashboard',
  CREATE_SHIPMENT_ROUTE = 'create_shipment',
  SHIPMENT_INBOUND_ROUTE = 'shipments_mint',
  SHIPMENT_OUTBOUND_ROUTE = 'shipments_burned',
  ALL_CARDS_ROUTE = 'my_collection',
  NOTIFICATIONS_ROUTE = 'notifications',
  BURNED_CARDS_ROUTE = 'burned',
  MY_SEALED_BOX_ROUTE = 'Collections_sealed_boxes',
  SETTINGS_ROUTE = 'settings',
  SHIPMENT_DETAILS_ROUTE = 'shipping_details',
  SUCCESSFULLY_ROUTE = 'successfully',
  PRINT_INBOUND_SHIPMENT_PAGE_ROUTE = 'printing_inbound_shipment',
  PRINT_OUTBOUND_SHIPMENT_PAGE_ROUTE = 'printing_outbound_shipment',
  CHECKOUT_PAGE_ROUTE = 'checkout',
  READY_TO_BURN_PAGE_ROUTE = 'burn_cart',
  VERIFY_NFT_CARD_ROUTE = 'verify_nft_card',
  CROSSMINT_CALLBACK = 'crossmint',
  COINFLOW = 'coinflow',

  // last
  NOT_FOUND = 'not_found',
}

export const getRouteWelcome = () => '/';
export const getRouteLogin = () => '/connect';
export const getRoutePublicAccount = (wallet: string) => `/account/${wallet}`;
export const getRouteLinkHandling = () => '/link_handling';
export const getRouteNFTCard = (cardAddress: string) =>
  `/assets/solana/${cardAddress}`;
export const getRouteNFTSealedBox = (boxId: string) =>
  `/assets/sealed_card/${boxId}`;
export const getRouteMarketplaceCards = () => '/marketplace/cards';
export const getRouteMarketplaceSealedBox = () => '/marketplace/sealed_boxes';
export const getRouteViewSVG = () => '/view_svg';
export const getRouteDashboard = () => '/dashboard';
export const getRouteCreateShipment = () => '/create_shipment';
export const getRouteShipmentInbound = () => '/shipments/mint';
export const getRouteShipmentOutbound = () => '/shipments/burned';
export const getRouteNotifications = () => '/notifications';
export const getRouteProfile = () => '/profile';
export const getRouteAllCards = () => '/my_collection';
export const getRouteBurned = () => '/burned';
export const getRouteSealedBoxes = () => '/sealed_boxes';
export const getRouteSettings = () => '/settings';
export const getRouteShippingDetails = () => '/shipping_details';
export const getRouteSuccessfully = () => '/successfully';
export const getRoutePrintingInboundShipment = () =>
  '/printing_inbound_shipment';
export const getRoutePrintingOutboundShipment = () =>
  '/printing_outbound_shipment';
export const getRouteCheckout = () => '/checkout';
export const getRouteCoinflow = (type: string) => `/coinflow/${type}`;
export const getRouteBurnCart = () => '/burn_cart';
export const getRouteVerifyNFTCard = () => '/verify_nft_card';
export const getRouteCrossmintFrame = (status: string, cardAddress: string) =>
  `/crossmint/${status}/${cardAddress}`;

export const allRoutes = {
  getRouteAllCards,
  getRouteBurnCart,
  getRouteBurned,
  getRouteCheckout,
  getRouteCreateShipment,
  getRouteCrossmintFrame,
  getRouteDashboard,
  getRouteLinkHandling,
  getRouteLogin,
  getRouteMarketplaceCards,
  getRouteMarketplaceSealedBox,
  getRouteNFTCard,
  getRouteNFTSealedBox,
  getRouteNotifications,
  getRoutePrintingInboundShipment,
  getRoutePrintingOutboundShipment,
  getRouteProfile,
  getRoutePublicAccount,
  getRouteSealedBoxes,
  getRouteSettings,
  getRouteShipmentInbound,
  getRouteShipmentOutbound,
  getRouteShippingDetails,
  getRouteSuccessfully,
  getRouteVerifyNFTCard,
  getRouteViewSVG,
  getRouteWelcome,
};
