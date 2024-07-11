export { walletReq } from './model/services/walletReq';
export { signedSignatureReq } from './model/services/signedSignature';
export { logOutReq } from './model/services/logout';
export {
  getAuthIsLoading,
  getIsMobileResolutionAuth,
  getIsAuth,
  getIsVerifyEmailAuth,
  getAuthSignature,
  getAuthData,
  getAuthDataError,
} from './model/selectors/getAuth';
export {
  feedBackAction,
  authLoginWithWalletAction,
  authSetProfileAction,
  authConfirmEmailAction,
  authRegistrationInGoggleAction,
} from './model/actions/actions';
export type { AuthInterface } from './model/slice/slice';
export {
  authReducer,
  setMobileResolutionSlice,
  setAuthLogoutSlice,
  setAuthClearProfileSlice,
  setAuthSlice,
  setAuthProfileSlice,
  setAuthSliceError,
  setSignatureProfile,
} from './model/slice/slice';
export {
  watcherAuthConfirmEmail,
  watcherAuthSetProfile,
  watcherFeedback,
} from './model/saga/saga';
export type { IUserLogin, IUserSignature } from './model/types/auth';
