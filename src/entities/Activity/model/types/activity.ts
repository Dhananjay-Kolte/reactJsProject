import { periodsActivities, statusesActivities } from '../../consts/activities';

export type PeriodActivities = (typeof periodsActivities)[number]['value'];
export type StatusActivities = (typeof statusesActivities)[number];

export interface IActivitiesFilter {
  statuses?: StatusActivities[];
  value: PeriodActivities;
}

export interface INFtCardActivitiesPayload {
  cardId?: string;
  nftAddress?:string;
  timeRange: string | number;
  statusFilter?: StatusActivities[];
}

export interface IActivity {
  action: string;
  amount: number | null;
  card: ICard | null;
  cardId: string;
  collection: string | null;
  createdAt: string;
  from: {
    id: string | null;
    name: string | null;
    wallet: string | null;
  };

  id: string;
  ownerId: string;
  to: {
    id: string | null;
    name: string | null;
    wallet: string | null;
  };
  transactionUrl: string;
}
