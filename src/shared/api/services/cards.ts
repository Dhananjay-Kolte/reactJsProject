import { get, patch } from '../index';
import urls from '../urls';
import {
  ISelectFiltersAction,
  IChangeCardPayload,
  IGetAllCardInShipmentFields,
} from '@/entities/AllCards';

export const getAllCardsInInboundShipmentRequest = (
  payload: IGetAllCardInShipmentFields,
) => get(urls.cards.getAllCardsInInboundShipment(payload));

export const getAllUserCardsRequest = (payload: ISelectFiltersAction) =>
  get(
    urls.cards.getAllUserCards(payload),
    payload.filters.categories.length > 0
      ? { categories: payload.filters.categories.join(',') }
      : {},
  );

export const getCardRequest = (payload: number) =>
  get(urls.cards.getCard(payload));

export const getNFTCardRequest = (payload: string) =>
  get(urls.cards.getNFTCard(payload));

export const verifyNFTCardRequestById = (payload: string) =>
  get(urls.cards.getNFTCard(payload));

export const changeCardRequest = (payload: IChangeCardPayload) => {
  const { cardId, ...options } = payload;
  return patch(urls.cards.changeCard(cardId), { ...options });
};

export const reloadAllCardsRequest = (payload?: string) =>
  patch(urls.cards.reloadAllCards(payload || ''));

export const reloadCardRequest = (payload: string) =>
  patch(urls.cards.reloadCard(payload));
