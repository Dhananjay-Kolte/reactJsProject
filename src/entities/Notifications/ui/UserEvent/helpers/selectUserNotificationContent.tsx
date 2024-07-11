import {
  AccountSVG,
  AnnouncementsSVG,
  BurnSVG,
  CardSVG,
  ListingSVG,
  PaymentSVG,
  SaleSVG,
  ShipmentSVG,
  TransferSVG,
  MarketplaceSVG,
} from '@/shared/assets/svg/ActivityIcons';
import {
  ErrorCircleSVG,
  SuccessCircleSVG,
  WarningTriangleSVG,
} from '@/shared/assets/svg/AlertsIcons';
import { limitWordCharacters } from '@/shared/lib/limitWordCharacters/limitWordCharacters';

export const selectUserNotificationContent = {
  iconAction: (entity: string) => {
    switch (entity) {
      case 'Account':
        return <AccountSVG />;
      case 'Announcements':
        return <AnnouncementsSVG />;
      case 'Burn':
        return <BurnSVG />;
      case 'pNFT':
        return <CardSVG />;
      case 'Listing':
        return <ListingSVG />;
      case 'Payment':
        return <PaymentSVG />;
      case 'Sale':
        return <SaleSVG />;
      case 'Marketplace':
        return <MarketplaceSVG />;
      case 'Shipment':
        return <ShipmentSVG />;
      case 'Transfer':
        return <TransferSVG />;
      default:
        return null;
    }
  },
  iconStatus: (status: string, event: string | null, action: boolean) => {
    if (event === 'inboundShipmentCreated' && !action)
      return <SuccessCircleSVG />;

    switch (status) {
      case 'Error':
        return <ErrorCircleSVG type='alternative' />;
      case 'Success':
        return <SuccessCircleSVG />;
      case 'Warning':
        return <WarningTriangleSVG />;
      default:
        return null;
    }
  },
};

export const notificationTitle = {
  titleWithNFTOrAccount: (
    event: string,
    nftQty: number,
    nftName: string,
    wallet: string,
    email: string,
    txId: string,
    amount: string | null,
    receiverName: string | null,
  ) => {
    switch (event) {
      case 'nftBurned':
        return `You have successfully withdrawn ${nftQty} ${
          nftQty > 1 ? 'cards' : 'card'
        }`;
      case 'nftPriceSuggested':
        return `Request received to update the Insured Value for ${nftName}`;
      case 'nftReceived':
        return `You have successfully received ${nftName} from ${limitWordCharacters(
          wallet,
          6,
          'centerDots',
        )} user`;
      case 'nftMinted':
        return `You have successfully deposited ${nftQty} ${
          nftQty > 1 ? 'cards' : 'card'
        }`;
      case 'paymentSuccessfull':
        return `Transaction ${
          txId !== null ? limitWordCharacters(txId, 6, 'centerDots') : ''
        } successful: ${nftQty}`;
      case 'paymentFailed':
        return `Transaction ${
          txId !== null
            ? txId && limitWordCharacters(txId, 6, 'centerDots')
            : ''
        } failed. Please try again`;
      case 'invitationAccepted':
        return `Your invitation was accepted by ${email}`;
      case 'nftSentToEmail':
        return `You have successfully transferred ${nftName} to ${
          receiverName || email
        }`;
      case 'nftSentToWallet':
        return `You have successfully transferred ${nftName} to ${
          receiverName || limitWordCharacters(wallet, 6, 'centerDots')
        }`;
      case 'accountEmailAdded':
        return `${email} has been added to your account`;
      case 'cardPriceSuggested':
        return `
        Request received to update the Insured Value for ${nftName}`;
      case 'offerAccepted':
        return `Offer accepted: ${amount} USDC for ${nftName}`;
      case 'offerReceived':
        return `New offer received: ${amount} USDC for ${nftName}`;
      case 'offerCreated':
        return `Offer accepted: ${amount} USDC for ${nftName}`;
      case 'cardSold':
        return `Your item has sold for ${amount} USDC`;
      case 'cardBurned':
        return `You have an invalid offer: ${nftName} was removed from marketplace`;
      default:
        return '';
    }
  },
  titleWithShipment: (
    event: string,
    shipmentId: string,
    nftQty: number,
    trackingId: string,
  ) => {
    switch (event) {
      case 'inboundShipmentCanceled':
        return `Shipment ${shipmentId} canceled`;
      case 'inboundShipmentCompleted':
        return `Shipment ${shipmentId} status changed to: Completed`;
      case 'inboundShipmentCreated':
        return `Please add a Tracking # to Shipment ${shipmentId}`;
      case 'inboundShipmentProcessing':
        return `Shipment ${shipmentId} status changed to: Processing`;
      case 'inboundShipmentReceived':
        return `Shipment ${shipmentId} status changed to: Received`;
      case 'inboundShipmentResumed':
        return `Shipment ${shipmentId} resumed`;
      case 'outboundShipmentCreated':
        return `Withdraw order ${shipmentId} successfully created`;
      case 'outboundShipmentDelivered':
        return `Withdraw order ${shipmentId} Delivered`;
      case 'outboundShipmentProcessing':
        return `Withdraw order ${shipmentId} Processing`;
      case 'outboundShipmentShipped':
        return `Withdraw order ${shipmentId} Shipped`;
      case 'outboundShipmentTrackingIdAdded':
        return `Withdraw order ${shipmentId} updated: added Tracking # ${trackingId}`;
      default:
        return '';
    }
  },
};

