import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsLoadingAllCardsPage = (state: StateSchema) =>
  state.cards.isLoadingCards;

export const getNFTCardInAllCardsPage = (state: StateSchema) =>
  state.cards.NFTCard.NFTCard;
export const getErrorNFTCardAllCardsPage = (state: StateSchema) =>
  state.cards.NFTCard.isError;

export const getIsLoadingVerifyNFTCardInAllCardsPage = (state: StateSchema) =>
  state.cards.verifyNFtCard.isLoadingVerity;
export const getVerifyIdNFTCardInAllCardsPage = (state: StateSchema) =>
  state.cards.verifyNFtCard.currentVerifyId;
export const getVerifyNFTCardInAllCardsPage = (state: StateSchema) =>
  state.cards.verifyNFtCard.verifiedCard;

export const getTotalAllCardsPage = (state: StateSchema) =>
  state.cards.allUserCards.total;
export const getTotalAllCoastAllCardsPage = (state: StateSchema) =>
  state.cards.allUserCards.totalCardsCoast;
export const getFindTotalAllCardsPage = (state: StateSchema) =>
  state.cards.allUserCards.findTotal;
export const getTotalPagesAllCardsPage = (state: StateSchema) =>
  state.cards.allUserCards.totalPages;
export const getAllCardsPage = (state: StateSchema) =>
  state.cards.allUserCards.filterNFtCard;
export const getQtyByCategoryAllCardsPage = (state: StateSchema) =>
  state.cards.allUserCards.cardsQtyByCategory;
export const getClearAllCardsPage = (state: StateSchema) =>
  state.cards.allUserCards.clear;
