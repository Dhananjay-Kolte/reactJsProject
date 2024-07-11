import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartInitialState {
  isLoadingCart: boolean;
  userCart: IUserCartItems;
}

const initialState: ICartInitialState = {
  isLoadingCart: false,
  userCart: {
    cards: [],
    cartId: '',
    count: 0,
    totalPrice: 0,
  },
};

export const userCartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setLoadingUserCartSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingCart = payload;
    },
    setResetCartSlice: () => initialState,
    setUserCart: (state, { payload }: PayloadAction<IUserCartItems>) => {
      state.userCart = payload;
    },
  },
});

export const { setLoadingUserCartSlice, setUserCart, setResetCartSlice } =
  userCartSlice.actions;

export const { reducer: cartReducer } = userCartSlice;
