import { createAction } from '@reduxjs/toolkit';

export interface IFieldsCreateInboundShipment {
  numberOfCards: string;
  valueOfBox: string;
  description: string;
  trackingId?: string;
}

export interface IUpdateInboundShipment extends Partial<IShipmentInbound> {
  shipmentId: string;
}

export type IInboundShipmentTinyRadio = 'Active' | 'Past' | 'Draft';

export const createInboundShipmentAction =
  createAction<IFieldsCreateInboundShipment>(
    'SHIPMENT/CREATE_INBOUND_SHIPMENT',
  );

export const getInboundShipmentIdAction = createAction<string>(
  'SHIPMENT/INBOUND_SHIPMENT_ID',
);

export const getAllInboundShipmentsAction =
  createAction<IInboundShipmentTinyRadio>('SHIPMENT/ALL_INBOUND_SHIPMENTS');

export const cancelInboundShipmentAction = createAction<string>(
  'SHIPMENT/CANCEL_INBOUND_SHIPMENT',
);

export const updateInboundShipmentAction = createAction<IUpdateInboundShipment>(
  'SHIPMENT/UPDATE_INBOUND_SHIPMENT',
);

export const mintedInboundShipmentAction = createAction<string>(
  'SHIPMENT/MINTED_SHIPMENT',
);
