import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  IFieldsShipmentAddress,
  IFieldsUpdateShipmentAddress,
  createShippingAddressAction,
  changeShippingAddressAction,
  deleteShippingAddressAction,
  getShippingsAddressAction,
  getShippingsAddressesAction,
} from '../actions/actions';
import {
  setIsLoadingShipmentAddressesSlice,
  setShipmentAddressIdSlice,
  setShipmentAddressesSlice,
  setAddShipmentAddressesSlice,
  setUpdateShipmentAddressesSlice,
  setRemoveShipmentAddressesSlice,
} from '../slice/slice';
import {
  postShippingAddressCreateRequest,
  patchShippingAddressUpdateRequest,
  deleteShippingAddressRequest,
  getShipmentIdRequest,
  getAllShipmentAddressesRequest,
} from '@/shared/api/services/shipping-address';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

function* workerGetShipmentAddressId({ payload }: PayloadAction<string>) {
  try {
    yield put(setIsLoadingShipmentAddressesSlice(true));
    const response: IResponse<IShipmentAddress> = yield getShipmentIdRequest(
      payload,
    );
    yield put(setShipmentAddressIdSlice(response.data));
    yield put(setIsLoadingShipmentAddressesSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingShipmentAddressesSlice(false));
  }
}

export function* watcherGetShipmentAddressId() {
  yield takeEvery(
    getShippingsAddressAction.toString(),
    workerGetShipmentAddressId,
  );
}

function* workerGetAllShipmentAddresses() {
  try {
    yield put(setIsLoadingShipmentAddressesSlice(true));
    const response: IResponse<IShipmentAddress[]> =
      yield getAllShipmentAddressesRequest();
    yield put(setShipmentAddressesSlice(response.data));
    yield put(setIsLoadingShipmentAddressesSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingShipmentAddressesSlice(false));
  }
}

export function* watcherGetAllShipmentAddresses() {
  yield takeEvery(
    getShippingsAddressesAction.toString(),
    workerGetAllShipmentAddresses,
  );
}

function* workerCreateShipmentAddress({
  payload,
}: PayloadAction<IFieldsShipmentAddress>) {
  try {
    yield put(setIsLoadingShipmentAddressesSlice(true));
    const response: IResponse<IShipmentAddress> =
      yield postShippingAddressCreateRequest(payload);
    yield put(setAddShipmentAddressesSlice(response.data));
    const addressesResponse: IResponse<IShipmentAddress[]> =
      yield getAllShipmentAddressesRequest();
    yield put(setShipmentAddressesSlice(addressesResponse.data));
    showSnackbar('Address added.', 'success');
    yield put(setIsLoadingShipmentAddressesSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingShipmentAddressesSlice(false));
  }
}

export function* watcherCreateShipmentAddress() {
  yield takeEvery(
    createShippingAddressAction.toString(),
    workerCreateShipmentAddress,
  );
}

function* workerUpdateShipmentAddress({
  payload,
}: PayloadAction<IFieldsUpdateShipmentAddress>) {
  try {
    yield put(setIsLoadingShipmentAddressesSlice(true));
    const response: IResponse<IShipmentAddress> =
      yield patchShippingAddressUpdateRequest(payload);
    yield put(setUpdateShipmentAddressesSlice(response.data));
    showSnackbar('Address edited.', 'success');
    const addressesResponse: IResponse<IShipmentAddress[]> =
      yield getAllShipmentAddressesRequest();
    yield put(setShipmentAddressesSlice(addressesResponse.data));
    yield put(setIsLoadingShipmentAddressesSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingShipmentAddressesSlice(false));
  }
}

export function* watcherUpdateShipmentAddress() {
  yield takeEvery(
    changeShippingAddressAction.toString(),
    workerUpdateShipmentAddress,
  );
}

function* workerRemoveShipmentAddress({ payload }: PayloadAction<string>) {
  try {
    yield put(setIsLoadingShipmentAddressesSlice(true));
    const response: IResponse<IShipmentAddress> =
      yield deleteShippingAddressRequest(payload);
    yield put(setRemoveShipmentAddressesSlice(response.data.id));
    showSnackbar('Address deleted.', 'success');
    yield put(setIsLoadingShipmentAddressesSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setIsLoadingShipmentAddressesSlice(false));
  }
}

export function* watcherRemoveShipmentAddress() {
  yield takeEvery(
    deleteShippingAddressAction.toString(),
    workerRemoveShipmentAddress,
  );
}
