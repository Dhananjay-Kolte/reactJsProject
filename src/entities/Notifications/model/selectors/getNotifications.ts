import { StateSchema } from '@/app/providers/StoreProvider';

export const getNotificationsIsLoading = (state: StateSchema) =>
  state.notifications.isLoadingNotifications;

export const getAllNotifications = (state: StateSchema) =>
  state.notifications.allNotifications;
