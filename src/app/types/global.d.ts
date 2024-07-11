/* eslint-disable no-use-before-define */
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.module.scss' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.module.sass' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.module.css' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __IS_DEV_DEBUG__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

interface IDetectionOption {
  order: string[];
  lookupQuerystring: string;
  lookupCookie: string;
  lookupLocalStorage: string;
  lookupSessionStorage: string;
  caches: string[];
  excludeCacheFor: string[];
}

interface Environment {
  SIGNIN_GOOGLE_ID: string;
  CLIENT_APP_URL: string;
  API_URL: string;
  GOOGLE_ANALYTICS: string;
  NETWORK: string;
  APP_ENV: string;
  SENTRY_DSN: string;
  CROSSMINT_CLIENT_ID: string;
  MAGIC_LINK_ID: string;
  MERCHANT_ID: string;
  COINFLOW_ENV: string;
  RPC_URL: string;
}
declare let environment: Environment;

// service
interface IResponse<R = unknown> {
  data: R;
  status: number;
  success?: boolean;
}

interface IAction<P = unknown> {
  type: string;
  payload?: P;
}

interface IMessage {
  message: string;
}

interface IErrorMessage extends IMessage {
  error: string;
  statusCode: number;
}

// general
interface IFieldsPaginations {
  page: number;
  search: string;
  step: number;
}

// auth

interface Balance {
  SOL: string;
  USDC: string;
}
interface IProfile {
  appleId: string | null;
  createdAt: string;
  facebookId: string | null;
  googleId: string | null;
  id: string;
  isActivate: boolean;
  isActivateEmail: boolean;
  password: string;
  personalSite?: string;
  refreshToken: string;
  shippingAddress: string[];
  twitterUsername?: string;
  updatedAt: string;
  wallet: string;
  bio?: string;
  email?: string;
  name?: string;
  photo?: string;
  emailDiscoverable: boolean;
  activities: number;
  listings: number;
  offersMade: number;
  offersReceived: number;
  balance?: Balance;
}

// shipments
type ITypeShipments = 'inbound' | 'outbound';

interface IShipmentAddress {
  id: string;
  country: string;
  streetAddress: string;
  apartment: string;
  state: string;
  city: string;
  zip?: string;
  userId: string;
  fullName: string;
  isDefault: boolean;
}

type IStatusShipmentInbound =
  | 'New'
  | 'Shipped'
  | 'Received'
  | 'Processing'
  | 'Canceled'
  | 'PartlyMinted'
  | 'FullyMinted'
  | 'Draft';

interface IShipmentInbound {
  id: string;
  createdAt: string;
  updatedAt: string;
  numberOfCards: string;
  valueOfBox: string;
  description: string;
  trackingId: string | null;
  status: IStatusShipmentInbound;
  userId: string;
  user: {
    email: string;
  };
  location: string[];
  trackingUrl: string;
  cards?: IAllCardsInPagination;
}

type IStatusShipmentOutbound =
  | 'Pending'
  | 'PaymentPending'
  | 'Delivered'
  | 'Processing'
  | 'Shipped'
  | 'PaymentReceived'
  | '';

interface IShipmentOutbound {
  id: string;
  createdAt: string;
  numberOfCards: string;
  valueOfBox: string;
  trackingId: string;
  status: IStatusShipmentOutbound;
  address: IShipmentAddress;
  trackingUrl: string;
  feesCost: string;
  insurance: boolean;
  deliveryCompany: string;
  customer: string;
  customId: string;
  comment: null | string;
  separatePayment: boolean;
  solscanURL: string;
  transactionId: string;
  transactionURL: string;
  typeCurrency: string;
  shippingCost: string;
  insuranceCost: string;
  totalCost: string;
  cards?: IAllCardsInPagination;
  user: {
    email: string;
    wallet: string;
  };
}

// cards
type IStatusCards =
  | 'Transferred'
  | 'Minted'
  | 'Rejected'
  | 'RequestedBack'
  | 'Burned'
  | 'AwaitingSign'
  | '';

type IStatusMintCards =
  | 'Invalid'
  | 'Frozen'
  | 'Valid'
  | 'Burned'
  | 'Transferred'
  | '';

type ICurrency = 'USDC' | 'USDT';

interface IAllCardsInPagination {
  totalCount: number;
  findCount: number;
  page: string;
  step: string;
  cards: ICard[];
}

interface IAllUserCards {
  total: number;
  totalCardsCoast: string | null;
  findTotal: number;
  totalPages: number;
  filterNFtCard: ICard[];
  cardsQtyByCategory?: { [key: string]: number };
}

type IOrientation = 'horizontal' | 'vertical';

type TransactionsMultisigStatus = 'Ready' | 'Await' | 'Rejected' | 'Executed';

type TransactionsMultisigType = 'AwaitingMint' | 'AwaitingUpdate';

interface TransactionsMultisig {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  trxId?: string;
  trxUrl?: string;
  status: TransactionsMultisigStatus;
  type: TransactionsMultisigType;
  cards?: ICard[];
  cardId?: string;
}

