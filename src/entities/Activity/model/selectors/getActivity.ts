import { StateSchema } from '@/app/providers/StoreProvider';

export const getActivityIsLoading = (state: StateSchema) =>
  state.activity.isLoadingActivity;

export const getAllActivity = (state: StateSchema) =>
  state.activity.allActivities;

export const getAllActivityCard = (state: StateSchema) =>
  state.activity.cardActivities;
