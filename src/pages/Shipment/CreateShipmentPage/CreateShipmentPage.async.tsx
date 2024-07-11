import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const CreateShipmentPageAsync = lazyRetry(
  () => import('./CreateShipmentPage'),
);
