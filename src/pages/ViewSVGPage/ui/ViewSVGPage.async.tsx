import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const ViewSVGPageAsync = lazyRetry(() => import('./ViewSVGPage'));
