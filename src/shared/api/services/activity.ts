import { get } from '../index';
import urls from '../urls';
import {
  INFtCardActivitiesPayload,
  StatusActivities,
} from '@/entities/Activity';

export const getUserActivities = (payload: {
  wallet: string;
  day: string;
  status?: StatusActivities[];
  offset?: number;
  limit?: number
}) => get(urls.activity.getCardActivity(payload));

export const getNFTCardActivitiesRequest = (
  payload: INFtCardActivitiesPayload,
) => get(urls.activity.getNFTCardActivities(payload));
