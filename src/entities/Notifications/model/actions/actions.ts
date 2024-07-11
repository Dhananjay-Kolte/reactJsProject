import { createAction } from '@reduxjs/toolkit';

export interface IMarkAsReadNotification {
  id: string;
  read: boolean;
}

// export const getNotificationsAction = createAction(
//   'NOTIFICATIONS/GET_NOTIFICATIONS',
// );

export const markAsReadNotificationAction = createAction<
  IMarkAsReadNotification[]
>('NOTIFICATIONS/MARK_AS_READ_NOTIFICATIONS');
