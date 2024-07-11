import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, ReactNode, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeConfigs } from '@/app/providers/router/model/routeConfig';

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const currentNetwork = environment.NETWORK;
  const network =
    currentNetwork === 'devnet'
      ? {
          walletAdapterSolana: WalletAdapterNetwork.Devnet,
        }
      : {
          walletAdapterSolana: WalletAdapterNetwork.Mainnet,
        };
  const endpoint = useMemo(
    () => clusterApiUrl(network.walletAdapterSolana),
    [network.walletAdapterSolana],
  );
  const localPath = Object.values(routeConfigs)
    .filter(path => path.authOnly)
    .filter(i => {
      if (i.path) return pathname.startsWith(i.path);

      return [];
    });

  const wallets = useMemo(
    () => [
      // new BraveWalletAdapter(),
      new PhantomWalletAdapter(),
      // new SolletWalletAdapter(),
    ],
    [],
  );
  const onError = useCallback(async (error: WalletError) => {
    try {
      console.log('WalletContextProvider', error);
    } catch (err) {
      console.log('WalletContextProvider', error);
    }
  }, []);

  return (
    <ConnectionProvider endpoint={environment.RPC_URL}>
      <WalletProvider autoConnect wallets={wallets} onError={onError}>
        <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default WalletContextProvider;
