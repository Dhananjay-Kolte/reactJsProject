import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialShipmentAddress } from '@/shared/const/initialStates';

export interface ShipmentAddresses {
  isLoadingAddresses: boolean;
  shipmentAddressId: IShipmentAddress;
  data: IShipmentAddress[];
}

const initialState: ShipmentAddresses = {
  data: [],
  isLoadingAddresses: false,
  shipmentAddressId: initialShipmentAddress,
};

export const shipmentAddressesSlice = createSlice({
  initialState,
  name: 'shipmentAddresses',
  reducers: {
    setAddShipmentAddressesSlice: (
      state,
      { payload }: PayloadAction<IShipmentAddress>,
    ) => {
      state.data = [...state.data, payload];
    },
    setClearShippingAddressesSlice: () => initialState,
    setIsLoadingShipmentAddressesSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isLoadingAddresses = payload;
    },
    setRemoveShipmentAddressesSlice: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.data = state.data.filter(address => address.id !== payload);
    },
    setShipmentAddressIdSlice: (
      state,
      { payload }: PayloadAction<IShipmentAddress>,
    ) => {
      state.shipmentAddressId = payload;
    },
    setShipmentAddressesSlice: (
      state,
      { payload }: PayloadAction<IShipmentAddress[]>,
    ) => {
      state.data = payload;
    },
    setUpdateShipmentAddressesSlice: (
      state,
      { payload }: PayloadAction<IShipmentAddress>,
    ) => {
      const index = state.data.findIndex(address => address.id === payload.id);
      state.data[index] = payload;
    },
  },
});

export const {
  setIsLoadingShipmentAddressesSlice,
  setShipmentAddressIdSlice,
  setShipmentAddressesSlice,
  setClearShippingAddressesSlice,
  setAddShipmentAddressesSlice,
  setUpdateShipmentAddressesSlice,
  setRemoveShipmentAddressesSlice,
} = shipmentAddressesSlice.actions;

export const { reducer: shipmentAddressesReducer } = shipmentAddressesSlice;
