import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import {
  changeCardAction,
  getAllCardsInShipmentAction,
  getCardAction,
  getNFTCardAction,
  getAllUserCards,
  IChangeCardPayload,
  IVerifyNFtCardPayload,
  IGetAllCardInShipmentFields,
  verifyNFTCardAction,
  ISelectFiltersAction,
  reloadAllCardsAction,
  reloadCardAction,
  clearNFTCardAction,
  IGetNFTCardPayload,
} from '../actions/allCardsActions';
import { emptyNFTCard } from '../const/emptyNFTCard';
import {
  setCardSlice,
  setNFTCardSlice,
  setErrorNFTCardSlice,
  setClearNFTCardSlice,
  setVerifyNFTCardSlice,
  setResetVerifyNFTCardSlice,
  setAllUserCardsSlice,
  setLoadingCardsSlice,
} from '../slice/allCards';
import {
  setCardsInboundShipmentsActiveSlice,
  setCardsInboundShipmentsPastSlice,
  setCardsInboundShipmentsDraftSlice,
} from '@/entities/InboundShipment';
import {
  setCardsOutboundShipmentsActiveSlice,
  setCardsOutboundShipmentsPastSlice,
} from '@/entities/OutboundShipment';
import {
  changeCardRequest,
  getAllCardsInInboundShipmentRequest,
  getCardRequest,
  getNFTCardRequest,
  verifyNFTCardRequestById,
  getAllUserCardsRequest,
  reloadAllCardsRequest,
  reloadCardRequest,
} from '@/shared/api/services/cards';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

function* workerGetAllCardsInShipment({
  payload,
}: PayloadAction<IGetAllCardInShipmentFields>) {
  const { typeShipment, shipmentId, typeTiny } = payload;
  try {
    yield put(setLoadingCardsSlice(true));
    const response: IResponse<IAllCardsInPagination> =
      yield getAllCardsInInboundShipmentRequest(payload);
    const dataInSlice = { data: response.data, shipmentId };
    if (typeShipment === 'inbound') {
      if (typeTiny === 'Active')
        yield put(setCardsInboundShipmentsActiveSlice(dataInSlice));
      if (typeTiny === 'Past')
        yield put(setCardsInboundShipmentsPastSlice(dataInSlice));
      if (typeTiny === 'Draft')
        yield put(setCardsInboundShipmentsDraftSlice(dataInSlice));
    } else {
      if (typeTiny === 'Active')
        yield put(setCardsOutboundShipmentsActiveSlice(dataInSlice));
      if (typeTiny === 'Past')
        yield put(setCardsOutboundShipmentsPastSlice(dataInSlice));
    }
    yield put(setLoadingCardsSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingCardsSlice(false));
  }
}

export function* watcherGetAllCardsInShipment() {
  yield takeEvery(
    getAllCardsInShipmentAction.toString(),
    workerGetAllCardsInShipment,
  );
}

function* workerGetAllUserCards({
  payload,
}: PayloadAction<ISelectFiltersAction>) {
  try {
    yield put(setLoadingCardsSlice(true));
    const response: IResponse<IAllUserCards> = yield getAllUserCardsRequest(
      payload,
    );
    yield put(
      setAllUserCardsSlice({
        ...response.data,
        clear: payload.clear ? payload.clear : undefined,
      }),
    );
    yield put(setLoadingCardsSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingCardsSlice(false));
  }
}

export function* watcherGetAllUserCards() {
  yield takeEvery(getAllUserCards.toString(), workerGetAllUserCards);
}

function* workerGetCard({ payload }: PayloadAction<number>) {
  try {
    yield put(setLoadingCardsSlice(true));
    const response: IResponse<ICard> = yield getCardRequest(payload);
    yield put(setCardSlice(response.data));
    yield put(setLoadingCardsSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingCardsSlice(false));
  }
}

export function* watcherGetCard() {
  yield takeEvery(getCardAction.toString(), workerGetCard);
}

