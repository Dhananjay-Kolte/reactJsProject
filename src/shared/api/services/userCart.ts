import { get, patch, post } from '../index';
import urls from '../urls';
import {
  IChangeUserCart,
  ICartPayAction,
  ICartBurnAction,
} from '@/entities/Cart';

export const getUserCartRequest = () => get(urls.userCart.getUserCart);

export const changeUserCartRequest = (payload: IChangeUserCart) =>
  patch(urls.userCart.changeUserCart, payload);

export const payUserCartRequest = (payload: ICartPayAction) =>
  post(urls.userCart.pay, payload);

export const burnUserCartRequest = (payload: ICartBurnAction) =>
  post(urls.userCart.burn, payload);
