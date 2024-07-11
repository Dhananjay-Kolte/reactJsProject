import { createAction } from '@reduxjs/toolkit';

export interface IFieldsCreateOutboundShipment {
  numberOfCards: '';
  insurance: boolean;
  address: string;
  signature: string;
  deliveryCompany: string;
  allCards: string[];
  typeCurrency: string;
  feesCost: string;
  shippingCost: string;
  insuranceCost: string;
  totalCost: string;
}

export interface IUpdateOutboundShipment extends Partial<IShipmentOutbound> {
  shipmentId: string;
}

export type IOutboundShipmentTinyRadio = 'Active' | 'Past';

export const createOutboundShipmentAction =
  createAction<IFieldsCreateOutboundShipment>(
    'SHIPMENT/CREATE_OUTBOUND_SHIPMENT',
  );

export const getOutboundShipmentIdAction = createAction<string>(
  'SHIPMENT/OUTBOUND_SHIPMENT_ID',
);

export const getAllOutboundShipmentsAction =
  createAction<IOutboundShipmentTinyRadio>('SHIPMENT/ALL_OUTBOUND_SHIPMENTS');
