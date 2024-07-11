import { createAction } from '@reduxjs/toolkit';

export interface ICookiesActon {
  cookies: boolean | null;
}

export const getCookiesAcceptanceAction = createAction('COOKIES/GET_COOKIES');

export const setCookiesAcceptanceAction = createAction<ICookiesActon>(
  'COOKIES/SET_COOKIES',
);
