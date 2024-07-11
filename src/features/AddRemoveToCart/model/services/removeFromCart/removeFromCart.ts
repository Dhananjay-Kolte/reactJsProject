import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface PayloadReq {
  assetId: string;
}

export const removeFromCart = createAsyncThunk<
  any,
  PayloadReq,
  ThunkConfig<string>
>('cart/removeFromCart', async ({ assetId }, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const data = JSON.stringify({ assetId });
  const { api } = extra;
  try {
    const response = await api.delete<any>('/cart', {
      data,
    });
    return response.data;
  } catch (e: unknown) {
    return rejectWithValue('Ooops! Something went wrong...');
  }
});
