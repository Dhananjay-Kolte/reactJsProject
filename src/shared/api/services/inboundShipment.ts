import { post, get, patch } from '../index';
import urls from '../urls';
import {
  IFieldsCreateInboundShipment,
  IInboundShipmentTinyRadio,
  IUpdateInboundShipment,
} from '@/entities/InboundShipment';

export const postCreateInboundShipmentRequest = (
  payload: IFieldsCreateInboundShipment,
) => post(urls.inboundShipment.createInboundShipment, payload);

export const getAllInboundShipmentsRequest = (
  payload: IInboundShipmentTinyRadio,
) => get(urls.inboundShipment.getAllInboundShipments(payload));

export const getInboundShipmentIdRequest = (payload: string) =>
  get(urls.inboundShipment.getInboundShipmentId(payload));

export const cancelInboundShipmentRequest = (payload: string) =>
  patch(urls.inboundShipment.cancelInboundShipment(payload));

export const updateInboundShipmentRequest = (
  payload: IUpdateInboundShipment,
) => {
  const { shipmentId, ...options } = payload;
  return patch(urls.inboundShipment.getInboundShipmentId(shipmentId), {
    ...options,
  });
};

export const mintedInboundShipmentIdRequest = (payload: string) =>
  post(urls.inboundShipment.mintedInboundShipment(payload));
