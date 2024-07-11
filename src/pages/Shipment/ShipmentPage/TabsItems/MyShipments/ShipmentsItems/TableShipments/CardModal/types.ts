import { Dispatch, SetStateAction } from 'react';

export interface ICardModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  typeOfModal: 'outbound' | 'inbound';
  typeModal?: 'verify' | 'shipment';
}
