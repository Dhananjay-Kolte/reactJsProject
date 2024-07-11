export {
  getMyProfileAction,
  resetPasswordMyProfileAction,
  setMyProfileAction,
  changesEmailProfileAction,
} from './model/actions/myProfileActions';
export {
  getMyProfileEmail,
  getMyProfile,
  getMyProfileIsLoading,
} from './model/selectors/getMyProfile/getMyProfile';
export {
  setClearMyProfileSlice,
  setViewResendEmailMyProfileSlice,
  setEmailMyProfileSlice,
  myProfileReducer,
} from './model/slice/myProfile';
export type { MyProfileInterface } from './model/slice/myProfile';
export {
  watcherGetMyProfile,
  watcherSetMyProfile,
  watcherChangesEmailMyProfile,
} from './model/saga/myProfileSaga';
