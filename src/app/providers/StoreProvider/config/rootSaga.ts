import { all } from 'redux-saga/effects';
import {
  watcherGetActivity,
  watcherClearActivity,
  watcherGetNFTCardActivities,
} from '@/entities/Activity';
import {
  watcherGetAllCardsInShipment,
  watcherGetCard,
  watcherGetNFTCard,
  watcherGetAllUserCards,
  watcherUpdateCard,
  watcherVerifyNFTCard,
  watcherReloadAllCards,
  watcherReloadCard,
  watcherClearNFTCard,
} from '@/entities/AllCards';
import {
  watcherAuthConfirmEmail,
  watcherAuthSetProfile,
  watcherFeedback,
} from '@/entities/Auth';
import { watcherGetUserCart, watcherUpdateUserCart } from '@/entities/Cart';
import {
  watcherGetCookiesAcceptance,
  watcherSetCookiesAcceptance,
} from '@/entities/Cookies';
import {
  watcherCreateInboundShipment,
  watcherGetInboundShipmentId,
  watcherGetAllInboundShipments,
  watcherCancelInboundShipment,
  watcherUpdateInboundShipment,
  watcherMintedInboundShipment,
} from '@/entities/InboundShipment';
import {
  watcherGetMyProfile,
  watcherSetMyProfile,
  watcherChangesEmailMyProfile,
} from '@/entities/MyProfile';
import {
  // watcherGetAllNotifications,
  watcherMarkAsReadNotification,
} from '@/entities/Notifications';
import {
  watcherCreateOutboundShipment,
  watcherGetOutboundShipmentId,
  watcherGetAllOutboundShipments,
} from '@/entities/OutboundShipment';
import { watcherClearPublicProfile } from '@/entities/PublicProfile';
import {
  watcherGetSealedBox,
  watcherGetSealedBoxActivity,
  watcherGetSealedBoxListings,
} from '@/entities/SealedBoxes';
import {
  watcherCreateShipmentAddress,
  watcherGetAllShipmentAddresses,
  watcherGetShipmentAddressId,
  watcherUpdateShipmentAddress,
  watcherRemoveShipmentAddress,
} from '@/entities/ShipmentAddresses';
import {
  watcherGetAllBurnedCards,
  watcherGetBurnIdData,
} from '@/pages/BurnedCardsPage';
import {
  watcherGetAllMarketPlaceCards,
  watcherReloadAllMarketPlaceCards,
  watcherGetNFTOffers,
  watcherGetSellerOffersBySide,
  watcherGetBuyerOffersBySide,
  watcherGetListings,
} from '@/pages/Marketplace';

export function* saga() {
  yield all([
    // auth
    watcherAuthConfirmEmail(),
    watcherAuthSetProfile(),
    watcherFeedback(),
    // myProfile
    watcherGetMyProfile(),
    watcherSetMyProfile(),
    watcherChangesEmailMyProfile(),
    // publicProfile
    watcherClearPublicProfile(),
    // shipmentInbound
    watcherCreateInboundShipment(),
    watcherGetInboundShipmentId(),
    watcherGetAllInboundShipments(),
    watcherCancelInboundShipment(),
    watcherUpdateInboundShipment(),
    watcherMintedInboundShipment(),
    // shipmentOutbound
    watcherCreateOutboundShipment(),
    watcherGetOutboundShipmentId(),
    watcherGetAllOutboundShipments(),
    // card
    watcherGetCard(),
    watcherGetNFTCard(),
    watcherVerifyNFTCard(),
    watcherUpdateCard(),
    watcherGetAllCardsInShipment(),
    watcherGetAllUserCards(),
    watcherReloadAllCards(),
    watcherReloadCard(),
    watcherClearNFTCard(),
    // burned
    watcherGetAllBurnedCards(),
    watcherGetBurnIdData(),
    // cart
    watcherGetUserCart(),
    watcherUpdateUserCart(),
    // shipment addresses
    watcherCreateShipmentAddress(),
    watcherGetAllShipmentAddresses(),
    watcherGetShipmentAddressId(),
    watcherUpdateShipmentAddress(),
    watcherRemoveShipmentAddress(),
    // sealedCard
    watcherGetSealedBox(),
    watcherGetSealedBoxActivity(),
    watcherGetSealedBoxListings(),
    // activity
    watcherGetActivity(),
    watcherClearActivity(),
    watcherGetNFTCardActivities(),
    // notifications
    // watcherGetAllNotifications(),
    watcherMarkAsReadNotification(),
    // cookies
    watcherGetCookiesAcceptance(),
    watcherSetCookiesAcceptance(),
    // marketplace
    watcherGetAllMarketPlaceCards(),
    watcherReloadAllMarketPlaceCards(),
    watcherGetNFTOffers(),
    watcherGetSellerOffersBySide(),
    watcherGetBuyerOffersBySide(),
    watcherGetListings(),
  ]);
}
