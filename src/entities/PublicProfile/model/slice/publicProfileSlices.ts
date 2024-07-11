import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPublicProfileInfo } from '../services/getUserInfoBalance';
import { initialProfile } from '@/shared/const/initialStates';

export interface PublicProfileInterface {
  isLoadingPublicProfile: boolean;
  isError: boolean;
  data: IProfile;
}

const initialState: PublicProfileInterface = {
  data: initialProfile,
  isError: false,
  isLoadingPublicProfile: false,
};

export const publicProfileSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchPublicProfileInfo.pending, state => {
        state.isLoadingPublicProfile = true;
        state.isError = false;
      })
      .addCase(fetchPublicProfileInfo.fulfilled, (state, { payload }) => {
        state.isLoadingPublicProfile = false;
        state.data = payload;
      })
      .addCase(fetchPublicProfileInfo.rejected, state => {
        state.isLoadingPublicProfile = false;
        state.isError = true;
      });
  },
  initialState,
  name: 'publicProfile',
  reducers: {
    setClearPublicProfileSlice: () => initialState,
    setErrorPublicProfileSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isError = payload;
    },
    setLoadingPublicProfileSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isLoadingPublicProfile = payload;
    },
    setPublicProfileSlice: (state, { payload }: PayloadAction<IProfile>) => {
      state.data = payload;
    },
  },
});

export const {
  setPublicProfileSlice,
  setLoadingPublicProfileSlice,
  setErrorPublicProfileSlice,
  setClearPublicProfileSlice,
} = publicProfileSlice.actions;

export const { reducer: publicProfileReducer } = publicProfileSlice;
