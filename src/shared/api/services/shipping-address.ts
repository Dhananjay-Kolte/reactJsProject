import { get, post, patch, remove } from '../index';
import urls from '../urls';
import {
  IFieldsShipmentAddress,
  IFieldsUpdateShipmentAddress,
} from '@/entities/ShipmentAddresses';

export const postShippingAddressCreateRequest = (
  payload: IFieldsShipmentAddress,
) => post(urls.shippingAddress.createShipmentAddress, payload);

export const patchShippingAddressUpdateRequest = (
  payload: IFieldsUpdateShipmentAddress,
) => {
  const { id, ...options } = payload;
  return patch(urls.shippingAddress.updateShipmentAddress(id), { ...options });
};

export const deleteShippingAddressRequest = (payload: string) =>
  remove(urls.shippingAddress.deleteShipmentAddress(payload));

export const getShipmentIdRequest = (payload: string) =>
  get(urls.shippingAddress.getShipmentAddressId(payload));

export const getAllShipmentAddressesRequest = () =>
  get(urls.shippingAddress.getAllShipmentAddresses);
