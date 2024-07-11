import { FC, memo, useState } from 'react';
import './editTrackNumberModal.scss';
import { ICancelModalTracking } from './types';
import { HashTagSVG } from '@/shared/assets/svg';
import { CloseWhiteSVG } from '@/shared/assets/svg/buttons';
import { IconButton, Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Inputs';
import { Modal } from '@/shared/ui/Modal';

export const EditTrackNumberModal: FC<ICancelModalTracking> = memo(
  ({ open, setOpen, title = 'Edit tracking number', onClick, trackingId }) => {
    const [valueInput, setValueInput] = useState(trackingId);

    const handleModalClose = (localValueInput?: string) => {
      if (onClick && localValueInput) onClick(localValueInput);

      setOpen(false);
    };

    return (
      <Modal
        isOpen={open}
        className='edit-track-modal__main-modal'
        onClose={handleModalClose}
      >
        <div className='edit-track-modal__main-modal__header'>
          <p>{title}</p>
          <div className='edit-track-modal__main-modal__header__close'>
            <IconButton size='32' onClick={() => handleModalClose()}>
              <CloseWhiteSVG />
            </IconButton>
          </div>
        </div>
        <div className='edit-track-modal__main-modal__main-content'>
          <div className='edit-track-modal__main-modal__main-content__input'>
            <Input
              value={valueInput}
              label='Tracking number'
              placeholder='Enter prise'
              startIcon={<HashTagSVG />}
              onChange={setValueInput}
            />
          </div>
          <div className='edit-track-modal__main-modal__main-content__buttons'>
            <Button
              fullWidth
              typeButton='secondary'
              text='Cancel'
              size='large'
              onClick={() => handleModalClose()}
            />
            <Button
              fullWidth
              typeButton='primary'
              text='update'
              disabled={valueInput.trim() === ''}
              size='large'
              onClick={() => handleModalClose(valueInput)}
            />
          </div>
        </div>
      </Modal>
    );
  },
);
