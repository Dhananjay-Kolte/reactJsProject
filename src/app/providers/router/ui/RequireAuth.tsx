import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuth } from '@/entities/Auth';
import { getRouteMarketplaceCards } from '@/shared/const/router';
import { useAppSelector } from '@/shared/lib/hooks/redux';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = useAppSelector(getIsAuth);
  const location = useLocation();

  if (!isAuth)
    return (
      <Navigate
        replace
        to={getRouteMarketplaceCards()}
        state={{ from: location }}
      />
    );

  return children;
}
