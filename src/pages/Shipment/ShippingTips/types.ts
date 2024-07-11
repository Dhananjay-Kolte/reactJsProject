import { Dispatch, SetStateAction } from 'react';

export interface IShippingTipsModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  width?: number;
}
