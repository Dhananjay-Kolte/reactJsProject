import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsCookiesAccepted = (state: StateSchema) =>
  state.profile.cookies?.isCookiesAccepted;
