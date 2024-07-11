import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signedSignatureReq } from '../services/signedSignature';
import { walletReq } from '../services/walletReq';
import { IUserLogin, IUserSignature } from '../types/auth';

const initialUserLogin: IUserLogin = {
  bio: '',
  email: '',
  id: '',
  name: '',
  site: '',
  wallet: '',
};

export interface AuthInterface {
  isLoadingAuth: boolean;
  isMobileResolution: boolean;
  isAuth: boolean;
  isVerifyEmail: boolean;
  isChangeWalletForNewUser: boolean;
  signature: IUserSignature;
  profile: IUserLogin;
  error: string | null;
}

const initialState: AuthInterface = {
  error: null,
  isAuth: false,
  isChangeWalletForNewUser: false,
  isLoadingAuth: false,
  isMobileResolution: true,
  isVerifyEmail: false,
  profile: initialUserLogin,
  signature: { message: '', userActive: false },
};

export const userSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(walletReq.pending, state => {
        state.isLoadingAuth = true;
      })
      .addCase(walletReq.fulfilled, (state, { payload }) => {
        state.signature = payload;
        state.isLoadingAuth = false;
      })
      .addCase(walletReq.rejected, (state, { payload }) => {
        () => initialState;
        localStorage.clear();
        state.isLoadingAuth = false;
        state.error = payload || null;
      })
      .addCase(signedSignatureReq.pending, state => {
        state.isLoadingAuth = true;
      })
      .addCase(signedSignatureReq.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isAuth = true;
        state.isLoadingAuth = false;
      })
      .addCase(signedSignatureReq.rejected, (state, { payload }) => {
        () => initialState;
        localStorage.clear();
        state.isLoadingAuth = false;
        state.error = payload || null;
      });
  },
  initialState,
  name: 'auth',
  reducers: {
    setAuthClearProfileSlice: state => {
      state.profile = initialUserLogin;
    },
    setAuthLogoutSlice: () => initialState,
    setAuthProfileSlice: (state, { payload }: PayloadAction<IUserLogin>) => {
      state.profile = payload;
    },
    setAuthSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setAuthSliceError: (state, { payload }: PayloadAction<string | null>) => {
      state.error = payload;
    },
    setIsVerifyEmailSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isVerifyEmail = payload;
    },
    setLoadingAuthSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingAuth = payload;
    },
    setMobileResolutionSlice: state => {
      state.isMobileResolution = false;
    },
    setSignatureProfile: (
      state,
      { payload }: PayloadAction<IUserSignature>,
    ) => {
      state.signature = payload;
    },
  },
});

export const {
  setLoadingAuthSlice,
  setAuthSlice,
  setIsVerifyEmailSlice,
  setAuthProfileSlice,
  setAuthLogoutSlice,
  setMobileResolutionSlice,
  setAuthClearProfileSlice,
  setSignatureProfile,
  setAuthSliceError,
} = userSlice.actions;

export const { reducer: authReducer } = userSlice;
