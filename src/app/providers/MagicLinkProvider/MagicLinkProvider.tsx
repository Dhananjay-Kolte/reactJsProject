import { OAuthExtension } from '@magic-ext/oauth';
import { SolanaExtension } from '@magic-ext/solana';
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  Transaction,
  SystemProgram,
} from '@solana/web3.js';

import base58 from 'bs58';
import { Magic } from 'magic-sdk';
import { ReactNode, useEffect, useCallback, useState, useMemo } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import {
  getIsAuth,
  setAuthSlice,
  getAuthDataError,
  walletReq,
  signedSignatureReq,
  IUserSignature,
} from '@/entities/Auth';

import {
  getTypeAuthMagicLink,
  getWalletMagicLink,
  setIsAuthMagicLinkSlice,
  setIsLoadingMagicLinkSlice,
  setTokenMagicLinkSlice,
  setUserDataMagicLinkSlice,
  setWalletMagicLinkSlice,
  createTrans,
  sendTrans,
  setUserDataGoogleAuthSlice,
  ILoginMagicLink,
} from '@/features/MagicLinkModal';
import { getRouteLogin, getRouteMarketplaceCards } from '@/shared/const/router';
import {
  AuthProviderContext,
  AuthProviderData,
} from '@/shared/lib/context/AuthProviderContext';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { useLogOut } from '@/shared/lib/hooks/useLogOut/useLogOut';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

// const currentNetwork = environment.NETWORK;
// const rpcUrl = clusterApiUrl(currentNetwork as Cluster);
const rpcUrl = environment.RPC_URL;
export const magic = new Magic(environment.MAGIC_LINK_ID, {
  extensions: [new SolanaExtension({ rpcUrl }), new OAuthExtension()],
});
export const connection = new Connection(rpcUrl);

