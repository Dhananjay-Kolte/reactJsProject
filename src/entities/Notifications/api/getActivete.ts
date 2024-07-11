import { rtkApi } from '@/shared/api/rtkApi';

const fetchNotificationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchNotifications: build.query<INotification[], {}>({
      query: () => ({
        url: 'notifications',
      }),
    }),
  }),
});

export const { useFetchNotificationsQuery } = fetchNotificationsApi;

const fetchTestApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchTests: build.mutation<INotification[], void>({
      query: () => ({
        url: 'notifications',
      }),
    }),
  }),
});

export const { useFetchTestsMutation } = fetchTestApi;
