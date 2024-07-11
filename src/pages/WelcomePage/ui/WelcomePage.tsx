import { FC, memo, useState } from 'react';
import cls from './welcomePage.module.scss';
import { MagicLinkModal } from '@/features/MagicLinkModal';
import blue from '@/shared/assets/png/AuthPictures/blue.webp';
import { Button } from '@/shared/ui/Buttons';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FooterSignIn } from '@/widgets/FooterSignIn';
import { AuthHeader } from '@/widgets/Headers';
import { Page } from '@/widgets/Page';

const WelcomePage: FC = memo(() => {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  return (
    <Page>
      <HStack align='center' gap={0.5} className={cls.welcome}>
        <VStack gap={0.5} className={cls.left}>
          <AuthHeader />
          <VStack justify='between' className={cls.content}>
            <VStack gap={1.5}>
              <h1>
                VAULT AND TRADE <span>YOUR COLLECTIBLES</span>
              </h1>
              <p>
                Collector brings real-world collectibles into the 21st century.
                Vault your physical collectibles securely, trade them with
                others, and even collateralize your assets for loans
              </p>
              <Button
                fullWidth
                typeButton='primary'
                text='Sign in / Sign up'
                size='large'
                onClick={onOpen}
              />
            </VStack>
            <FooterSignIn />
          </VStack>
        </VStack>
        <img src={blue} alt='welcomeLogo' loading='lazy' />
        {!!openModal && <MagicLinkModal open={openModal} onClose={onClose} />}
      </HStack>
    </Page>
  );
});

export default WelcomePage;
