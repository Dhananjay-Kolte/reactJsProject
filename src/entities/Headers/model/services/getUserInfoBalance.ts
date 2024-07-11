import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserInfo } from '../types/headers';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface FetchUserInfoProps {
  user: string;
}
export const fetchUserInfo = createAsyncThunk<
  UserInfo,
  FetchUserInfoProps,
  ThunkConfig<string>
>('headers/fetchUserInfo', async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<UserInfo>(`users/${props.user}`);
    if (!response.data) throw new Error();

    return response.data;
  } catch (e: unknown) {
    return rejectWithValue('Oops! Something went wrong...');
  }
});
