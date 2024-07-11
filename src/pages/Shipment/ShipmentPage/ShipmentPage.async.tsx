import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const ShipmentPageAsync = lazyRetry(() => import('./ShipmentPage'));
