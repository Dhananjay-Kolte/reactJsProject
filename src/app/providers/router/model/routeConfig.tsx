import { AllCardsPage } from '@/pages/AllCardsPage';
import { ReadyToBurn } from '@/pages/BurnCart';
import { BurnedCardsPage } from '@/pages/BurnedCardsPage';
import { CheckoutPage } from '@/pages/Checkout';
import { CoinflowPage } from '@/pages/CoinflowPage';
import { CrossmintFramePage } from '@/pages/CrossmintFramePage';
import { DashboardPage } from '@/pages/Dashboard';
import { HomePage } from '@/pages/HomePage';
import { Marketplace } from '@/pages/Marketplace';
import { MySealedBoxes } from '@/pages/MySealedBoxes';
import { NFTCardPage } from '@/pages/NFTCard';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { NotificationsPage } from '@/pages/Notifications';
import {
  PDFDocumentInboundShipment,
  PDFDocumentOutboundShipment,
} from '@/pages/PDFworker';
import { ProfilePage } from '@/pages/ProfilePage';
import { PublicProfilePage } from '@/pages/PublicProfilePage';
import { SealedBoxesPage } from '@/pages/SealedBoxesPage';
import {
  CreateShipmentPage,
  ShipmentDetailsPage,
  ShipmentPage,
} from '@/pages/Shipment';
import { SuccessfullyPage } from '@/pages/SuccessfullyPage';
import { LinksHandlingPage } from '@/pages/VerificationLinkPage';
import { VerifyNFTCardPage } from '@/pages/VerifyNFTCard';
import { ViewSVGPage } from '@/pages/ViewSVGPage';
import { WelcomePage } from '@/pages/WelcomePage';
import { AppRoutes, allRoutes, getRouteCoinflow } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

const {
  getRouteWelcome,
  getRouteAllCards,
  getRouteBurnCart,
  getRouteBurned,
  getRouteCheckout,
  getRouteCreateShipment,
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
  getRoutePublicAccount,
  getRouteSealedBoxes,
  getRouteSettings,
  getRouteShipmentInbound,
  getRouteShipmentOutbound,
  getRouteShippingDetails,
  getRouteSuccessfully,
  getRouteViewSVG,
  getRouteVerifyNFTCard,
  getRouteCrossmintFrame,
} = allRoutes;

