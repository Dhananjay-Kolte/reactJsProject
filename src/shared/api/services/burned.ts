import { get } from '../index';
import urls from '../urls';
import { ISelectFiltersAction } from '@/entities/AllCards';

export const getAllBurnedCardsRequestGET = (payload: ISelectFiltersAction) =>
  get(
    urls.burned.getAllBurnedCardsGET(payload),
    payload.filters.categories.length > 0
      ? { categories: payload.filters.categories.join(',') }
      : {},
  );

export const getBurnIdRequest = () => get(urls.burned.getBurnId);
