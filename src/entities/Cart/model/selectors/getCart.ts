import { StateSchema } from '@/app/providers/StoreProvider';

export const getCartIsLoading = (state: StateSchema) =>
  state.cart.isLoadingCart;

export const getAllCardInCart = (state: StateSchema) => state.cart.userCart;
