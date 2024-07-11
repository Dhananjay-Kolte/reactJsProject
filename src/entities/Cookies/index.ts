export { getIsCookiesAccepted } from './model/selectors/getCookies';
export { CookiesAccept } from './ui/CookiesAccept/CookiesAccept';
export { cookiesReducer, setResetCookiesSlice } from './model/slice/cookies';
export type { ICookiesActon } from './model/actions/actions';
export {
  watcherGetCookiesAcceptance,
  watcherSetCookiesAcceptance,
} from './model/saga/saga';
export {
  getCookiesAcceptanceAction,
  setCookiesAcceptanceAction,
} from './model/actions/actions';
export type { ICookiesState } from './model/slice/cookies';
