import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialInboundShipment } from '@/shared/const/initialStates';

export type TTypeModalInMint = 'success' | 'error' | 'partly' | '';

const selectType = (success: number, error: number): TTypeModalInMint => {
  if (error > 0 && success > 0) return 'partly';

  return success === 0 && error > success ? 'error' : 'success';
};

export interface IInfoMintCards {
  transferred: number;
  failed: number;
  typeModalInMint: TTypeModalInMint;
  transferShipmentsIds: string[];
}

export interface IShipmentInboundState {
  isLoadingInboundShipment: boolean;
  isLoadingMintInboundShipment: boolean;
  isEditInboundShipment: boolean;
  infoMintCards: IInfoMintCards;
  createInboundShipment: IShipmentInbound;
  inboundShipmentId: IShipmentInbound;
  inboundShipmentsActive: IShipmentInbound[];
  inboundShipmentsPast: IShipmentInbound[];
  inboundShipmentsDraft: IShipmentInbound[];
}

const initialState: IShipmentInboundState = {
  createInboundShipment: initialInboundShipment,
  inboundShipmentId: initialInboundShipment,
  inboundShipmentsActive: [],
  inboundShipmentsDraft: [],
  inboundShipmentsPast: [],
  infoMintCards: {
    failed: 0,
    transferShipmentsIds: [],
    transferred: 0,
    typeModalInMint: '',
  },
  isEditInboundShipment: false,
  isLoadingInboundShipment: false,
  isLoadingMintInboundShipment: false,
};

export const inboundShipmentSlice = createSlice({
  initialState,
  name: 'inboundShipment',
  reducers: {
    setCardsInboundShipmentsActiveSlice: (
      state,
      {
        payload,
      }: PayloadAction<{ shipmentId: string; data: IAllCardsInPagination }>,
    ) => {
      const copyArray: IShipmentInbound[] = [...state.inboundShipmentsActive];
      const resultArray: IShipmentInbound[] = copyArray.map(item => ({
        ...item,
        cards: item.id === payload.shipmentId ? payload.data : item.cards,
      }));
      state.inboundShipmentsActive = resultArray;
    },
    setCardsInboundShipmentsDraftSlice: (
      state,
      {
        payload,
      }: PayloadAction<{ shipmentId: string; data: IAllCardsInPagination }>,
    ) => {
      const copyArray: IShipmentInbound[] = [...state.inboundShipmentsDraft];
      const resultArray: IShipmentInbound[] = copyArray.map(item => ({
        ...item,
        cards: item.id === payload.shipmentId ? payload.data : item.cards,
      }));
      state.inboundShipmentsDraft = resultArray;
    },
    setCardsInboundShipmentsPastSlice: (
      state,
      {
        payload,
      }: PayloadAction<{ shipmentId: string; data: IAllCardsInPagination }>,
    ) => {
      const copyArray: IShipmentInbound[] = [...state.inboundShipmentsPast];
      const resultArray: IShipmentInbound[] = copyArray.map(item => ({
        ...item,
        cards: item.id === payload.shipmentId ? payload.data : item.cards,
      }));
      state.inboundShipmentsPast = resultArray;
    },
    setClearInboundShipmentsSlice: () => initialState,
    setCreateInboundShipmentSlice: (
      state,
      { payload }: PayloadAction<IShipmentInbound>,
    ) => {
      state.createInboundShipment = payload;
    },
    setInboundShipmentIdSlice: (
      state,
      { payload }: PayloadAction<IShipmentInbound>,
    ) => {
      state.inboundShipmentId = payload;
    },
    setInboundShipmentsActiveSlice: (
      state,
      { payload }: PayloadAction<IShipmentInbound[]>,
    ) => {
      state.inboundShipmentsActive = payload;
    },
    setInboundShipmentsDraftSlice: (
      state,
      { payload }: PayloadAction<IShipmentInbound[]>,
    ) => {
      state.inboundShipmentsDraft = payload;
    },
    setInboundShipmentsPastSlice: (
      state,
      { payload }: PayloadAction<IShipmentInbound[]>,
    ) => {
      state.inboundShipmentsPast = payload;
    },
    setIsEditInboundShipmentSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isEditInboundShipment = payload;
    },
    setIsLoadingInboundShipmentSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isLoadingInboundShipment = payload;
    },
    setIsLoadingMintInboundShipmentSlice: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isLoadingMintInboundShipment = payload;
    },
    setTypeModalInMintSlice: (
      state,
      {
        payload,
      }: PayloadAction<{
        transferred: number;
        failed: number;
        cards: ICard[];
        shipmentId: string;
      }>,
    ) => {
      const { transferred, failed } = payload;
      const currentTypeModal = selectType(transferred, failed);
      state.infoMintCards.typeModalInMint = currentTypeModal;
      state.infoMintCards.transferred = transferred;
      state.infoMintCards.failed = failed;
      if (currentTypeModal === 'success') {
        const temp = [...state.infoMintCards.transferShipmentsIds];
        temp.push(payload.shipmentId);
        state.infoMintCards.transferShipmentsIds = temp;
      }
      const copyArray: IShipmentInbound[] = [...state.inboundShipmentsActive];
      const testing = (item: IShipmentInbound, cards: ICard[]) => {
        if (item.cards && item.cards.cards) item.cards.cards = cards;

        return item;
      };
      const currentArray = copyArray.map(item =>
        item.id === payload.shipmentId && item.cards && item.cards.cards
          ? testing(item, payload.cards)
          : item,
      );
      const sortedArray = currentArray.sort((a, b) =>
        b.status.localeCompare(a.status, 'en', { numeric: false }),
      );
      state.inboundShipmentsActive = sortedArray;
    },
  },
});

export const {
  setIsLoadingInboundShipmentSlice,
  setIsLoadingMintInboundShipmentSlice,
  setTypeModalInMintSlice,
  setIsEditInboundShipmentSlice,
  setCreateInboundShipmentSlice,
  setInboundShipmentIdSlice,
  setInboundShipmentsActiveSlice,
  setCardsInboundShipmentsActiveSlice,
  setInboundShipmentsPastSlice,
  setCardsInboundShipmentsPastSlice,
  setInboundShipmentsDraftSlice,
  setCardsInboundShipmentsDraftSlice,
  setClearInboundShipmentsSlice,
} = inboundShipmentSlice.actions;

export const { reducer: InboundShipmentReducer } = inboundShipmentSlice;
