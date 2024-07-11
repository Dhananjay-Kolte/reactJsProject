import { get, patch } from '../index';
import urls from '../urls';

export const getProfilesRequest = () => get(urls.profile.getProfile);

export const updateProfileRequest = (payload: FormData) =>
  patch(urls.profile.updateProfile, payload);

export const getProfileRequest = () => get(urls.profile.info);

export const changesEmailProfileRequest = (payload: { email: string }) =>
  patch(urls.profile.changesEmailProfile, payload);

export const getPublicProfileRequest = (payload: string) =>
  get(urls.profile.getPublicProfile(payload));
