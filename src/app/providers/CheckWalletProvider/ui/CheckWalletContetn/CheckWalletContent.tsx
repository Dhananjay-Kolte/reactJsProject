import {
  Dispatch,
  SetStateAction,
  memo,
  useContext,
  useEffect,
  useState,
} from 'react';
import cls from './CheckWalletContent.module.scss';
import LogoIcon from '@/shared/assets/svg/Logo/LogoIcon';
import { CheckWalletContext } from '@/shared/lib/context/CheckWalletContext';
import { Button } from '@/shared/ui/Buttons';
import { HStack } from '@/shared/ui/Stack';
import { PrivacyPolicyModal } from '@/widgets/PrivacyPolicy';

export interface CheckWalletContentProps {
  userActive: boolean;
  signatureMessage: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  logOut: () => void;
}
export const CheckWalletContent = memo((props: CheckWalletContentProps) => {
  const { signatureMessage, userActive, setOpen, logOut } = props;
  const isAuthToken = localStorage.getItem('isAuth');
  const { isLoadingAuth, isLoadingEntry, onFirstConnect } =
    useContext(CheckWalletContext);

  const [openModalPrivacy, setOpenPrivacy] = useState(false);
  const [openModalTerm, setOpenTerm] = useState(false);

  const handlePrivacy = () => setOpenPrivacy(true);
  const handleTerm = () => setOpenTerm(true);

  useEffect(() => {
    if (isAuthToken && userActive) setOpen(false);
  }, [isAuthToken, setOpen, userActive]);

  return (
    <div className={cls.content}>
      <HStack justify='between' className={cls.header}>
        <p>WELCOME</p>
      </HStack>
      <HStack gap={2.5} align='center' className={cls['main-content']}>
        <HStack justify='center' align='center' className={cls.icon}>
          <LogoIcon />
        </HStack>
        <p className={cls.description}>
          By connecting your wallet and using This, you agree to our
          <span> </span>
          <span className={cls.link} onClick={handleTerm}>
            Terms of Service
          </span>
          <span> </span>
          and
          <span> </span>
          <span className={cls.link} onClick={handlePrivacy}>
            Privacy Policy
          </span>
        </p>
      </HStack>
      <HStack justify='between' gap={1} className={cls.footer}>
        <Button typeButton='secondary' text='Cancel' onClick={logOut} />
        <Button
          typeButton='primary'
          isLoading={isLoadingEntry || isLoadingAuth}
          text='Accept and sign'
          onClick={() => onFirstConnect?.(signatureMessage)}
        />
      </HStack>
      <PrivacyPolicyModal
        open={openModalPrivacy}
        setOpen={setOpenPrivacy}
        typeModal='PrivacyPolicy'
      />
      <PrivacyPolicyModal
        open={openModalTerm}
        setOpen={setOpenTerm}
        typeModal='TermOfService'
      />
    </div>
  );
});
