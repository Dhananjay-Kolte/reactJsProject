import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVerifyNFtCardPayload } from '../actions/allCardsActions';
import { initialCard } from '@/shared/const/initialStates';

export interface IAllUserCardsReload extends IAllUserCards {
  clear?: 'clear';
}

export interface ICardInitialState {
  isLoadingCards: boolean;
  card: ICard;
  NFTCard: {
    NFTCard: ICard;
    isError: boolean;
  };
  verifyNFtCard: IVerifyNFtCard;
  allUserCards: IAllUserCardsReload;
  openedImage: string[];
}

const initialState: ICardInitialState = {
  NFTCard: {
    NFTCard: initialCard,
    isError: false,
  },
  allUserCards: {
    cardsQtyByCategory: {},
    filterNFtCard: [],
    findTotal: 0,
    total: 0,
    totalCardsCoast: '0',
    totalPages: 1,
  },
  card: initialCard,
  isLoadingCards: false,
  openedImage: [],
  verifyNFtCard: {
    currentVerifyId: '',
    isLoadingVerity: false,
    verifiedCard: initialCard,
  },
};

export const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    clearAllUserCardsSlice: state => {
      state.allUserCards.filterNFtCard = [];
    },
    setAllUserCardsSlice: (
      state,
      { payload }: PayloadAction<IAllUserCardsReload>,
    ) => {
      const copyArray: ICard[] = [...state.allUserCards.filterNFtCard].concat(
        payload.filterNFtCard,
      );
      state.allUserCards.filterNFtCard =
        payload.clear === 'clear' ? payload.filterNFtCard : copyArray;
      state.allUserCards.cardsQtyByCategory = payload.cardsQtyByCategory;
      state.allUserCards.total = payload.total;
      state.allUserCards.findTotal = payload.findTotal;
      state.allUserCards.totalCardsCoast = payload.totalCardsCoast;
      state.allUserCards.totalPages = payload.totalPages
        ? payload.totalPages
        : 1;
    },
    setCardSlice: (state, { payload }: PayloadAction<ICard>) => {
      state.card = payload;
    },
    setChangeTotalSlice: (state, { payload }: PayloadAction<IBurnedIdData>) => {
      state.allUserCards.total = payload.countAllCards;
    },
    setClearNFTCardSlice: state => {
      state.NFTCard = initialState.NFTCard;
    },
    setErrorNFTCardSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.NFTCard.isError = payload;
    },
    setLoadingCardsSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingCards = payload;
    },
    setNFTCardSlice: (state, { payload }: PayloadAction<ICard>) => {
      state.NFTCard.NFTCard = payload;
    },
    setOpenedImages: (state, { payload }: PayloadAction<string[]>) => {
      state.openedImage = [...payload];
    },
    setResetCardsSlice: state => {
      state.allUserCards = initialState.allUserCards;
      state.card = initialState.card;
      state.isLoadingCards = initialState.isLoadingCards;
      state.openedImage = initialState.openedImage;
    },
    setResetVerifyNFTCardSlice: (
      state,
      { payload }: PayloadAction<IVerifyNFtCardPayload>,
    ) => {
      if (payload.emptyCard)
        state.verifyNFtCard.verifiedCard =
          initialState.verifyNFtCard.verifiedCard;
      state.verifyNFtCard.currentVerifyId = '';
    },
    setVerifyNFTCardSlice: (
      state,
      {
        payload,
      }: PayloadAction<{
        response: ICard;
        currentId: string;
        isLoadingVerity: boolean;
      }>,
    ) => {
      state.verifyNFtCard.verifiedCard = payload.response;
      state.verifyNFtCard.currentVerifyId = payload.currentId;
      state.verifyNFtCard.isLoadingVerity = payload.isLoadingVerity;
    },
  },
});

export const {
  setLoadingCardsSlice,
  setCardSlice,
  setNFTCardSlice,
  setErrorNFTCardSlice,
  setClearNFTCardSlice,
  setVerifyNFTCardSlice,
  setAllUserCardsSlice,
  setChangeTotalSlice,
  clearAllUserCardsSlice,
  setResetCardsSlice,
  setResetVerifyNFTCardSlice,
  setOpenedImages,
} = cardsSlice.actions;

export const { reducer: cardReducer } = cardsSlice;
