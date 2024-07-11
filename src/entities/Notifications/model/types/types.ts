import { Dispatch, SetStateAction } from 'react';

export interface IItems {
  name: string;
  id: number;
  img: string;
  price: string;
  Category: string;
}

export interface ICollection {
  name: string;
  id: number;
  items: IItems[];
}

export interface IRows {
  name: string;
  id: number;
  img: string;
  price: number;
  Category: string;
  isSelecet?: boolean;
}

export interface INotificationsModalProps {
  open: boolean;
  setOpenNotifications: Dispatch<SetStateAction<boolean>>;
  outboundShipmentsActive: IShipmentOutbound[];
  outboundShipmentsPast: IShipmentOutbound[];
  inboundShipmentsActive: IShipmentInbound[];
  inboundShipmentsPast: IShipmentInbound[];
}

export interface IRedirectNotification {
  link: string | null;
  param?: string | null;
  typeShipment?: string;
}

export interface IUserEventListProps {
  activity: INotification;
  viewType: 'dashboard' | 'modal';
  eventType?: 'required' | 'default';
  outboundShipmentsActive: IShipmentOutbound[];
  outboundShipmentsPast: IShipmentOutbound[];
  inboundShipmentsActive: IShipmentInbound[];
  inboundShipmentsPast: IShipmentInbound[];
}
