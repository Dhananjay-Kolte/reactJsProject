import { FC, useState } from 'react';
import {
  AlertSVG,
  NoteSearchSVG,
  PinSVG,
  HeaderNotificationsBellWithDotSVG,
  HeaderNotificationsBellWithoutDotSVG,
  LampSVG,
  AddPhotoSVG,
  AddSVG,
  ArroyUpSVG,
  AvatarSVG,
  BasketSVG,
  BurnCartSVG,
  CopySVG as CopySVG1,
  Cross,
  DashboardSVG,
  DesktorImg,
  DollarSVG,
  EditSVG as EditSVG1,
  ErrorsInputSVG,
  HashTagSVG,
  LeftArrowSlider,
  LineSVG,
  СheckmarkSVG,
  NoVisibilityPassword,
  InfoSVG,
  QuantitySVG,
  RightArrowSlider,
  SearchIconSVG,
  VisibilityPassword,
  BadCardSVG,
  CardOrangeSVG,
  GradingSVG,
  ListIconSVG,
  LockSVG,
  ProfileAvatarSVG,
  BurnSVG as BurnSVG3,
  ErrorSVG as ErrorSVG1,
  TransferSVG as TransferSVG2,
  DollarEmptySVG,
  DollarBoldSVG as DollarBoldSVG1,
  SaleSVG as SaleSVG1,
  ListSVG,
  OfferSVG,
  MintedSVG,
  ShipmentSVG as ShipmentSVG1,
  PhosphorSVG,
  MapPointSVG,
  PencilSVG,
  TruckSVG,
  WalletSVG,
  BurnCheckoutSVG,
  ExclamationPointSVG,
  SuccessMarkSVG,
  UsdcSVG,
  UsdtSVG,
  WarningCircleSVG,
  OutsideLinkSVG,
  SolanaError,
  BurnActivitySVG,
  PhosphornSVG,
  GreenCircleApproveSVG,
  RedCircleRejectedSVG,
  FrozenStatusIconSVG,
  InvalidStatusIcon,
  MintedStatusSVG,
  CancelSVG,
  TriangleErrorSVG,
  SettingSVG,
  PinionSVG,
  SmileyXEyes,
  CommentSVG,
} from '@/shared/assets/svg';
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
} from '@/shared/assets/svg/ActivityIcons';
import {
  ErrorCircleSVG,
  SuccessCircleSVG,
  RedWarningCircleSVG,
  WarningTriangleSVG,
  InfoCircleSVG,
} from '@/shared/assets/svg/AlertsIcons';
import {
  AddToCollectionSVG,
  AddToMarketplaceSVG,
  ArchiveSVG,
  BurnSVG1,
  FilterSVG,
  ViewGroupsSVG,
  ViewItemsSVG,
  ViewListSVG,
  HoverPanelCardArchiveSVG,
  HoverPanelBurnSVG,
  HoverPanelShareSVG,
  ShareSVG,
} from '@/shared/assets/svg/All-cards';
import {
  CheckboxFullSVG,
  CheckboxEmptySVG,
} from '@/shared/assets/svg/CheckboxIcons';
import {
  ArrowUpRightSVG,
  ArrowDownLeftSVG,
  LogoutSVG,
  ProfileSVG,
} from '@/shared/assets/svg/HeaderPopover';
import FullLogo from '@/shared/assets/svg/Logo/FullLogo';
import FullLogoWhite from '@/shared/assets/svg/Logo/FullLogoWhite';
import LogoIcon from '@/shared/assets/svg/Logo/LogoIcon';
import LogoTest from '@/shared/assets/svg/Logo/LogoTest';
import {
  CheckCircleTrueSVG,
  CheckCircleFalseSVG,
  ArrowSquareUpRightSVG,
  USDCSVG,
  USDTSVG,
  DownloadSimpleSVG,
} from '@/shared/assets/svg/OutboundShipment';
import {
  LocationSVG,
  OrangeBoxSVG,
  QRCodeSVG,
} from '@/shared/assets/svg/ShipmentDetails';
import {
  DhlSVG,
  FedExSVG,
  UpsSVG,
  UspsSVG,
} from '@/shared/assets/svg/ShippingMethod';
import {
  TwitterSVG,
  InstagramSVG,
  DiscordSVG,
  YouTubeSVG,
  FaceBookSVG,
  TelegramSVG,
} from '@/shared/assets/svg/SocialMedia/Footer';
import {
  CopyLinkCircleSVG,
  TwitterCircleSVG,
  FacebookCircleSVG,
  FacebookSVG,
  TelegramCircleSVG,
  WhatsappCircleSVG,
  WhatsappSVG,
  TwitterSVG as TwitterSVG1,
  TelegramSVG as TelegramSVG1,
} from '@/shared/assets/svg/SocialMedia/Modal';
import {
  DefaultEllipseSVG,
  LocationSVG as LocationSVG1,
} from '@/shared/assets/svg/Stepper';
import {
  ActiveSignalSVG,
  DraftSignalSVG,
  PastSignalSVG,
} from '@/shared/assets/svg/TinyRadio';
import {
  SuccessFaceSVG,
  FrozenFaceSVG,
  BurnedSVG,
  InvalidFaceSVG,
  SuccessMintedSVG,
  ReadyForMintSVG,
  NotFoundFaceSVG,
  RejectedSVG,
} from '@/shared/assets/svg/VerifyCardStatusIcon';
import CreditCartSvg from '@/shared/assets/svg/buttonBlockHeader/CreditCartSvg';
import LayersSvg from '@/shared/assets/svg/buttonBlockHeader/LayersSvg';
import MonitorSvg from '@/shared/assets/svg/buttonBlockHeader/Monitor';
import NitificationSvg from '@/shared/assets/svg/buttonBlockHeader/NotificationSvg';
import UserSvg from '@/shared/assets/svg/buttonBlockHeader/UserSvg';
import {
  AchiveSVG,
  CloseDarkSVG,
  CloseWhiteSVG,
  DottedSVG,
  DownloadSVG,
  FireSVG,
  PrintSVG,
  RhombSVG,
  MarketPlaceSVG,
} from '@/shared/assets/svg/buttons';
import {
  CopySVG,
  GraphicSVG,
  BlueSVG,
  OrangeSVG,
  PriceSVG,
  GreenSVG,
} from '@/shared/assets/svg/dashboard';
import {
  BurnSVG as BurnSVG2,
  DollarBoldSVG,
  TransferSVG as TransferSVG1,
  ExpandDownSVG,
  ExpandUpSVG,
  ErrorSVG,
  LeftArrowSVG,
  LinkSVG,
  RightArrowSVG,
  SortIconSVG,
  EditSVG,
  ShareSVG as ShareSVG1,
  DotsSVG,
  BottomArrowSVG,
  RefreshSVG,
  TopArrowSVG,
} from '@/shared/assets/svg/miniButtons';
import {
  SuccessfullySVG,
  SendSVG,
  EnterSVG,
  VerifySVG,
  ReadySVG,
} from '@/shared/assets/svg/successfullyPage';

