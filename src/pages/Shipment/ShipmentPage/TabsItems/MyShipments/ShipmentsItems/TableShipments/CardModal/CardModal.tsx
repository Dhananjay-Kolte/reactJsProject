import { FC, memo } from 'react';
import './cardModal.scss';
import { ICardModalProps } from './types';
import { FullInfo } from '@/features/CardInfoContent';
import { CloseWhiteSVG } from '@/shared/assets/svg/buttons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { IconButton } from '@/shared/ui/Buttons';
import { Modal } from '@/shared/ui/Modal';
import { HStack } from '@/shared/ui/Stack';

export const CardModal: FC<ICardModalProps> = memo(
  ({ open, setOpen, typeOfModal, typeModal }) => {
    const { card } = useAppSelector(state => state.cards);

    const handleModalClose = () => setOpen(false);

    const modalTypeIsInbound = typeOfModal === 'inbound';

    return (
      <Modal
        isOpen={open}
        className={classNames(
          'card-modal__main-modal',
          { inbound: modalTypeIsInbound },
          [],
        )}
        onClose={handleModalClose}
      >
        <HStack justify='end'>
          <IconButton size='32' onClick={handleModalClose}>
            <CloseWhiteSVG />
          </IconButton>
        </HStack>
        <FullInfo card={card} typeModal={typeModal} />
      </Modal>
    );
  },
);
