import { StateSchema } from '@/app/providers/StoreProvider';

export const getBalanceSOL = (state: StateSchema) =>
  state.userInfo.data?.balance.SOL || '0';
export const getBalanceUSDC = (state: StateSchema) =>
  state.userInfo.data?.balance.USDC || '0';

export const getIsLoading = (state: StateSchema) => state.userInfo.isLoading;
