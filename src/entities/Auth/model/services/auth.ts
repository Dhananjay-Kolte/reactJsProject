import { IFieldFeedbackAction } from '../types/auth';
import { get, post } from '@/shared/api';
import urls from '@/shared/api/urls';

export const getConfirmEmailRequest = (payload: string) =>
  get(urls.auth.confirmEmail(payload));

export const feedbackRequest = (payload: IFieldFeedbackAction) =>
  post(urls.auth.feedback, payload);
