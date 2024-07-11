import { createAction } from '@reduxjs/toolkit';

export interface IChangeUserCart {
  cardsId: string[];
  cartId: string | null;
}

export interface ICartPayAction {
  cartId: string;
  coin: string;
  country: string;
  insurance: boolean;
  separatePayment: boolean;
}

export interface ICartBurnAction {
  transactions: string[];
  typeCurrency: string;
  country: string;
  insurance: boolean;
  deliveryCompany: string;
  shippingAddress: string;
  separatePayment: boolean;
  comment: string;
}

export const getUserCart = createAction('CART/GET_USER_CART');

export const changeUserCart = createAction<IChangeUserCart>(
  'CART/CHANGE_USER_CART',
);
