import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialProfile } from '@/shared/const/initialStates';

export interface MyProfileInterface {
  isLoadingMyProfile: boolean;
  viewResendEmail: boolean;
  profileEmail: string;
  data: IProfile;
}

const initialState: MyProfileInterface = {
  data: initialProfile,
  isLoadingMyProfile: false,
  profileEmail: '',
  viewResendEmail: false,
};

export const myProfileSlice = createSlice({
  initialState,
  name: 'myProfile',
  reducers: {
    setClearMyProfileSlice: () => initialState,
    setEmailMyProfileSlice: (state, { payload }: PayloadAction<string>) => {
      state.profileEmail = payload;
    },
    setLoadingMyProfileSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingMyProfile = payload;
    },
    setMyProfileSlice: (state, { payload }: PayloadAction<IProfile>) => {
      state.data = payload;
    },
    setViewResendEmailMyProfileSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.viewResendEmail = payload;
    },
  },
});

export const {
  setLoadingMyProfileSlice,
  setEmailMyProfileSlice,
  setViewResendEmailMyProfileSlice,
  setMyProfileSlice,
  setClearMyProfileSlice,
} = myProfileSlice.actions;

export const { reducer: myProfileReducer } = myProfileSlice;
