import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialSealedBox } from '@/shared/const/initialStates';

export interface ISealedBoxInitialState {
  isLoadingSealedBox: boolean;
  sealedBox: SealedBox;
  sealedBoxActivity: BoxActivity[];
  sealedBoxListings: BoxListing[];
}

const initialState: ISealedBoxInitialState = {
  isLoadingSealedBox: false,
  sealedBox: initialSealedBox,
  sealedBoxActivity: [],
  sealedBoxListings: [],
};

export const sealedBoxSlice = createSlice({
  initialState,
  name: 'sealedBox',
  reducers: {
    setLoadingSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingSealedBox = payload;
    },
    setResetSealedBoxSlice: () => initialState,
    setSealedBoxActivitySlice: (
      state,
      { payload }: PayloadAction<BoxActivity[]>,
    ) => {
      state.sealedBoxActivity = payload;
    },
    setSealedBoxListingsSlice: (
      state,
      { payload }: PayloadAction<BoxListing[]>,
    ) => {
      state.sealedBoxListings = payload;
    },
    setSealedBoxSlice: (state, { payload }: PayloadAction<SealedBox>) => {
      state.sealedBox = payload;
    },
  },
});

export const {
  setLoadingSlice,
  setSealedBoxSlice,
  setSealedBoxActivitySlice,
  setSealedBoxListingsSlice,
  setResetSealedBoxSlice,
} = sealedBoxSlice.actions;

export const { reducer: sealedBoxReducer } = sealedBoxSlice;