const ViewSVGPage: FC = () => {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <div
        className='uikit-page'
        style={{
          background: theme ? 'grey' : 'white',
          fill: !theme ? 'black' : 'white',
          width: '100vw',
        }}
      >
        <div className='uikit-page__text'>Different SVG</div>
        <div className='uikit-page__container'>
          <AlertSVG />
          <NoteSearchSVG />
          <PinSVG />
          <HeaderNotificationsBellWithDotSVG />
          <HeaderNotificationsBellWithoutDotSVG />
          <LampSVG />
          <AddPhotoSVG />
          <AddSVG />
          <ArroyUpSVG />
          <AvatarSVG />
          <BasketSVG />
          <BurnCartSVG />
          <CopySVG1 />
          <Cross />
          <DashboardSVG />
          <DesktorImg />
          <DollarSVG />
          <EditSVG1 />
          <HashTagSVG />
          <LeftArrowSlider />
          <ErrorsInputSVG />
          <LineSVG />
          <СheckmarkSVG />
          <NoVisibilityPassword />
          <InfoSVG />
          <QuantitySVG />
          <RightArrowSlider />
          <SearchIconSVG />
          <VisibilityPassword />
          <BadCardSVG />
          <CardOrangeSVG />
          <GradingSVG />
          <ListIconSVG />
          <LockSVG />
          <ProfileAvatarSVG />
          <BurnSVG3 />
          <ErrorSVG1 />
          <TransferSVG2 />
          <DollarBoldSVG1 />
          <SaleSVG1 />
          <DollarEmptySVG />
          <ShipmentSVG1 />
          <ListSVG />
          <OfferSVG />
          <MintedSVG />
          <PhosphorSVG />
          <MapPointSVG />
          <PencilSVG />
          <TruckSVG />
          <WalletSVG />
          <BurnCheckoutSVG />
          <ExclamationPointSVG />
          <SuccessMarkSVG />
          <UsdcSVG />
          <UsdtSVG />
          <WarningCircleSVG />
          <OutsideLinkSVG />
          <SolanaError />
          <BurnActivitySVG />
          <PhosphornSVG />
          <GreenCircleApproveSVG />
          <RedCircleRejectedSVG />
          <FrozenStatusIconSVG />
          <InvalidStatusIcon />
          <MintedStatusSVG />
          <CancelSVG />
          <TriangleErrorSVG />
          <SettingSVG />
          <PinionSVG />
          <SmileyXEyes />
          <CommentSVG />
        </div>
        <div className='uikit-page__text'>VerifyCardStatusIcon</div>
        <div className='uikit-page__container'>
          <SuccessFaceSVG />
          <FrozenFaceSVG />
          <BurnedSVG />
          <InvalidFaceSVG />
          <SuccessMintedSVG />
          <ReadyForMintSVG />
          <NotFoundFaceSVG />
          <RejectedSVG />
        </div>
        <div className='uikit-page__text'>TinyRadio</div>
        <div className='uikit-page__container'>
          <ActiveSignalSVG />
          <DraftSignalSVG />
          <PastSignalSVG />
        </div>
        <div className='uikit-page__text'>successfullyPage</div>
        <div className='uikit-page__container'>
          <SuccessfullySVG />
          <SendSVG />
          <EnterSVG />
          <VerifySVG />
          <ReadySVG />
        </div>
        <div className='uikit-page__text'>Stepper</div>
        <div className='uikit-page__container'>
          <DefaultEllipseSVG />
          <LocationSVG1 />
        </div>
        <div className='uikit-page__text'>SocialMediaModal</div>
        <div className='uikit-page__container'>
          <CopyLinkCircleSVG />
          <TwitterCircleSVG />
          <TwitterSVG1 />
          <FacebookCircleSVG />
          <FacebookSVG />
          <TelegramCircleSVG />
          <TelegramSVG1 />
          <WhatsappCircleSVG />
          <WhatsappSVG />
        </div>
        <div className='uikit-page__text'>SocialMediaFooter</div>
        <div className='uikit-page__container'>
          <TwitterSVG />
          <InstagramSVG />
          <DiscordSVG />
          <YouTubeSVG />
          <FaceBookSVG />
          <TelegramSVG />
        </div>
        <div className='uikit-page__text'>ShippingMethod</div>
        <div className='uikit-page__container'>
          <DhlSVG />
          <FedExSVG />
          <UpsSVG />
          <UspsSVG />
        </div>
        <div className='uikit-page__text'>ShipmentDetails</div>
        <div className='uikit-page__container'>
          <LocationSVG />
          <OrangeBoxSVG />
          <QRCodeSVG />
        </div>
        <div className='uikit-page__text'>OutboundShipment</div>
        <div className='uikit-page__container'>
          <CheckCircleTrueSVG />
          <CheckCircleFalseSVG />
          <ArrowSquareUpRightSVG />
          <USDCSVG />
          <USDTSVG />
          <DownloadSimpleSVG />
        </div>
        <div className='uikit-page__text'>miniButtons</div>
        <div className='uikit-page__container'>
          <BurnSVG2 />
          <DollarBoldSVG />
          <TransferSVG1 />
          <ExpandDownSVG />
          <ExpandUpSVG />
          <ErrorSVG />
          <LeftArrowSVG />
          <LinkSVG />
          <RightArrowSVG />
          <SortIconSVG />
          <EditSVG />
          <ShareSVG1 />
          <DotsSVG />
          <BottomArrowSVG />
          <TopArrowSVG />
          <RefreshSVG />
        </div>
        <div className='uikit-page__text'>ActivityIcons</div>
        <div className='uikit-page__container'>
          <AccountSVG />
          <AnnouncementsSVG />
          <BurnSVG />
          <CardSVG />
          <ListingSVG />
          <PaymentSVG />
          <SaleSVG />
          <ShipmentSVG />
          <TransferSVG />
        </div>
        <div className='uikit-page__text'>AlertsIcon</div>
        <div className='uikit-page__container'>
          <ErrorCircleSVG />
          <SuccessCircleSVG />
          <RedWarningCircleSVG />
          <WarningTriangleSVG />
          <InfoCircleSVG />
        </div>
        <div className='uikit-page__text'>All-cards</div>
        <div className='uikit-page__container'>
          <AddToCollectionSVG />
          <AddToMarketplaceSVG />
          <ArchiveSVG />
          <BurnSVG1 />
          <FilterSVG />
          <HoverPanelBurnSVG />
          <HoverPanelCardArchiveSVG />
          <HoverPanelShareSVG />
          <ShareSVG />
          <ViewGroupsSVG />
          <ViewItemsSVG />
          <ViewListSVG />
        </div>
        <div className='uikit-page__text'>buttonBlockHeader</div>
        <div className='uikit-page__container'>
          <CreditCartSvg />
          <LayersSvg />
          <MonitorSvg />
          <NitificationSvg />
          <UserSvg />
        </div>
        <div className='uikit-page__text'>buttons</div>
        <div className='uikit-page__container'>
          <AchiveSVG />
          <CloseDarkSVG />
          <CloseWhiteSVG />
          <DottedSVG />
          <DownloadSVG />
          <FireSVG />
          <PrintSVG />
          <RhombSVG />
          <MarketPlaceSVG />
        </div>
        <div className='uikit-page__text'>CheckboxIcons</div>
        <div className='uikit-page__container'>
          <CheckboxFullSVG />
          <CheckboxEmptySVG />
        </div>
        <div className='uikit-page__text'>dashboard</div>
        <div className='uikit-page__container'>
          <CopySVG />
          <GraphicSVG />
          <BlueSVG />
          <OrangeSVG />
          <PriceSVG />
          <GreenSVG />
        </div>
        <div className='uikit-page__text'>HeaderPopover</div>
        <div className='uikit-page__container'>
          <ArrowUpRightSVG />
          <ArrowDownLeftSVG />
          <LogoutSVG />
          <ProfileSVG />
        </div>
        <div className='uikit-page__text'>Logo</div>
        <div className='uikit-page__container'>
          <FullLogo />
          <FullLogoWhite />
          <LogoIcon />
          <LogoTest />
        </div>
      </div>
      <button type='button' onClick={() => setTheme(!theme)}>
        handle Theme
      </button>
    </>
  );
};

export default ViewSVGPage;
