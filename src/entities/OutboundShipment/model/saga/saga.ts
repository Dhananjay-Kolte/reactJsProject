import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  IFieldsCreateOutboundShipment,
  createOutboundShipmentAction,
  getAllOutboundShipmentsAction,
  getOutboundShipmentIdAction,
  IOutboundShipmentTinyRadio,
} from '../actions/actions';
import {
  setIsLoadingOutboundShipmentSlice,
  setCreateOutboundShipmentSlice,
  setOutboundShipmentsActiveSlice,
  setOutboundShipmentIdSlice,
  setOutboundShipmentsPastSlice,
} from '../slice/slice';
import {
  getAllOutboundShipmentsRequest,
  getOutboundShipmentIdRequest,
  postCreateOutboundShipmentRequest,
} from '@/shared/api/services/outboundShipment';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';

function* workerCreateOutboundShipment({
  payload,
}: PayloadAction<IFieldsCreateOutboundShipment>) {
  try {
    yield put(setIsLoadingOutboundShipmentSlice(true));
    const response: IResponse<IShipmentOutbound> =
      yield postCreateOutboundShipmentRequest(payload);
    yield put(setCreateOutboundShipmentSlice(response.data));
    yield put(setIsLoadingOutboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingOutboundShipmentSlice(false));
  }
}

export function* watcherCreateOutboundShipment() {
  yield takeEvery(
    createOutboundShipmentAction.toString(),
    workerCreateOutboundShipment,
  );
}

function* workerGetOutboundShipmentId({ payload }: PayloadAction<string>) {
  try {
    yield put(setIsLoadingOutboundShipmentSlice(true));
    const response: IResponse<IShipmentOutbound> =
      yield getOutboundShipmentIdRequest(payload);
    yield put(setOutboundShipmentIdSlice(response.data));
    yield put(setIsLoadingOutboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingOutboundShipmentSlice(false));
  }
}

export function* watcherGetOutboundShipmentId() {
  yield takeEvery(
    getOutboundShipmentIdAction.toString(),
    workerGetOutboundShipmentId,
  );
}

function* workerGetAllOutboundShipments({
  payload,
}: PayloadAction<IOutboundShipmentTinyRadio>) {
  try {
    yield put(setIsLoadingOutboundShipmentSlice(true));
    const response: IResponse<IShipmentOutbound[]> =
      yield getAllOutboundShipmentsRequest(payload);
    if (payload === 'Active')
      yield put(setOutboundShipmentsActiveSlice(response.data));
    if (payload === 'Past')
      yield put(setOutboundShipmentsPastSlice(response.data));
    yield put(setIsLoadingOutboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingOutboundShipmentSlice(false));
  }
}

export function* watcherGetAllOutboundShipments() {
  yield takeEvery(
    getAllOutboundShipmentsAction.toString(),
    workerGetAllOutboundShipments,
  );
}
