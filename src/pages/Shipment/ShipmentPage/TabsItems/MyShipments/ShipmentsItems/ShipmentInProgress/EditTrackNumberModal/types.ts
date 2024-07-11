import { Dispatch, SetStateAction } from 'react';

export interface ICancelModalTracking {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  trackingId: string;
  title?: string;
  onClick?: (value: string) => void;
}
