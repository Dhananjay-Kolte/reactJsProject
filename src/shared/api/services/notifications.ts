import { get, patch } from '../index';
import urls from '../urls';
import { IMarkAsReadNotification } from '@/entities/Notifications';

export const getAllNotificationsRequest = () =>
  get(urls.notifications.getAllNotifications);

export const subscribeNotificationsRequest = () =>
  get(urls.notifications.subscribe);

export const patchMarkAsReadedRequest = (payload: IMarkAsReadNotification) =>
  patch(urls.notifications.getAllNotifications, payload);
