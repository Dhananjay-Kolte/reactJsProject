import { get, post } from '../index';
import urls from '../urls';
import { ICookiesActon } from '@/entities/Cookies';

export const getCookiesAcceptance = () => get(urls.cookies.cookie);

export const postCookiesAcceptance = (payload: ICookiesActon) =>
  post(urls.cookies.cookie, payload);
