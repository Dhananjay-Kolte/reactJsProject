import '@solana/wallet-adapter-react-ui/styles.css';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { PublicKey } from '@solana/web3.js';
import bs58 from 'bs58';
import {
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { WalletCheckModal } from './CheckWalletModal/CheckModal';
import {
  IUserSignature,
  getAuthData,
  getAuthIsLoading,
  getAuthSignature,
  getIsAuth,
  logOutReq,
  setSignatureProfile,
  signedSignatureReq,
  walletReq,
} from '@/entities/Auth';
import { getRouteLogin, getRouteMarketplaceCards } from '@/shared/const/router';
import { CheckWalletContext } from '@/shared/lib/context/CheckWalletContext';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { useLogOut } from '@/shared/lib/hooks/useLogOut/useLogOut';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

interface ThemeProviderProps {
  children: ReactNode;
  setOpenModal?: (openModal: boolean) => void;
}

export const CheckWalletProvider: FC<ThemeProviderProps> = ({
  children,
  setOpenModal,
}) => {
  const dispatch = useAppDispatch();
  const { logOutRedux } = useLogOut();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setVisible: setVisibleModalWallet, visible } = useWalletModal();
  const {
    wallet,
    publicKey,
    signMessage,
    disconnect,
    disconnecting,
    connect,
    connected,
  } = useWallet();
  const [isLoadingEntry, setIsLoadingEntry] = useState(false);
  const isAuth = useAppSelector(getIsAuth) || localStorage.getItem('isAuth');
  const { message: signatureMessage, userActive: isUserActive } =
    useAppSelector(getAuthSignature);
  const isLoadingAuth = useAppSelector(getAuthIsLoading);
  const { wallet: userWallet } = useAppSelector(getAuthData);

  const isSameWallet = useMemo(
    () => userWallet === publicKey?.toBase58(),
    [publicKey, userWallet],
  );
  const onConnectWallet = useCallback(async () => {
    disconnect();
    if (!wallet) setVisibleModalWallet(true);
  }, [disconnect, setVisibleModalWallet, wallet]);

  const firstConnectWallet = useCallback(
    async (message: string) => {
      await connect();
      try {
        if (signMessage) {
          const uint8Array = await signMessage(
            new TextEncoder().encode(message),
          );
          const isVerified = await dispatch(
            signedSignatureReq({
              message,
              signature: bs58.encode(uint8Array),
            }),
          );
          if (isVerified.meta.requestStatus === 'fulfilled') {
            setOpenModal?.(false);
            if (pathname === getRouteLogin())
              navigate(getRouteMarketplaceCards());
          } else showSnackbar('Signature verification failed', 'warning');
        }
      } catch (err: any) {
        dispatch(setSignatureProfile({ message: '', userActive: false }));
        setVisibleModalWallet(false);
        localStorage.clear();
        sessionStorage.clear();
        disconnect();
        const error = err as {
          code: number;
          message: string;
        };
        showSnackbar(
          error.message === 'Requested resource not available.'
            ? 'Sign the message first, please'
            : 'User rejected the request',
          'warning',
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setOpenModal, setVisibleModalWallet, signMessage],
  );

  const connectWallet = useCallback(
    async (newPublicKey: PublicKey) => {
      try {
        if (!isAuth) {
          setIsLoadingEntry(true);
          const signatureReq = await dispatch(
            walletReq({
              wallet: newPublicKey.toBase58(),
            }),
          );
          if (signatureReq.meta.requestStatus === 'fulfilled') {
            setIsLoadingEntry(false);
            const { message, userActive } =
              signatureReq.payload as IUserSignature;
            if (userActive && !isAuth) firstConnectWallet(message);
          } else {
            logOutRedux(undefined, true);
            setIsLoadingEntry(false);
            disconnect();
          }
        }
      } catch (err) {
        showSnackbar("You don't have a wallet", 'error');
        setIsLoadingEntry(false);
      }
    },
    [disconnect, dispatch, firstConnectWallet, isAuth, logOutRedux],
  );
  useEffect(() => {
    if (isAuth)
      if (publicKey)
        if (!isSameWallet) {
          dispatch(logOutReq());
          logOutRedux(undefined, true);
          setIsLoadingEntry(false);
        }
  }, [wallet, isAuth, isSameWallet, dispatch, publicKey, logOutRedux]);

  useEffect(() => {
    if (publicKey && !disconnecting && connected) connectWallet(publicKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  const value = useMemo(
    () => ({
      isLoadingAuth,
      isLoadingEntry,
      onConnect: onConnectWallet,
      onFirstConnect: firstConnectWallet,
    }),
    [isLoadingAuth, isLoadingEntry, onConnectWallet, firstConnectWallet],
  );

  return (
    <CheckWalletContext.Provider value={value}>
      {!visible &&
        !isAuth &&
        !!signatureMessage.length &&
        localStorage.getItem('typeConnect') === 'walletAuth' &&
        !isUserActive && <WalletCheckModal />}
      {children}
    </CheckWalletContext.Provider>
  );
};
