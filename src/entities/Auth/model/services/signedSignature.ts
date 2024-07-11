import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLogin } from '../types/auth';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface FieldSignature {
  signature: string;
  message: string | null;
}

export const signedSignatureReq = createAsyncThunk<
  IUserLogin,
  FieldSignature,
  ThunkConfig<string>
>('auth/signature', async (props, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.post<IUserLogin>('auth/entry', props);
    if (response.data.wallet)
      localStorage.setItem('wallet', response.data.wallet);
    localStorage.setItem('isAuth', 'true');
    return response.data;
  } catch (e: unknown) {
    return rejectWithValue('something went wrong');
  }
});
