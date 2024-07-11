import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface INotificationsInitialState {
  isLoadingNotifications: boolean;
  allNotifications: INotification[];
}

const initialState: INotificationsInitialState = {
  allNotifications: [],
  isLoadingNotifications: false,
};

export const notificationsSlice = createSlice({
  initialState,
  name: 'notifications',
  reducers: {
    setAllNotificationsSlice: (
      state,
      { payload }: PayloadAction<INotification[]>,
    ) => {
      state.allNotifications = payload.length > 0 ? payload : [];
    },
    setLoadingSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingNotifications = payload;
    },
    setResetNotificationsSlice: () => initialState,
  },
});

export const {
  setLoadingSlice,
  setAllNotificationsSlice,
  setResetNotificationsSlice,
} = notificationsSlice.actions;

export const { reducer: notificationsReducer } = notificationsSlice;
