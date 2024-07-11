import { StateSchema } from '@/app/providers/StoreProvider';

export const getShipmentAddressesIsLoading = (state: StateSchema) =>
  state.profile.shipmentAddress.isLoadingAddresses;

export const getShipmentAddressById = (state: StateSchema) =>
  state.profile.shipmentAddress.shipmentAddressId;

export const getAllShipmentAddresses = (state: StateSchema) =>
  state.profile.shipmentAddress.data;
