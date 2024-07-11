import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const AllCardsPageAsync = lazyRetry(() => import('./AllCardsPage'));
