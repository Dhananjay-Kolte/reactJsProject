import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const SuccessfullyPageAsync = lazyRetry(
  () => import('./SuccessfullyPage'),
);
