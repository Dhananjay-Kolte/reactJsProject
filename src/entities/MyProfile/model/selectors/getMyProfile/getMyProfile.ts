import { StateSchema } from '@/app/providers/StoreProvider';

export const getMyProfileIsLoading = (state: StateSchema) =>
  state.profile.myProfile.isLoadingMyProfile;

export const getMyProfileViewResendEmail = (state: StateSchema) =>
  state.profile.myProfile.viewResendEmail;

export const getMyProfileEmail = (state: StateSchema) =>
  state.profile.myProfile.profileEmail;

export const getMyProfile = (state: StateSchema) =>
  state.profile.myProfile.data;
