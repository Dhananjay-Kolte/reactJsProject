import { createAction } from '@reduxjs/toolkit';
import { INFtCardActivitiesPayload, StatusActivities } from '../types/activity';

export const getActivityAction = createAction<{
  wallet: string;
  day?: string;
  status?: StatusActivities[];
  offset?:number;
  limit?: number
}>('ACTIVITY/GET_ACTIVITY');

export const clearActivityAction = createAction('ACTIVITY/CLEAR_ACTIVITY');

export const getNFTCardActivitiesAction =
  createAction<INFtCardActivitiesPayload>('ACTIVITY/GET__NFT_CARD_ACTIVITIES');
