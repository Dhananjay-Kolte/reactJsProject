import { StateSchema } from '@/app/providers/StoreProvider';

export const getAuthIsLoading = (state: StateSchema) =>
  state.auth.authWallet.isLoadingAuth;

export const getIsMobileResolutionAuth = (state: StateSchema) =>
  state.auth.authWallet.isMobileResolution;

export const getIsAuth = (state: StateSchema) => state.auth.authWallet.isAuth;

export const getIsVerifyEmailAuth = (state: StateSchema) =>
  state.auth.authWallet.isVerifyEmail;

export const getAuthSignature = (state: StateSchema) =>
  state.auth.authWallet.signature;

export const getAuthData = (state: StateSchema) =>
  state.auth.authWallet.profile;

export const getAuthDataError = (state: StateSchema) =>
  state.auth.authWallet.error;
