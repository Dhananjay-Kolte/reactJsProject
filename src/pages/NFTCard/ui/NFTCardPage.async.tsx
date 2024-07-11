import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const NFTCardPageAsync = lazyRetry(() => import('./NFTCardPage'));
