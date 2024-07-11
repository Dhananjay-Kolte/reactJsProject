import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const ShipmentDetailsPageAsync = lazyRetry(
  () => import('./ShipmentDetailsPage'),
);
