export type IStatusStepperInbound = Omit<
  IStatusShipmentInbound,
  'Canceled' | 'Draft'
>;

export interface IShipmentStepperProps {
  statusShipment: IStatusShipmentOutbound | IStatusStepperInbound;
  typeShipment: ITypeShipments;
}

export interface IShipmentSimpleStepperProps {
  statusShipment: string;
}
