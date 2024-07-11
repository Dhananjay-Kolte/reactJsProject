import { createAction } from '@reduxjs/toolkit';
import { IUserLogin, IWalletLogin, IFieldFeedbackAction } from '../types/auth';

export const authRegistrationInGoggleAction = createAction(
  'AUTH/REGISTRATION_IN_GOOGLE',
);

export const authConfirmEmailAction =
  createAction<string>('AUTH/CONFIRM_EMAIL');

export const authSetProfileAction =
  createAction<IUserLogin>('AUTH/SET_PROFILE');

export const authLoginWithWalletAction = createAction<IWalletLogin>(
  'AUTH/LOGIN_WITH_WALLET',
);

export const feedBackAction =
  createAction<IFieldFeedbackAction>('AUTH/FEEDBACK');
