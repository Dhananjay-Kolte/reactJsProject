import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartType } from '../../types/cartTypes';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface Payload {
  type: cartType;
  id: string;
}

interface PayloadReq {
  assets: Payload[];
}

export const addToCart = createAsyncThunk<
  unknown,
  PayloadReq,
  ThunkConfig<string>
>('cart/addToCart', async ({ assets }, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<unknown>('/cart', {
      assets,
    });
    return response.data;
  } catch (e: unknown) {
    return rejectWithValue('Ooops! Something went wrong...');
  }
});
