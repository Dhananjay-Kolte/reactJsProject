import { Dispatch, SetStateAction } from 'react';

export interface IOutboundShipmentsItemLeftBlockProps {
  shipment: IShipmentOutbound;
}

export interface IOutboundShipmentsItemRightBlockProps
  extends IOutboundShipmentsItemLeftBlockProps {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}
