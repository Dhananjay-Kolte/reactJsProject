import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface PayloadReq {
  status: 'Burned' | 'Minted';
  address: string;
}
export const burnReq = createAsyncThunk<
  unknown,
  PayloadReq,
  ThunkConfig<string>
>('cart/burnBoxCard', async ({ status, address }, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<unknown>(`boxes/${address}/status`, {
      params: { status },
    });
    if (!response.data) throw new Error();

    return response.data;
  } catch (e: unknown) {
    return rejectWithValue('Ooops! Something went wrong...');
  }
});
