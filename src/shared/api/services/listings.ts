import {
  ICreateListingOrOfferTx,
  ICreateCancelListingTx,
  ITX,
  ICreateUpdateListingTx,
  ICreateCancelOrAcceptOfferTx,
  IGetListingFees,
  ICardIdProp,
  ICreateUpdateOfferTx,
  ICreateListBoxTx,
  ISealedBoxTX,
  ICreateUpdateListBoxTx,
} from './types/types';
import { post, postRPC } from '../index';
import urls from '../urls';
import { IGetOffersBySideProps } from '@/pages/Marketplace';

export const createListingTxRequest = (params: ICreateListingOrOfferTx) =>
  postRPC({ method: urls.listings.createListTx, params });

export const createOfferTxRequest = (params: ICreateListingOrOfferTx) =>
  postRPC({ method: urls.listings.createMakeOfferTx, params });

export const createCancelListingTxRequest = (params: ICreateCancelListingTx) =>
  postRPC({ method: urls.listings.createCancelListingTx, params });

export const createUpdateListingTxRequest = (params: ICreateUpdateListingTx) =>
  postRPC({ method: urls.listings.createUpdateListingTx, params });

export const createUpdateOfferTxRequest = (params: ICreateUpdateOfferTx) =>
  postRPC({ method: urls.listings.createUpdateOfferTx, params });

export const createCancelOfferTxRequest = (
  params: ICreateCancelOrAcceptOfferTx,
) => postRPC({ method: urls.listings.createCancelOfferTx, params });

export const createAcceptOfferTxRequest = (
  params: ICreateCancelOrAcceptOfferTx,
) => postRPC({ method: urls.listings.createAcceptOfferTx, params });

export const getListingFeesRequest = (params: IGetListingFees) =>
  postRPC({ method: urls.listings.calcListingFee, params });

export const getBuyerOffersRequest = (payload: IGetOffersBySideProps) =>
  postRPC({
    method: urls.listings.getBuyerOffers,
    params: payload.params,
  });

export const getSellerOffersRequest = (payload: IGetOffersBySideProps) =>
  postRPC({
    method: urls.listings.getSellerOffers,
    params: payload.params,
  });

export const getSellerListingRequest = (payload: IGetOffersBySideProps) =>
  postRPC({
    method: urls.listings.getSellerListings,
    params: payload.params,
  });

export const createQuickBuyTxRequest = (params: ICardIdProp) =>
  postRPC({ method: urls.listings.createQuickBuyTx, params });

export const GetCardOffersRequest = (params: ICardIdProp) =>
  postRPC({ method: urls.listings.getCardOffers, params });

export const createBoxListingRequest = (params: ICreateListBoxTx) =>
  post(urls.listings.boxes, {
    method: urls.listings.listingCreateTxCreate,
    params,
  });

export const createBoxListingUpdateRequest = (params: ICreateUpdateListBoxTx) =>
  post(urls.listings.boxes, {
    method: urls.listings.listingUpdateTxCreate,
    params,
  });

export const sendQuickTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendQuickBuyTx, params });

export const sendAcceptOfferTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendAcceptOfferTx, params });

export const sendCancelListingTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendCancelListingTx, params });

export const sendCancelOfferTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendCancelOfferTx, params });

export const sendListTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendListTx, params });

export const sendUpdateListingTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendUpdateListingTx, params });

export const sendListingCreateTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.listingCreateTxSend, params });

export const sendMakeOfferTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendMakeOfferTx, params });

export const sendUpdateOfferTxsRequest = (params: ITX | ISealedBoxTX) =>
  postRPC({ method: urls.listings.sendUpdateOfferTx, params });
