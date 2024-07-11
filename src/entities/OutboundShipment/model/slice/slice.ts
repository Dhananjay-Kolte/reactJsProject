import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialOutboundShipment } from '@/shared/const/initialStates';

export interface IShipmentOutboundState {
  isLoadingOutboundShipment: boolean;
  createOutboundShipment: IShipmentOutbound;
  outboundShipmentId: IShipmentOutbound;
  outboundShipmentsActive: IShipmentOutbound[];
  outboundShipmentsPast: IShipmentOutbound[];
}

const initialState: IShipmentOutboundState = {
  createOutboundShipment: initialOutboundShipment,
  isLoadingOutboundShipment: false,
  outboundShipmentId: initialOutboundShipment,
  outboundShipmentsActive: [],
  outboundShipmentsPast: [],
};

export const outboundShipmentSlice = createSlice({
  initialState,
  name: 'outboundShipment',
  reducers: {
    setCardsOutboundShipmentsActiveSlice: (
      state,
      {
        payload,
      }: PayloadAction<{ shipmentId: string; data: IAllCardsInPagination }>,
    ) => {
      const copyArray: IShipmentOutbound[] = [...state.outboundShipmentsActive];
      const resultArray: IShipmentOutbound[] = copyArray.map(item => ({
        ...item,
        cards: item.id === payload.shipmentId ? payload.data : item.cards,
      }));
      state.outboundShipmentsActive = resultArray;
    },
    setCardsOutboundShipmentsPastSlice: (
      state,
      {
        payload,
      }: PayloadAction<{ shipmentId: string; data: IAllCardsInPagination }>,
    ) => {
      const copyArray: IShipmentOutbound[] = [...state.outboundShipmentsPast];
      const resultArray: IShipmentOutbound[] = copyArray.map(item => ({
        ...item,
        cards: item.id === payload.shipmentId ? payload.data : item.cards,
      }));
      state.outboundShipmentsPast = resultArray;
    },
    setClearShipmentsSlice: () => initialState,
    setCreateOutboundShipmentSlice: (
      state,
      { payload }: PayloadAction<IShipmentOutbound>,
    ) => {
      state.createOutboundShipment = payload;
    },
    setIsLoadingOutboundShipmentSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isLoadingOutboundShipment = payload;
    },
    setOutboundShipmentIdSlice: (
      state,
      { payload }: PayloadAction<IShipmentOutbound>,
    ) => {
      state.outboundShipmentId = payload;
    },
    setOutboundShipmentsActiveSlice: (
      state,
      { payload }: PayloadAction<IShipmentOutbound[]>,
    ) => {
      state.outboundShipmentsActive = payload;
    },

    setOutboundShipmentsPastSlice: (
      state,
      { payload }: PayloadAction<IShipmentOutbound[]>,
    ) => {
      state.outboundShipmentsPast = payload;
    },
  },
});

export const {
  setIsLoadingOutboundShipmentSlice,
  setCreateOutboundShipmentSlice,
  setOutboundShipmentIdSlice,
  setOutboundShipmentsActiveSlice,
  setCardsOutboundShipmentsActiveSlice,
  setOutboundShipmentsPastSlice,
  setCardsOutboundShipmentsPastSlice,
  setClearShipmentsSlice,
} = outboundShipmentSlice.actions;

export const { reducer: outboundShipmentReducer } = outboundShipmentSlice;