export const routeConfigs: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.WELCOME_ROUTE]: {
    element: <HomePage />,
    noHeaderFooter: true,
    path: getRouteWelcome(),
  },
  [AppRoutes.ACCOUNT_PUBLIC_PAGE_ROUTE]: {
    authOnly: false,
    element: <PublicProfilePage />,
    path: getRoutePublicAccount(':wallet'),
  },

  [AppRoutes.ALL_CARDS_ROUTE]: {
    authOnly: true,
    element: <AllCardsPage />,
    path: getRouteAllCards(),
  },
  [AppRoutes.MY_SEALED_BOX_ROUTE]: {
    authOnly: true,
    element: <MySealedBoxes />,
    path: getRouteSealedBoxes(),
  },

  [AppRoutes.BURNED_CARDS_ROUTE]: {
    authOnly: true,
    element: <BurnedCardsPage />,
    path: getRouteBurned(),
  },
  [AppRoutes.CHECKOUT_PAGE_ROUTE]: {
    authOnly: true,
    element: <CheckoutPage />,
    noHeaderFooter: true,
    path: getRouteCheckout(),
  },
  [AppRoutes.CREATE_SHIPMENT_ROUTE]: {
    authOnly: true,
    element: <CreateShipmentPage />,
    path: getRouteCreateShipment(),
  },
  [AppRoutes.DASHBOARD_ROUTE]: {
    authOnly: true,
    element: <DashboardPage />,
    path: getRouteDashboard(),
  },
  [AppRoutes.LINKS_HANDLING_PAGE]: {
    element: <LinksHandlingPage />,
    path: getRouteLinkHandling(),
  },
  [AppRoutes.LOGIN_PAGE]: {
    element: <WelcomePage />,
    noHeaderFooter: true,
    path: getRouteLogin(),
  },
  [AppRoutes.MARKETPLACE_CARDS_ROUTE]: {
    element: <Marketplace />,
    path: getRouteMarketplaceCards(),
  },
  [AppRoutes.MARKETPLACE_SEALED_BOX_ROUTE]: {
    element: <Marketplace />,
    path: getRouteMarketplaceSealedBox(),
  },
  [AppRoutes.NFT_CARD_ROUTE]: {
    element: <NFTCardPage />,
    path: getRouteNFTCard(':cardAddress'),
  },
  [AppRoutes.NOTIFICATIONS_ROUTE]: {
    authOnly: true,
    element: <NotificationsPage />,
    path: getRouteNotifications(),
  },
  [AppRoutes.PRINT_INBOUND_SHIPMENT_PAGE_ROUTE]: {
    element: <PDFDocumentInboundShipment />,
    noHeaderFooter: true,
    path: getRoutePrintingInboundShipment(),
  },
  [AppRoutes.PRINT_OUTBOUND_SHIPMENT_PAGE_ROUTE]: {
    element: <PDFDocumentOutboundShipment />,
    noHeaderFooter: true,
    path: getRoutePrintingOutboundShipment(),
  },
  [AppRoutes.READY_TO_BURN_PAGE_ROUTE]: {
    authOnly: true,
    element: <ReadyToBurn />,
    path: getRouteBurnCart(),
  },
  [AppRoutes.NFT_SEALED_BOX_CARD_ROUTE]: {
    element: <SealedBoxesPage />,
    path: getRouteNFTSealedBox(':boxId'),
  },
  [AppRoutes.SETTINGS_ROUTE]: {
    authOnly: true,
    element: <ProfilePage />,
    path: getRouteSettings(),
  },
  [AppRoutes.SHIPMENT_DETAILS_ROUTE]: {
    authOnly: true,
    element: <ShipmentDetailsPage />,
    path: getRouteShippingDetails(),
  },
  [AppRoutes.SHIPMENT_INBOUND_ROUTE]: {
    authOnly: true,
    element: <ShipmentPage />,
    path: getRouteShipmentInbound(),
  },
  [AppRoutes.SHIPMENT_OUTBOUND_ROUTE]: {
    authOnly: true,
    element: <ShipmentPage />,
    path: getRouteShipmentOutbound(),
  },
  [AppRoutes.SUCCESSFULLY_ROUTE]: {
    authOnly: true,
    element: <SuccessfullyPage />,
    path: getRouteSuccessfully(),
  },
  [AppRoutes.VIEW_SVG]: {
    element: <ViewSVGPage />,
    path: getRouteViewSVG(),
  },
  [AppRoutes.CROSSMINT_CALLBACK]: {
    element: <CrossmintFramePage />,
    path: getRouteCrossmintFrame(':status', ':cardAddress'),
  },
  [AppRoutes.VERIFY_NFT_CARD_ROUTE]: {
    element: <VerifyNFTCardPage />,
    path: getRouteVerifyNFTCard(),
  },
  [AppRoutes.COINFLOW]: {
    authOnly: true,
    element: <CoinflowPage />,
    path: getRouteCoinflow(':id'),
  },

  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: '*',
  },
};

export const localPath = (pathname: string) => {
  const locals = Object.values(routeConfigs)
    .filter(path => !path.authOnly)
    .filter(i => {
      if (i.path) return pathname.startsWith(i.path);

      return [];
    });
  return locals;
};

// this func for mapping our routes, and return only route with noHeaderFooter
export const pathNoHeaderFooter = () => {
  const locals = Object.values(routeConfigs)
    .filter(path => path.noHeaderFooter)
    .map(p => p.path);
  return locals;
};
