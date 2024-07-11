import { IInboundShipmentTinyRadio } from '@/entities/InboundShipment';
import { IOutboundShipmentTinyRadio } from '@/entities/OutboundShipment';

export interface IShipmentsItemProps {
  shipment: IShipmentInbound;
  typeTiny: IInboundShipmentTinyRadio;
  isModalOpen?: boolean;
  setOpenEditShipmentModal?: () => void;
}

export interface IOutboundShipmentsItemProps {
  shipment: IShipmentOutbound;
  typeTiny: IOutboundShipmentTinyRadio;
}
