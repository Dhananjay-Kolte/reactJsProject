import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActivity } from '../types/activity';

export interface ActivityInterface {
  isLoadingActivity: boolean;
  allActivities: IActivity[];
  cardActivities: IActivity[];
}

const initialState: ActivityInterface = {
  allActivities: [],
  cardActivities: [],
  isLoadingActivity: false,
};

export const activitySlice = createSlice({
  initialState,
  name: 'activity',
  reducers: {
    setActivitySlice: (state, { payload }: PayloadAction<IActivity[]>) => {
      state.allActivities = payload;
    },
    setClearActivitySlice: () => initialState,
    setLoadingActivitySlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingActivity = payload;
    },
    setNFTCardSliceActivities: (
      state,
      { payload }: PayloadAction<IActivity[]>,
    ) => {
      state.cardActivities = payload;
    },
  },
});

export const {
  setLoadingActivitySlice,
  setNFTCardSliceActivities,
  setActivitySlice,
  setClearActivitySlice,
} = activitySlice.actions;

export const { reducer: activityReducer } = activitySlice;
