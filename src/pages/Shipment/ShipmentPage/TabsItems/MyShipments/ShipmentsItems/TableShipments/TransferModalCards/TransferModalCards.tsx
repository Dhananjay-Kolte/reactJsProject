import { FC } from 'react';
import './transferModalCards.scss';
import { getItem, getItemPartly } from './helpers';
import { ITransferModalCardsProps } from './types';
import {
  getInfoMintInboundShipments,
  getIsLoadingMintInboundShipment,
} from '@/entities/InboundShipment';
import { CloseWhiteSVG } from '@/shared/assets/svg/buttons';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { IconButton, Button } from '@/shared/ui/Buttons';
import { Spinner } from '@/shared/ui/Loaders';
import { Modal } from '@/shared/ui/Modal';

const TransferModalCards: FC<ITransferModalCardsProps> = ({
  open,
  setOpen,
  onMint,
}) => {
  const { typeModalInMint, transferred, failed } = useAppSelector(
    getInfoMintInboundShipments,
  );
  const isLoadingMintInboundShipment = useAppSelector(
    getIsLoadingMintInboundShipment,
  );
  const { title, image, text } = getItem(typeModalInMint);
  const isPartly = typeModalInMint === 'partly';
  const itemPartly = getItemPartly(transferred, failed);

  const handleModalClose = () => setOpen(false);

  return (
    <Modal
      isOpen={open}
      className='transfer-modal-cards'
      onClose={handleModalClose}
    >
      {isLoadingMintInboundShipment ? (
        <div className='transfer-modal-cards__content'>
          <div className='transfer-modal-cards__content__loading'>
            <Spinner />
            <p>Your pNFTs are minting...</p>
          </div>
        </div>
      ) : (
        <div className='transfer-modal-cards__content'>
          <div className='transfer-modal-cards__content__header'>
            {typeModalInMint !== 'partly' && (
              <IconButton size='32' onClick={handleModalClose}>
                <CloseWhiteSVG />
              </IconButton>
            )}
          </div>
          <div
            className='transfer-modal-cards__content__main-content'
            style={{ paddingTop: isPartly ? '1.5rem' : '' }}
          >
            <div
              className='transfer-modal-cards__content__main-content__success-fail'
              style={{
                paddingBottom: typeModalInMint === 'success' ? '1.5rem' : '',
              }}
            >
              {image}
              <h3>{title}</h3>
              <p style={{ marginTop: isPartly ? '0.5rem' : '' }}>{text}</p>
              {!!isPartly && (
                <div className='transfer-modal-cards__content__main-content__success-fail__partly'>
                  {itemPartly.map(item => (
                    <div key={item.title}>
                      <div>
                        {item.image}
                        <div>{item.title}</div>
                      </div>
                      <span>{item.count}</span>
                    </div>
                  ))}
                </div>
              )}
              {typeModalInMint !== 'success' && (
                <div className='transfer-modal-cards__content__main-content__success-fail__buttons'>
                  <Button
                    typeButton='secondary'
                    text='Cancel'
                    onClick={handleModalClose}
                  />
                  <Button
                    typeButton='primary'
                    text='Try again'
                    onClick={onMint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default TransferModalCards;
