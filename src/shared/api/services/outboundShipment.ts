import { post, get } from '../index';
import urls from '../urls';
import {
  IFieldsCreateOutboundShipment,
  IOutboundShipmentTinyRadio,
} from '@/entities/OutboundShipment';

export const postCreateOutboundShipmentRequest = (
  payload: IFieldsCreateOutboundShipment,
) => post(urls.outboundShipment.createOutboundShipment, payload);

export const getAllOutboundShipmentsRequest = (
  payload: IOutboundShipmentTinyRadio,
) => get(urls.outboundShipment.getAllOutboundShipments(payload));

export const getOutboundShipmentIdRequest = (payload: string) =>
  get(urls.outboundShipment.getOutboundShipmentId(payload));