type CardsView = 'groups' | 'table';
interface ICard {
  ReasonForRejection: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  itemName: string;
  frontImage: string;
  backImage: string;
  type: string;
  category: string;
  year: number;
  serial: string | null;
  insuredValue: string;
  autographed: boolean;
  status: IStatusCards;
  vault: string;
  location: string[];
  vaultId: string;
  gradingCompany: string;
  grade: string;
  gradingID: string | null;
  qualifiers: string[];
  authenticated: boolean;
  author: IProfile | null;
  centering: string | null;
  corners: string | null;
  surface: string | null;
  edges: string | null;
  owner: IProfile | null;
  contractAddress: string | null;
  blockchain: string | null;
  authorId: string;
  shippingId: string;
  suggestPrice: string | null;
  nftAddress: string;
  nftStatus: IStatusMintCards;
  submissionID: string;
  outboundShipmentId: string | null;
  cartId: string | null;
  burnId: string | null;
  gradeNum: number | null;
  ownerId: string | null;
  orientation: IOrientation;
  listing: IListing | null;
  offers: IOffer[] | [];
  transactionsMultisig: TransactionsMultisig[];
  images: {
    back: string;
    backM: string;
    backS: string;
    front: string;
    frontM: string;
    frontS: string;
    id: string;
    cardId: string;
  } | null;
}

interface IVerifyNFtCard {
  currentVerifyId: string;
  verifiedCard: ICard;
  isLoadingVerity: boolean;
}

interface IUserCartItems {
  cartId: string;
  count: number;
  totalPrice: number;
  cards: ICard[] | [];
}

interface IBurnedIdData {
  id: string;
  createAt: string;
  ownerId: string;
  count: number;
  countAllCards: number;
}

// activity
interface INotification {
  action: boolean;
  amount: string | null;
  category: string;
  createdAt: string;
  email: string | null;
  event: string | null;
  id: string;
  nftAddress: string | null;
  nftName: string | null;
  nftQty: number | null;
  read: boolean;
  shipmentId: string | null;
  trackingId: string | null;
  txId: string | null;
  txUrl: string | null;
  type: string;
  userId: string;
  wallet: string | null;
  receiverName: string | null;
}

// marketplace
// TODO Actual types when API will be
type TAccessorOffers = 'price' | 'from' | 'date' | 'action';

interface IMarketplaceColumn {
  accessor: string;
  label: string;
}

type TOfferStatus = 'Accepted' | 'Cancelled' | 'Active';

interface IListing {
  cardId: string;
  createdAt: string;
  currency: ICurrency;
  id: string;
  price: string;
  sellerId: string;
  updatedAt: string;
  card: ICard;
  sellerWallet?:String;
}

interface IOffer {
  buyerId: string;
  buyer: {
    id: string | null;
    name: string | null;
    wallet: string | null;
  };
  cardId: string;
  createdAt: string;
  expiryDate?: string;
  currency: ICurrency;
  id: string;
  price: string;
  status: TOfferStatus;
  updatedAt: string;
  best?: boolean;
}

type TypesPage =
  | 'burned'
  | 'marketplace'
  | 'allCards'
  | 'profile'
  | 'SealedBoxes';

interface IBuyerOffer {
  buyerId: string;
  cardId: string;
  createdAt?: string;
  expiryDate?: string
  currency: ICurrency;
  id: string;
  price: string;
  status: TOfferStatus;
  updatedAt: string;
  buyer: {
    id: string | null;
    name: string | null;
    wallet: string | null;
  };
  card: ICard;
  best?: boolean;
}
interface SelectItems<T extends string> {
  name: T;
  id: string | number;
}

type SortTypes =
  | 'nameAsc'
  | 'nameDesc'
  | 'priceAsc'
  | 'priceDesc'
  | 'dateAsc'
  | 'dateDesc'
  | 'yearAsc'
  | 'yearDesc'
  | '';

type RefDiv = HTMLDivElement;
type RefBTN = HTMLButtonElement;
type RefInput = HTMLInputElement;
interface AutocompleteUiItem<T extends string> {
  title: T;
  id: string;
}

interface BoxActivity {
  id: string;
  action: string;
  amount: number;
  box: SealedBox;
  boxId: string;
  createdAt: string;
  from?: string;
  qty?: number;
  to?: string;
  txUrl?: string;
}

interface User {
  id: string;
  wallet: string;
  name?: string;
}
interface BoxListing {
  id: string;
  box: SealedBox;
  boxId: string;
  createdAt: string;
  currency?: ICurrency;
  price: number;
  qty?: number;
  seller: User;
  sellerId: string;
  updatedAt: string;
}

interface BoxesOwners {
  box: SealedBox;
  boxId: string;
  owner: User;
  ownerId: string;
  qty: number;
}
interface SealedBox {
  id: string;
  chunkId: string;
  owners: number | null;
  boxes: number;
  owned?: number;
  listed: null;
  bestPrice: null;
  bestQty: null;
  category: string;
  description?: string;
  insuredValue: string;
  location: string[];
  // owner: User;
  ownerId: string;
  name: string;
  qty: number;
  status: IStatusCards;
  type: string;
  vault: string;
  vaultId?: string;
  year: number;
  address: string;
  createdAt: string;
  updatedAt: string;
  backImage: null | string;
  backImageM: null | string;
  backImageS: null | string;
  frontImage: string;
  frontImageM: string;
  frontImageS: string;
  cart?: boolean;
}

interface ITab<T> {
  count?: number;
  tabName: T;
  iconComingSoon?: boolean;
  iconPosition?: 'bottom' | 'top' | 'end' | 'start';
  disabled?: boolean;
  active?: boolean;
  link?: string;
}
