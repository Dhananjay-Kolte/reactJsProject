import { Suspense, memo, useMemo, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import '../shared/config/i18n/i18n';
import { AppRouters } from './providers/router';
import { pathNoHeaderFooter } from './providers/router/model/routeConfig';
import { CookiesAccept, getIsCookiesAccepted } from '@/entities/Cookies';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { SnackbarsContainer } from '@/shared/ui/Snackbars/Snackbars';
import { Footer } from '@/widgets/Footer';
import { MainHeader } from '@/widgets/Headers';
import { MobileResolutionModal } from '@/widgets/MobileResolutionModal';

function AppUI() {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const viewHeaderAndFooter = useMemo(() => {
    const nonHeaderRoutes = !pathNoHeaderFooter().includes(pathname);
    return nonHeaderRoutes && !pathname.includes('crossmint');
  }, [pathname]);

  const helmetContext = {};

  const isCookiesAccepted = useAppSelector(getIsCookiesAccepted);

  const token = localStorage.getItem('isAuth');

  const checkOpenMobileResolutionModal = (path: string) =>
    window.innerWidth <= 1024 &&
    path !== '/' &&
    !pathname.includes('crossmint');

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 300);
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <div className={classNames('App', {}, [theme])}>
        <Suspense fallback=''>
          {!!viewHeaderAndFooter && <MainHeader />}
          {!!viewHeaderAndFooter}
          <AppRouters />
          {!!viewHeaderAndFooter && <Footer />}
          <SnackbarsContainer />
          {checkOpenMobileResolutionModal(pathname) && (
            <MobileResolutionModal />
          )}
          {!!token && !isCookiesAccepted && <CookiesAccept />}
        </Suspense>
      </div>
    </HelmetProvider>
  );
}
const App = memo(AppUI);
export default App;
