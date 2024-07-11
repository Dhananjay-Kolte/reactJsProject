import { createAction } from '@reduxjs/toolkit';

export interface IChangeEmailProfileActionProps {
  email: string;
  typeAction: 'change' | 'resent' | 'add';
}

export interface IResetPasswordAction {
  newPassword: string;
  token: string;
}

export const getMyProfileAction = createAction('MY_PROFILE/PROFILE_ID');

export const resetPasswordMyProfileAction = createAction<IResetPasswordAction>(
  'MY_PROFILE/RESET_PASSWORD',
);

export const setMyProfileAction = createAction<FormData>(
  'MY_PROFILE/SET_PROFILE',
);

export const changesEmailProfileAction =
  createAction<IChangeEmailProfileActionProps>(
    'MY_PROFILE/CHANGES_EMAIL_PROFILE',
  );
