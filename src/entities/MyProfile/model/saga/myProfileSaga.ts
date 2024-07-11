import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  getMyProfileAction,
  setMyProfileAction,
  changesEmailProfileAction,
  IChangeEmailProfileActionProps,
} from '../actions/myProfileActions';
import {
  setLoadingMyProfileSlice,
  setEmailMyProfileSlice,
  setMyProfileSlice,
} from '../slice/myProfile';
import {
  setIsLoadingShipmentAddressesSlice,
  setShipmentAddressesSlice,
} from '@/entities/ShipmentAddresses';
import {
  updateProfileRequest,
  getProfileRequest,
  changesEmailProfileRequest,
} from '@/shared/api/services/profile';
import { getAllShipmentAddressesRequest } from '@/shared/api/services/shipping-address';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

function* workerGetMyProfile() {
  try {
    yield put(setLoadingMyProfileSlice(true));
    yield put(setIsLoadingShipmentAddressesSlice(true));
    const response: IResponse<IProfile> = yield getProfileRequest();
    yield put(setMyProfileSlice(response.data));
    yield put(
      setEmailMyProfileSlice(response.data.email ? response.data.email : ''),
    );
    const shipmentAddressesResponse: IResponse<IShipmentAddress[]> =
      yield getAllShipmentAddressesRequest();
    yield put(setShipmentAddressesSlice(shipmentAddressesResponse.data));
    yield put(setLoadingMyProfileSlice(false));
    yield put(setIsLoadingShipmentAddressesSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingMyProfileSlice(false));
    yield put(setIsLoadingShipmentAddressesSlice(false));
  }
}

export function* watcherGetMyProfile() {
  yield takeEvery(getMyProfileAction.toString(), workerGetMyProfile);
}

function* workerSetMyProfile({ payload }: PayloadAction<FormData>) {
  try {
    yield put(setLoadingMyProfileSlice(true));
    const response: IResponse<IProfile> = yield updateProfileRequest(payload);
    yield put(
      setEmailMyProfileSlice(response.data.email ? response.data.email : ''),
    );
    yield put(setMyProfileSlice(response.data));
    showSnackbar('Profile updated.', 'success');
    yield put(setLoadingMyProfileSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingMyProfileSlice(false));
  }
}

export function* watcherSetMyProfile() {
  yield takeEvery(setMyProfileAction.toString(), workerSetMyProfile);
}

function* workerChangesEmailMyProfile({
  payload,
}: PayloadAction<IChangeEmailProfileActionProps>) {
  try {
    const { email, typeAction } = payload;
    yield put(setLoadingMyProfileSlice(true));
    yield changesEmailProfileRequest({ email });
    if (typeAction === 'add')
      showSnackbar(
        'Confirmation email sent. Please verify your address.',
        'success',
      );
    if (typeAction === 'change')
      showSnackbar(
        'Confirmation email sent. Please verify your address.',
        'success',
      );
    if (typeAction === 'resent')
      showSnackbar(
        'Confirmation email sent. Please verify your address.',
        'success',
      );
    yield put(setLoadingMyProfileSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingMyProfileSlice(false));
  }
}

export function* watcherChangesEmailMyProfile() {
  yield takeEvery(
    changesEmailProfileAction.toString(),
    workerChangesEmailMyProfile,
  );
}
