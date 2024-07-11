import { IInboundShipmentTinyRadio } from '@/entities/InboundShipment';
import { IOutboundShipmentTinyRadio } from '@/entities/OutboundShipment';

export interface IShipmentsTinyProps {
  typeTiny: IInboundShipmentTinyRadio | IOutboundShipmentTinyRadio;
  currentTypeContent: ITypeShipments;
  scrollToShipment: (shipmentId: string) => void;
}

export interface IEmptyShipmentsProps {
  currentTypeContent: ITypeShipments;
}
