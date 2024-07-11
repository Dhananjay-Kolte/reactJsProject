import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface FetchUserInfoProps {
  user: string;
  replace?: boolean;
}
export const fetchPublicProfileInfo = createAsyncThunk<
  IProfile,
  FetchUserInfoProps,
  ThunkConfig<string>
>('publicProfile/fetchProfileInfo', async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<IProfile>(`users/${props.user}`);
    if (!response.data) throw new Error();

    return response.data;
  } catch (e: unknown) {
    return rejectWithValue('Oops! Something went wrong...');
  }
});