export const MagicLinkProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logOutRedux } = useLogOut();
  const typeConnect = useAppSelector(getTypeAuthMagicLink);
  const authError = useAppSelector(getAuthDataError);
  const isAuth = useAppSelector(getIsAuth);
  const walletMagicLink = useAppSelector(getWalletMagicLink);

  const [sendingTransaction, setSendingTransaction] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const logout = useCallback(async () => {
    try {
      await magic.user.logout();
      dispatch(setAuthSlice(false));
      sessionStorage.removeItem('persist:root');
      localStorage.removeItem('persist:root');
      dispatch(setIsAuthMagicLinkSlice(false));
      dispatch(setIsLoadingMagicLinkSlice(false));
    } catch (error) {
      console.log('logout', error);
    }
  }, [dispatch]);

  const firstConnectWithMagicLink = useCallback(
    async ({ message }: IUserSignature) => {
      try {
        dispatch(setIsLoadingMagicLinkSlice(true));
        const signature = new TextEncoder().encode(message);
        const uint8Array = await magic.solana.signMessage(signature);
        const isVerified = await dispatch(
          signedSignatureReq({
            message,
            signature: base58.encode(uint8Array),
          }),
        );
        dispatch(setIsLoadingMagicLinkSlice(false));
        if (isVerified.meta.requestStatus === 'fulfilled')
          if (pathname === getRouteLogin())
            navigate(getRouteMarketplaceCards());
      } catch (err: any) {
        logOutRedux(undefined, true, false, logout);
        dispatch(setAuthSlice(false));
      }
    },
    [dispatch, logOutRedux, logout, navigate, pathname],
  );
  const login = useCallback(
    async ({ wallet }: ILoginMagicLink, email: string) => {
      try {
        const walletR = await dispatch(
          walletReq({ email, isMagicLink: true, wallet }),
        );
        if (walletR.meta.requestStatus === 'fulfilled' && walletR.payload)
          firstConnectWithMagicLink(walletR.payload as IUserSignature);
      } catch (err) {
        logOutRedux(undefined, true, false, logout);
        console.log('connectMagicLink', err);
        showSnackbar("You don't have a wallet", 'warning');
      }
    },
    [dispatch, firstConnectWithMagicLink, logout, logOutRedux],
  );

  const loginEmail = useCallback(
    async (email: string) => {
      try {
        dispatch(setIsLoadingMagicLinkSlice(true));
        const result1 = await magic.auth.loginWithMagicLink({ email });
        result1 && dispatch(setTokenMagicLinkSlice(result1));
        result1 && navigate(getRouteMarketplaceCards());
        if (!isAuth)
          magic.user
            .isLoggedIn()
            .then(async magicIsLoggedIn => {
              dispatch(setIsAuthMagicLinkSlice(true));
              try {
                const result = await magic.user.getInfo();
                dispatch(setUserDataMagicLinkSlice(result));
                if (result.publicAddress && result.email) {
                  dispatch(setWalletMagicLinkSlice(result.publicAddress));
                  login({ wallet: result.publicAddress }, result.email);
                }
                if (walletMagicLink)
                  dispatch(setIsLoadingMagicLinkSlice(false));
              } catch (error) {
                logOutRedux(undefined, true, false, logout);
                console.log('ErorrEmail', error);
              }
            })
            .catch(e => {
              logOutRedux(undefined, true, false, logout);
              console.log(e);
            });
      } catch (error) {
        logOutRedux(undefined, true, false, logout);
        console.log('loginEmail', error);
      }
    },
    [dispatch, navigate, isAuth, walletMagicLink, login, logout, logOutRedux],
  );

  const loginGoogle = useCallback(async () => {
    try {
      dispatch(setIsLoadingMagicLinkSlice(true));
      await magic.oauth.loginWithRedirect({
        provider: 'google',
        redirectURI: `${window.location.origin}${getRouteMarketplaceCards()}`,
      });
    } catch (error) {
      console.log('loginGoogle', error);
    }
  }, [dispatch]);

  const signTrans = useCallback(async (transactions: Transaction) => {
    const serializeConfig = {
      requireAllSignatures: false,
      verifySignatures: true,
    };
    const signedTransaction = await magic.solana.signTransaction(
      transactions,
      // serializeConfig,
    );
    const tx = Transaction.from(signedTransaction.rawTransaction);
    return tx;
  }, []);

  const handleSendTransaction = useCallback(
    async (
      isUSDC: boolean,
      sendAmount: any,
      destinationAddress: PublicKey | string,
    ) => {
      setSendingTransaction(true);
      const payer = new PublicKey(walletMagicLink);
      const recipientPubKey = new PublicKey(destinationAddress);
      const hash = await connection.getLatestBlockhash();
      if (!isUSDC) {
        const transactionMagic = new Transaction({
          feePayer: payer,
          recentBlockhash: hash.blockhash,
        });
        const transaction = SystemProgram.transfer({
          fromPubkey: payer,
          lamports: sendAmount * LAMPORTS_PER_SOL,
          toPubkey: recipientPubKey,
        });
        transactionMagic.add(...[transaction]);
        const tx = await signTrans(transactionMagic);
        const signature = await connection.sendRawTransaction(tx.serialize());
        setTxHash(`https://explorer.solana.com/tx/${signature}?cluster=devnet`);
        setSendingTransaction(false);
      } else {
        const {
          payload,
          meta: { requestStatus },
        } = await dispatch(
          createTrans({
            amount: sendAmount,
            coin: 'USDC',
            to: destinationAddress as string,
          }),
        );
        if (requestStatus === 'fulfilled' && payload) {
          const trx = Transaction.from(Buffer.from(payload, 'base64'));
          const tx = await signTrans(trx);
          const {
            payload: data,
            meta: { requestStatus: status },
          } = await dispatch(
            sendTrans({ tx: tx.serialize().toString('base64') }),
          );
          if (status === 'fulfilled') {
            setTxHash(data?.trxURL);
            setSendingTransaction(false);
          }
        } else if (requestStatus === 'rejected') {
          setTxHash(null);
          setSendingTransaction(false);
          showSnackbar('Not enough Solana to transfer', 'warning');
        }
      }
    },
    [dispatch, signTrans, walletMagicLink],
  );

  useEffect(() => {
    if (typeConnect !== '' && !isAuth)
      magic.user
        .isLoggedIn()
        .then(async magicIsLoggedIn => {
          dispatch(setIsAuthMagicLinkSlice(true));
          try {
            if (typeConnect === 'email') {
              const result = await magic.user.getInfo();
              dispatch(setUserDataMagicLinkSlice(result));
              result.publicAddress &&
                dispatch(setWalletMagicLinkSlice(result.publicAddress));
            } else if (typeConnect === 'google') {
              const result = await magic.oauth.getRedirectResult();
              dispatch(setUserDataGoogleAuthSlice(result));
              if (
                result.magic.userMetadata.publicAddress &&
                result.magic.userMetadata.email
              ) {
                dispatch(
                  setWalletMagicLinkSlice(
                    result.magic.userMetadata.publicAddress,
                  ),
                );
                dispatch(setIsLoadingMagicLinkSlice(false));
                login(
                  { wallet: result.magic.userMetadata.publicAddress },
                  result.magic.userMetadata.email,
                );
              }
            } else return;
            if (walletMagicLink) {
              const pubKey = new PublicKey(walletMagicLink);
              dispatch(setIsLoadingMagicLinkSlice(false));
            }
          } catch (error) {
            logOutRedux(undefined, true, false, logout);
            console.log('errorGetInfo', error);
          }
        })
        .catch(e => {
          console.log(e);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authError && authError.length && typeConnect !== '') {
      showSnackbar(
        'Account with such an email already exists, use another email to log in',
        'warning',
      );
      logOutRedux(undefined, true, false, logout);
    }
  }, [authError, dispatch, logOutRedux, logout, typeConnect]);

  const ctx: AuthProviderData = useMemo(
    () => ({
      loginEmailMagicLink: loginEmail,
      loginGoogleMagicLink: loginGoogle,
      logoutMagicLink: logout,
      sendTransaction: handleSendTransaction,
      sendingIsLoading: sendingTransaction,
      setSuccess: setTxHash,
      signTrans,
      successTrans: txHash,
    }),
    [
      handleSendTransaction,
      loginEmail,
      loginGoogle,
      logout,
      sendingTransaction,
      signTrans,
      txHash,
      setTxHash,
    ],
  );
  return (
    <AuthProviderContext.Provider value={ctx}>
      {children}
    </AuthProviderContext.Provider>
  );
};
