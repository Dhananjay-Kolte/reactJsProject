import { createAction } from '@reduxjs/toolkit';

export type IGetSealedBoxData = string;

export const getSealedBoxAction = createAction<IGetSealedBoxData>(
  'SEALED_BOX/GET_SEALED_BOX',
);

export const getSealedBoxActivityAction = createAction<IGetSealedBoxData>(
  'SEALED_BOX/GET_SEALED_BOX_ACTIVITY',
);

export const getSealedBoxListingsAction = createAction<IGetSealedBoxData>(
  'SEALED_BOX/GET_SEALED_BOX_LISTINGS',
);
