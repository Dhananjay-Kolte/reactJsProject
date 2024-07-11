import { createAction } from '@reduxjs/toolkit';
import { ISelectFilters } from '../types/allCards';
import { IInboundShipmentTinyRadio } from '@/entities/InboundShipment';
import { IOutboundShipmentTinyRadio } from '@/entities/OutboundShipment';

export interface IGetAllCardInShipmentFields {
  shipmentId: string;
  typeTiny: IInboundShipmentTinyRadio | IOutboundShipmentTinyRadio;
  fields: IFieldsPaginations;
  typeShipment: ITypeShipments;
}

export interface IChangeCardPayload extends Partial<ICard> {
  cardId: string;
}

export interface IVerifyNFtCardPayload {
  id?: string;
  emptyCard: boolean;
  type: string;
}

export interface IGetNFTCardPayload {
  cardAddress: string;
  withLoading?: boolean;
}

export interface ISelectFiltersAction {
  wallet?: string;
  filters: ISelectFilters;
  page: string;
  step: string;
  search: string;
  clear?: 'clear';
}

export const getAllCardsInShipmentAction =
  createAction<IGetAllCardInShipmentFields>('CARDS/GET_ALL_CARDS_IN_SHIPMENT');

export const getAllUserCards = createAction<ISelectFiltersAction>(
  'CARDS/GET_ALL_USER_CARDS',
);

export const getCardAction = createAction<string>('CARDS/GET_CARD');

export const getNFTCardAction = createAction<IGetNFTCardPayload>(
  'CARDS/GET__NFT_CARD',
);

export const clearNFTCardAction = createAction('CARDS/CLEAR_NFT_CARD');

export const verifyNFTCardAction = createAction<IVerifyNFtCardPayload>(
  'CARDS/VERIFY_NFT_CARD',
);

export const changeCardAction =
  createAction<IChangeCardPayload>('CARDS/CHANGE_CARD');

export const reloadAllCardsAction = createAction<ISelectFiltersAction>(
  'CARDS/RELOAD_ALL_CARDS',
);

export const reloadCardAction =
  createAction<IGetNFTCardPayload>('CARDS/RELOAD_CARD');
