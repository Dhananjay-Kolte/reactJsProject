import { useWallet } from '@solana/wallet-adapter-react';
import { memo, useCallback, useState } from 'react';
import { CheckWalletContent } from '../CheckWalletContetn/CheckWalletContent';
import { getAuthSignature, setSignatureProfile } from '@/entities/Auth';
import { getTypeAuthMagicLink } from '@/features/MagicLinkModal';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Modal } from '@/shared/ui/Modal';

export const WalletCheckModal = memo(() => {
  const dispatch = useAppDispatch();
  const { message: signatureMessage, userActive } =
    useAppSelector(getAuthSignature);
  const { disconnect } = useWallet();
  const typeAuthMagicLink = useAppSelector(getTypeAuthMagicLink);
  const [open, setOpen] = useState(true);

  const logOut = useCallback(() => {
    dispatch(setSignatureProfile({ message: '', userActive: false }));
    localStorage.clear();
    sessionStorage.clear();
    disconnect();
    setOpen(false);
  }, [disconnect, dispatch]);

  if (
    localStorage.getItem('typeConnect') &&
    typeAuthMagicLink !== '' &&
    localStorage.getItem('typeConnect') !== 'walletAuth'
  )
    return null;
  return (
    <Modal
      isOpen={open}
      style={{ width: `${37.0625}rem`, zIndex: 7000000 }}
      onClose={logOut}
    >
      <CheckWalletContent
        signatureMessage={signatureMessage}
        userActive={userActive}
        setOpen={setOpen}
        logOut={logOut}
      />
    </Modal>
  );
});
