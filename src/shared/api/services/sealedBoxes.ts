import { get } from '../index';
import urls from '../urls';

export const getSealedBoxRequest = (payload: string) =>
  get(urls.sealedBox.getSealedBox(payload));

export const getSealedBoxActivityRequest = (payload: string) =>
  get(urls.sealedBox.getSealedBoxActivity(payload));

export const getSealedBoxListingsRequest = (payload: string) =>
  get(urls.sealedBox.getSealedBoxListings(payload));
