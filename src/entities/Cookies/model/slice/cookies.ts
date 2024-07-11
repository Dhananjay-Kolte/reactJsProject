import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICookiesActon } from '../actions/actions';

export interface ICookiesState {
  isCookiesAccepted: boolean | null;
}

const initialState: ICookiesState = {
  isCookiesAccepted: true,
};

export const cookiesSlice = createSlice({
  initialState,
  name: 'cookies',
  reducers: {
    setCookiesAcceptance: (
      state,
      { payload }: PayloadAction<ICookiesActon>,
    ) => {
      state.isCookiesAccepted = payload.cookies;
    },
    setResetCookiesSlice: () => initialState,
  },
});

export const { setCookiesAcceptance, setResetCookiesSlice } =
  cookiesSlice.actions;
export const { reducer: cookiesReducer } = cookiesSlice;
