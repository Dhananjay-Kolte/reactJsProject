import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  IChangeUserCart,
  getUserCart,
  changeUserCart,
} from '../actions/actions';
import { setLoadingUserCartSlice, setUserCart } from '../slice/slice';
import {
  getUserCartRequest,
  changeUserCartRequest,
} from '@/shared/api/services/userCart';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

function* workerGetUserCart() {
  try {
    yield put(setLoadingUserCartSlice(true));
    const response: IResponse<IUserCartItems> = yield getUserCartRequest();
    yield put(setUserCart(response.data));
    yield put(setLoadingUserCartSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingUserCartSlice(false));
  }
}

export function* watcherGetUserCart() {
  yield takeEvery(getUserCart.toString(), workerGetUserCart);
}

function* workerChangeUserCart({ payload }: PayloadAction<IChangeUserCart>) {
  try {
    yield put(setLoadingUserCartSlice(true));
    const response: IResponse<IUserCartItems> = yield changeUserCartRequest(
      payload,
    );
    yield put(setUserCart(response.data));
    if (payload.cartId !== null && response.data.cards.length > 0)
      if (payload.cardsId.length === 1)
        showSnackbar('Card added to withdrawal cart', 'success');
      else
        showSnackbar(
          `${payload.cardsId.length} of cards successfully added to withdrawal cart!`,
          'success',
        );

    yield put(setLoadingUserCartSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingUserCartSlice(false));
  }
}

export function* watcherUpdateUserCart() {
  yield takeEvery(changeUserCart.toString(), workerChangeUserCart);
}