function* workerGetNFTCard({ payload }: PayloadAction<IGetNFTCardPayload>) {
  try {
    if (payload.withLoading) yield put(setLoadingCardsSlice(true));

    const response: IResponse<ICard> = yield getNFTCardRequest(
      payload.cardAddress,
    );
    yield put(setNFTCardSlice(response.data));
    if (payload.withLoading) yield put(setLoadingCardsSlice(false));

    if (!Object.keys(response.data).length)
      yield put(setErrorNFTCardSlice(true));
  } catch (error) {
    errorHandlerForSaga(error);
    if (payload.withLoading) yield put(setLoadingCardsSlice(false));
  }
}

export function* watcherGetNFTCard() {
  yield takeEvery(getNFTCardAction.toString(), workerGetNFTCard);
}

function* workerVerifyNFTCard({
  payload,
}: PayloadAction<IVerifyNFtCardPayload>) {
  yield put(
    setVerifyNFTCardSlice({
      currentId: '',
      isLoadingVerity: true,
      response: emptyNFTCard,
    }),
  );
  try {
    const response: IResponse<ICard> = yield verifyNFTCardRequestById(
      payload?.id?.split('/').pop() as string,
    );
    yield put(
      setVerifyNFTCardSlice({
        currentId: payload.id ? payload.id : '',
        isLoadingVerity: false,
        response: response.data ? response.data : emptyNFTCard,
      }),
    );
  } catch (error) {
    yield put(
      setVerifyNFTCardSlice({
        currentId: '',
        isLoadingVerity: false,
        response: emptyNFTCard,
      }),
    );
    errorHandlerForSaga(error);
    if (axios.isAxiosError(error))
      if (error.response?.status === 409)
        yield put(setResetVerifyNFTCardSlice(payload));
      else throw new Error(error as unknown as string);
  }
}

export function* watcherVerifyNFTCard() {
  yield takeEvery(verifyNFTCardAction.toString(), workerVerifyNFTCard);
}

function* workerChangeCard({ payload }: PayloadAction<IChangeCardPayload>) {
  try {
    yield put(setLoadingCardsSlice(true));
    const response: IResponse<ICard> = yield changeCardRequest(payload);
    yield put(setCardSlice(response.data));
    showSnackbar('Your price suggestion has been submitted', 'success');
    yield put(setLoadingCardsSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingCardsSlice(false));
  }
}

export function* watcherUpdateCard() {
  yield takeEvery(changeCardAction.toString(), workerChangeCard);
}

function* workerReloadAllCards({
  payload,
}: PayloadAction<ISelectFiltersAction>) {
  try {
    yield put(setLoadingCardsSlice(true));
    yield reloadAllCardsRequest(payload.wallet);
    showSnackbar(
      'We’ve queued this item for an update! Check back in a minute...',
      'success',
    );
    yield put(setLoadingCardsSlice(false));
    yield put(getAllUserCards({ ...payload, clear: 'clear' }));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingCardsSlice(false));
  }
}

export function* watcherReloadAllCards() {
  yield takeEvery(reloadAllCardsAction.toString(), workerReloadAllCards);
}

function* workerReloadCard({ payload }: PayloadAction<IGetNFTCardPayload>) {
  try {
    yield put(setLoadingCardsSlice(true));
    yield reloadCardRequest(payload.cardAddress);
    showSnackbar(
      'We’ve queued this item for an update! Check back in a minute...',
      'success',
    );
    yield put(setLoadingCardsSlice(false));
    yield put(getNFTCardAction(payload));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingCardsSlice(false));
  }
}

export function* watcherReloadCard() {
  yield takeEvery(reloadCardAction.toString(), workerReloadCard);
}

function* workerClearNFTCard() {
  yield put(setClearNFTCardSlice());
}

export function* watcherClearNFTCard() {
  yield takeEvery(clearNFTCardAction.toString(), workerClearNFTCard);
}
