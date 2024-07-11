import {
  init,
  Integrations,
  withSentryReactRouterV6Routing,
} from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { memo, Suspense, useCallback, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { routeConfigs } from '../model/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';
import { Loader } from '@/shared/ui/Loaders';

const AppRouters = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  const { pathname, search } = useLocation();

  const isIgnoreTypeError = (typeError?: string) =>
    typeError === 'WalletNotSelectedError' ||
    typeError === 'WalletConnectionError' ||
    typeError === 'WalletSignMessageError' ||
    typeError === 'WalletNotConnectedError' ||
    typeError === 'WalletNotReadyError' ||
    typeError === 'WalletWindowClosedError' ||
    typeError === 'WalletWindowBlockedError' ||
    typeError === 'AxiosError';

  const isIgnoreMessageError = (message: string) =>
    message.includes('network error') ||
    message.includes('User rejected') ||
    message.includes('AxiosError') ||
    message.includes('Requested resource not available.');

  environment.APP_ENV !== 'local' &&
    init({
      autoSessionTracking: false,
      beforeSend: (event, hint) => {
        if (environment.APP_ENV === 'local') return null;
        if (
          event.exception?.values &&
          isIgnoreTypeError(event.exception?.values[0]?.type)
        )
          return null;
        if (
          event.exception?.values &&
          event.exception?.values[0]?.value &&
          isIgnoreMessageError(event.exception?.values[0]?.value)
        )
          return null;
        return event;
      },
      dsn: environment.SENTRY_DSN,
      environment: environment.APP_ENV,
      ignoreErrors: [
        'Network request failed',
        'Failed to fetch',
        'NetworkError',
        'Requested resource not available.',
      ],
      integrations: [
        new BrowserTracing(),
        new Integrations.Breadcrumbs({ console: false }),
      ],
      tracesSampleRate: 1.0,
      tunnel: '',
    });
  const SentryRoutes = withSentryReactRouterV6Routing(Routes);

  useEffect(() => {
    environment.APP_ENV !== 'local' &&
      ReactGA.send({ hitType: 'pageview', page: pathname + search });
  }, [pathname, search]);

  return (
    <SentryRoutes>
      {Object.values(routeConfigs).map(renderWithWrapper)}
    </SentryRoutes>
  );
};

export default memo(AppRouters);
