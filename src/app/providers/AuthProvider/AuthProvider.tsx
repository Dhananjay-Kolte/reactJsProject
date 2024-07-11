import { FC, ReactNode, useContext, useEffect, useMemo } from 'react';
import { getIsAuth } from '@/entities/Auth';
import { AuthContext } from '@/shared/lib/context/AuthContext';
import { AuthProviderContext } from '@/shared/lib/context/AuthProviderContext';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { useLogOut } from '@/shared/lib/hooks/useLogOut/useLogOut';

interface ThemeProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<ThemeProviderProps> = ({ children }) => {
  const token = localStorage.getItem('isAuth');
  const isLogging = localStorage.getItem('isLogging');
  const { logoutMagicLink } = useContext(AuthProviderContext);
  const isAuth = useAppSelector(getIsAuth);
  const { logOutRedux } = useLogOut();
  const isWallet = localStorage.getItem('typeConnect') === 'walletAuth';

  useEffect(() => {
    if (!token && !isLogging && isAuth)
      logOutRedux(undefined, !isWallet, false, logoutMagicLink);
  }, [isAuth, isLogging, isWallet, logOutRedux, logoutMagicLink, token]);

  const value = useMemo(() => ({ isAuth: !!token }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
