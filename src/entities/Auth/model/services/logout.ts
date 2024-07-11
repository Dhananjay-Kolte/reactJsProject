import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const logOutReq = createAsyncThunk<any, void, ThunkConfig<string>>(
  'auth/logout',
  async (_props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<IResponse<any>>('auth/exit');
      localStorage.removeItem('isAuth');
      return response;
    } catch (e: unknown) {
      return rejectWithValue('something went wrong');
    }
  },
);
