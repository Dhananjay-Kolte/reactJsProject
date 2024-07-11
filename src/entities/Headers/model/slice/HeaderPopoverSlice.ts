import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfo } from '../services/getUserInfoBalance';
import { UserInfoSchema } from '../types/headers';

const initialState: UserInfoSchema = {
  isLoading: false,
};

export const userInfoSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchUserInfo.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUserInfo.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchUserInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'userInfo',
  reducers: {},
});

export const { actions: userInfoActions } = userInfoSlice;
export const { reducer: userInfoReducer } = userInfoSlice;
