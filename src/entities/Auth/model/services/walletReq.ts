import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserSignature, IWalletLogin } from '../types/auth';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';

export const walletReq = createAsyncThunk<
  IUserSignature,
  IWalletLogin,
  ThunkConfig<string>
>(
  'auth/wallet',
  async (
    { wallet, email, isMagicLink, reload },
    { extra, rejectWithValue },
  ) => {
    try {
      const response = await extra.api.post<IUserSignature>(
        'auth/entry/message',
        {
          email,
          wallet,
        },
      );
      reload && window.location.reload();
      return response.data;
    } catch (e: unknown) {
      if (!isMagicLink) errorHandlerForSaga(e);
      return rejectWithValue('something went wrong');
    }
  },
);
