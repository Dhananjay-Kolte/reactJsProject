import { createAction } from '@reduxjs/toolkit';

export interface IFieldsShipmentAddress {
  country?: string;
  streetAddress?: string;
  apartment?: string;
  state?: string;
  city?: string;
  zip?: string;
  isDefault?: boolean;
}

export interface IFieldsUpdateShipmentAddress extends IFieldsShipmentAddress {
  id: string;
}

export const createShippingAddressAction = createAction<IFieldsShipmentAddress>(
  'PROFILE/CREATE_SHIPPING_ADDRESS',
);

export const changeShippingAddressAction =
  createAction<IFieldsUpdateShipmentAddress>('PROFILE/UPDATE_SHIPPING_ADDRESS');

export const deleteShippingAddressAction = createAction<string>(
  'PROFILE/DELETE_SHIPPING_ADDRESS',
);

export const getShippingsAddressesAction = createAction(
  'PROFILE/GET_SHIPPING_ADDRESSES',
);

export const getShippingsAddressAction = createAction<string>(
  'PROFILE/GET_SHIPPING_ADDRESS',
);
