import { StateSchema } from '@/app/providers/StoreProvider';

export const getPublicProfileIsLoading = (state: StateSchema) =>
  state.profile.publicProfile.isLoadingPublicProfile;

export const getPublicProfileIsError = (state: StateSchema) =>
  state.profile.publicProfile.isError;

export const getPublicProfile = (state: StateSchema) =>
  state.profile.publicProfile.data;

export const getPublicWalletProfile = (state: StateSchema) =>
  state.profile.publicProfile.data.wallet;

export const getActivityPublicProfile = (state: StateSchema) =>
  state.profile.publicProfile.data.activities;

export const getListingPublicProfile = (state: StateSchema) =>
  state.profile.publicProfile.data.listings;

export const getOffersMadePublicProfile = (state: StateSchema) =>
  state.profile.publicProfile.data.offersMade;

export const getOffersReceivedPublicProfile = (state: StateSchema) =>
  state.profile.publicProfile.data.offersReceived;
