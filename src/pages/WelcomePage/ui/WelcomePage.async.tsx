import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const WelcomePageAsync = lazyRetry(() => import('./WelcomePage'));
