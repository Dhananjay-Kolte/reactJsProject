import { StateSchema } from '@/app/providers/StoreProvider';

export const getOutboundShipment = (state: StateSchema) =>
  state.shipment.outboundShipment;

export const getOutboundShipmentIsLoading = (state: StateSchema) =>
  state.shipment.outboundShipment.isLoadingOutboundShipment;

export const getOutboundShipmentById = (state: StateSchema) =>
  state.shipment.outboundShipment.outboundShipmentId;

export const getCreateOutboundShipment = (state: StateSchema) =>
  state.shipment.outboundShipment.createOutboundShipment;

export const getAllActiveOutboundShipments = (state: StateSchema) =>
  state.shipment.outboundShipment.outboundShipmentsActive;

export const getAllPastOutboundShipments = (state: StateSchema) =>
  state.shipment.outboundShipment.outboundShipmentsPast;
