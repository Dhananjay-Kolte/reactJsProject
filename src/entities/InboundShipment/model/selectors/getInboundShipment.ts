import { StateSchema } from '@/app/providers/StoreProvider';

export const getInboundShipments = (state: StateSchema) =>
  state.shipment.inboundShipment;

export const getInboundShipmentIsLoading = (state: StateSchema) =>
  state.shipment.inboundShipment.isLoadingInboundShipment;

export const getIsLoadingMintInboundShipment = (state: StateSchema) =>
  state.shipment.inboundShipment.isLoadingMintInboundShipment;

export const getIsEditInboundShipment = (state: StateSchema) =>
  state.shipment.inboundShipment.isEditInboundShipment;

export const getInboundShipmentById = (state: StateSchema) =>
  state.shipment.inboundShipment.createInboundShipment;

export const getAllActiveInboundShipments = (state: StateSchema) =>
  state.shipment.inboundShipment.inboundShipmentsActive;

export const getAllPastInboundShipments = (state: StateSchema) =>
  state.shipment.inboundShipment.inboundShipmentsPast;

export const getAllDraftInboundShipments = (state: StateSchema) =>
  state.shipment.inboundShipment.inboundShipmentsDraft;

export const getInfoMintInboundShipments = (state: StateSchema) =>
  state.shipment.inboundShipment.infoMintCards;
