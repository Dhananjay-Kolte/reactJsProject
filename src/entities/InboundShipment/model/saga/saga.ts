import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  IFieldsCreateInboundShipment,
  createInboundShipmentAction,
  getAllInboundShipmentsAction,
  getInboundShipmentIdAction,
  cancelInboundShipmentAction,
  IInboundShipmentTinyRadio,
  IUpdateInboundShipment,
  updateInboundShipmentAction,
  mintedInboundShipmentAction,
} from '../actions/actions';
import {
  setIsLoadingInboundShipmentSlice,
  setCreateInboundShipmentSlice,
  setInboundShipmentsActiveSlice,
  setInboundShipmentIdSlice,
  setInboundShipmentsDraftSlice,
  setInboundShipmentsPastSlice,
  setTypeModalInMintSlice,
  setIsLoadingMintInboundShipmentSlice,
} from '../slice/slice';
import { setAllNotificationsSlice } from '@/entities/Notifications';
import {
  cancelInboundShipmentRequest,
  getAllInboundShipmentsRequest,
  getInboundShipmentIdRequest,
  mintedInboundShipmentIdRequest,
  postCreateInboundShipmentRequest,
  updateInboundShipmentRequest,
} from '@/shared/api/services/inboundShipment';
import { getAllNotificationsRequest } from '@/shared/api/services/notifications';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

function* workerCreateInboundShipment({
  payload,
}: PayloadAction<IFieldsCreateInboundShipment>) {
  try {
    yield put(setIsLoadingInboundShipmentSlice(true));
    const response: IResponse<IShipmentInbound> =
      yield postCreateInboundShipmentRequest(payload);
    yield put(setCreateInboundShipmentSlice(response.data));
    yield put(getAllInboundShipmentsAction('Active'));
    yield put(setIsLoadingInboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingInboundShipmentSlice(false));
  }
}

export function* watcherCreateInboundShipment() {
  yield takeEvery(
    createInboundShipmentAction.toString(),
    workerCreateInboundShipment,
  );
}

function* workerGetInboundShipmentId({ payload }: PayloadAction<string>) {
  try {
    yield put(setIsLoadingInboundShipmentSlice(true));
    const response: IResponse<IShipmentInbound> =
      yield getInboundShipmentIdRequest(payload);
    yield put(setInboundShipmentIdSlice(response.data));
    yield put(setIsLoadingInboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingInboundShipmentSlice(false));
  }
}

export function* watcherGetInboundShipmentId() {
  yield takeEvery(
    getInboundShipmentIdAction.toString(),
    workerGetInboundShipmentId,
  );
}

function* workerGetAllInboundShipments({
  payload,
}: PayloadAction<IInboundShipmentTinyRadio>) {
  try {
    yield put(setIsLoadingInboundShipmentSlice(true));
    const response: IResponse<IShipmentInbound[]> =
      yield getAllInboundShipmentsRequest(payload);
    if (payload === 'Active')
      yield put(setInboundShipmentsActiveSlice(response.data));
    if (payload === 'Past')
      yield put(setInboundShipmentsPastSlice(response.data));
    if (payload === 'Draft')
      yield put(setInboundShipmentsDraftSlice(response.data));
    yield put(setIsLoadingInboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingInboundShipmentSlice(false));
  }
}

export function* watcherGetAllInboundShipments() {
  yield takeEvery(
    getAllInboundShipmentsAction.toString(),
    workerGetAllInboundShipments,
  );
}

function* workerCancelInboundShipment({ payload }: PayloadAction<string>) {
  try {
    yield put(setIsLoadingInboundShipmentSlice(true));
    yield cancelInboundShipmentRequest(payload);
    yield put(getAllInboundShipmentsAction('Active'));
    yield put(getAllInboundShipmentsAction('Past'));
    showSnackbar(`Shipment ${payload} canceled.`, 'success');
    yield put(setIsLoadingInboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingInboundShipmentSlice(false));
  }
}

export function* watcherCancelInboundShipment() {
  yield takeEvery(
    cancelInboundShipmentAction.toString(),
    workerCancelInboundShipment,
  );
}

function* workerUpdateInboundShipment({
  payload,
}: PayloadAction<IUpdateInboundShipment>) {
  try {
    yield put(setIsLoadingInboundShipmentSlice(true));
    const response: IResponse<IShipmentInbound> =
      yield updateInboundShipmentRequest(payload);
    yield put(setCreateInboundShipmentSlice(response.data));
    if (response.data) {
      const getAllNotificationsresponse: IResponse<INotification[]> =
        yield getAllNotificationsRequest();
      yield put(setAllNotificationsSlice(getAllNotificationsresponse.data));
    }
    if (payload.status && payload.status === 'New') {
      showSnackbar(`Shipment ${payload.shipmentId} resumed.`, 'success');
      yield put(getAllInboundShipmentsAction('Past'));
      yield put(getAllInboundShipmentsAction('Active'));
    } else yield put(getAllInboundShipmentsAction('Active'));

    yield put(setIsLoadingInboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingInboundShipmentSlice(false));
  }
}

export function* watcherUpdateInboundShipment() {
  yield takeEvery(
    updateInboundShipmentAction.toString(),
    workerUpdateInboundShipment,
  );
}

function* workerMintedInboundShipment({ payload }: PayloadAction<string>) {
  try {
    yield put(setIsLoadingMintInboundShipmentSlice(true));
    const response: IResponse<{
      transferred: number;
      failed: number;
      cards: ICard[];
    }> = yield mintedInboundShipmentIdRequest(payload);
    yield put(
      setTypeModalInMintSlice({ ...response.data, shipmentId: payload }),
    );
    if (response.data) {
      const getAllNotificationsresponse: IResponse<INotification[]> =
        yield getAllNotificationsRequest();
      yield put(setAllNotificationsSlice(getAllNotificationsresponse.data));
    }
    yield put(setIsLoadingMintInboundShipmentSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingMintInboundShipmentSlice(false));
  }
}

export function* watcherMintedInboundShipment() {
  yield takeEvery(
    mintedInboundShipmentAction.toString(),
    workerMintedInboundShipment,
  );
}
