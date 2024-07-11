import { get, patch } from '../index';
import urls from '../urls';
import { ISelectFiltersAction } from '@/entities/AllCards';

export const getAllMarketplaceCardsRequest = (payload: ISelectFiltersAction) =>
  get(
    urls.marketplace.getAllMarketplaceCards(payload),
    payload.filters.categories.length > 0
      ? { categories: payload.filters.categories.join(',') }
      : {},
  );

export const reloadAllMarketplaceCardsRequest = (payload?: string) =>
  patch(urls.cards.reloadAllCards(payload || ''));