export const notificationDescription = (event: string) => {
  switch (event) {
    case 'inboundShipmentCanceled':
      return 'You can resume your shipment at any time from the Shipments page';
    case 'inboundShipmentCompleted':
      return 'You have successfully deposited all of your cards';
    case 'inboundShipmentCreated':
      return 'A tracking # will help us process your shipment faster';
    case 'inboundShipmentProcessing':
      return 'You can track the status on the Shipments page';
    case 'inboundShipmentReceived':
      return 'You can track the status on the Shipments page';
    case 'inboundShipmentResumed':
      return 'Review the details for your shipment on the Shipments page';
    case 'outboundShipmentDelivered':
      return 'You can track the status of your withdrawal on the Shipments page';
    case 'nftBurned':
      return 'Withdrawn items can still be viewed in your Collection';
    case 'nftPriceSuggested':
      return 'The request will be reviewed by our support team';
    case 'nftReceived':
      return 'You can view received items in your Collection';
    case 'nftMinted':
      return 'The deposit is now available in your Collection';
    case 'nftSentToWallet':
      return 'The item has been sent and is no longer in your collection';
    case 'paymentSuccessfull':
      return 'View the details on Shipment page';
    case 'nftSentToEmail':
      return 'The item has been sent and is no longer in your collection';
    case 'accountEmailAdded':
      return 'You can now make deposits to your Collector account!';
    case 'cardPriceSuggested':
      return 'The request will be reviewed by our support team';
    case 'outboundShipmentProcessing':
      return 'You can track the status of your withdrawal on the Shipments page';
    case 'outboundShipmentShipped':
      return 'You can track the status of your withdrawal on the Shipments page';
    case 'outboundShipmentTrackingIdAdded':
      return 'You can track the status of your withdrawal on the Shipments page';
    case 'paymentFailed':
      return 'Please verify the cards are available to withdraw and your account/wallet is funded';
    case 'invitationAccepted':
      return 'You can now transfer items to them';
    case 'cardBurned':
      return 'Please cancel offers to restore funds';
    default:
      return '';
  }
};

export const notificationDescriptionWithProps = (
  event: string,
  nftQty: number,
  amount: string,
  nftName: string,
) => {
  switch (event) {
    case 'outboundShipmentCreated':
      return `Ordered ${nftQty} withdrawn and ${amount} paid`;
    case 'offerAccepted':
      return 'The item is now in your Collection!';
    case 'offerReceived':
      return 'Offers can be accepted on the card listing';
    case 'offerCreated':
      return 'The item is now in your Collection!';
    case 'cardSold':
      return `The item has been removed from your collection ${nftName}`;
    default:
      return '';
  }
};
