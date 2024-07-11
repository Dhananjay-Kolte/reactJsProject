import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  // getNotificationsAction,
  IMarkAsReadNotification,
  markAsReadNotificationAction,
} from '../actions/actions';
import {
  setLoadingSlice,
  setAllNotificationsSlice,
} from '../slice/notifications';
import {
  getAllNotificationsRequest,
  patchMarkAsReadedRequest,
} from '@/shared/api/services/notifications';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';

// function* workerGetAllNotifications() {
//   try {
//     yield put(setLoadingSlice(true));
//     const response: IResponse<INotification[]> =
//       yield getAllNotificationsRequest();
//     yield put(setAllNotificationsSlice(response.data));
//     yield put(setLoadingSlice(false));
//   } catch (error) {
//     errorHandlerForSaga(error);
//     yield put(setLoadingSlice(false));
//   }
// }

// export function* watcherGetAllNotifications() {
//   yield takeEvery(getNotificationsAction.toString(), workerGetAllNotifications);
// }

function* workerMarkAsReadNotification({
  payload,
}: PayloadAction<IMarkAsReadNotification>) {
  try {
    yield put(setLoadingSlice(true));
    const markAsReadResponse: IResponse<IMarkAsReadNotification> =
      yield patchMarkAsReadedRequest(payload);
    if (markAsReadResponse.data) {
      const getAllNotificationsresponse: IResponse<INotification[]> =
        yield getAllNotificationsRequest();
      yield put(setAllNotificationsSlice(getAllNotificationsresponse.data));
    }
    yield put(setLoadingSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingSlice(false));
  }
}

export function* watcherMarkAsReadNotification() {
  yield takeEvery(
    markAsReadNotificationAction.toString(),
    workerMarkAsReadNotification,
  );
}
