export interface IModalIsOpen {
  isOpen: boolean;
}

export interface IModalIsOpenWithType extends IModalIsOpen {
  typeModal: string;
}

export interface ISetIsModalFunc {
  setIsModalOpen: (
    modalName: string,
    value: IModalIsOpen | IModalIsOpenWithType,
  ) => void;
}

export interface IDivededModalsState {
  buyNow: IModalIsOpen;
  acceptOffer: IModalIsOpen;
  cancelOffer: IModalIsOpenWithType;
  listCard: IModalIsOpenWithType;
  makeOffer: IModalIsOpenWithType;
  transferCard: IModalIsOpen;
}

export interface IIsExpanded {
  details: boolean;
  offers: boolean;
  activity: boolean;
}

export interface IOfferToModalProps {
  from?: string;
  to?: string;
  price: string;
  offerId: string;
}

export interface INFTOffersProps {
  offers: IOffer[];
  isExpanded: {
    details: boolean;
    offers: boolean;
    activity: boolean;
  };
  updateExpand: (somekey: string, value: boolean) => void;
  isPublic: boolean;
  currentUserWallet: string | undefined;
  handleOpenModalCancelOffers: (offerId: string, typeModal: string) => void;
  handleOpenAcceptOffer: (offerId: IOffer) => void;
  handleOpenMakeOffer?: (offer: IOffer | null, typeModal: string) => void;
  cardStatus: IStatusCards;
}

interface IMoreDetailsCardProps {
  insuredValue: string;
  authenticated: boolean | null;
  grade: string;
  centering: string | null;
  corners: string | null;
  edges: string | null;
  qualifiers: string[] | string;
  surface: string | null;
  contractAddress: string;
  blockchain: string;
  vault: string;
  location: string[];
  ownerWallet: string;
  ownerName: string | null;
  gradingCompany: string;
  status: IStatusCards | IStatusShipmentInbound | IStatusMintCards;
  gradeNum: number | null;
  gradeId: string | null;
  vaultId: string | null;
  listing: IListing | null;
  nftAddress: string;
  nftStatus: IStatusMintCards;
}

export interface ICardDetailsProps {
  isExpanded?: {
    details: boolean;
    offers: boolean;
    activity: boolean;
  };
  updateExpand?: (somekey: string, value: boolean) => void;
  handleOpenModalBuynow?: () => void;
  handleOpenModalListCard?: (offerId: string | null, typeModal: string) => void;
  handleOpenMakeOffer?: (offer: IOffer | null, typeModal: string) => void;
  handleOpenModalCancelOffer?: (offerId: string, typeModal: string) => void;
}

export interface IListingButtonsProps extends ICardDetailsProps {
  moreDetails: IMoreDetailsCardProps;
}

export interface ICardDetailMoreProps {
  moreDetails: IMoreDetailsCardProps;
}
