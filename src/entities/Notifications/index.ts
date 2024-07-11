export { UserActivitiesModal } from './ui/NotificationsModal/UserActivitiesModal';
export { UserActivityEvent } from './ui/UserEvent/UserActivityEvent';
export {
  useFetchNotificationsQuery,
  useFetchTestsMutation,
} from './api/getActivete';
// export { getNotificationsIsLoading } from './model/selectors/getNotifications';
export { NotificationStream } from './ui/NotificationStream/NotificationStream';
export { notificationsReducer } from './model/slice/notifications';
export {
  // watcherGetAllNotifications,
  watcherMarkAsReadNotification,
} from './model/saga/saga';
export type { IMarkAsReadNotification } from './model/actions/actions';
export {
  markAsReadNotificationAction,
  // getNotificationsAction,
} from './model/actions/actions';
export { getAllNotifications } from './model/selectors/getNotifications';
export type { INotificationsInitialState } from './model/slice/notifications';
export {
  setAllNotificationsSlice,
  setResetNotificationsSlice,
} from './model/slice/notifications';
