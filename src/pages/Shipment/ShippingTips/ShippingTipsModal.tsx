import { FC, memo, useState } from 'react';
import './shippingTipsModal.scss';
import FooterBlock from './FooterBlock/FooterBlock';
import { selectBoldWords, tips } from './helpers';
import { IShippingTipsModalProps } from './types';
import { CloseWhiteSVG } from '@/shared/assets/svg/buttons';
import { IconButton } from '@/shared/ui/Buttons';
import { Modal } from '@/shared/ui/Modal';

export const ShippingTipsModal: FC<IShippingTipsModalProps> = memo(
  ({ open, setOpen }) => {
    const [currentTip, setCurrentTip] = useState(1);
    const [checked, setChecked] = useState(
      localStorage.getItem('firstViewTips') === '2',
    );
    const baseClassName =
      'shipping-modal__main-modal__content__img-tips__tips-items__wrapper__tip-variant';

    const handleModalClose = () => {
      setOpen(false);
      setCurrentTip(1);
      if (checked) localStorage.setItem('firstViewTips', '2');
    };

    return (
      <Modal
        isOpen={open}
        className='shipping-modal__main-modal'
        onClose={handleModalClose}
      >
        <div className='shipping-modal__main-modal__header'>
          <p>SAFE SHIPPING TIPS</p>
          <IconButton size='32' onClick={() => handleModalClose()}>
            <CloseWhiteSVG />
          </IconButton>
        </div>
        <div className='shipping-modal__main-modal__content'>
          <div className='shipping-modal__main-modal__content__main-text'>
            All cards should be <strong>professionally graded</strong> before
            being shipped to a Collector vault. Protecting your graded cards is
            our highest priority. Here are few tips to make sure we receive them
            safely
          </div>
          <div className='shipping-modal__main-modal__content__img-tips'>
            {tips.map(({ image, number, altText }) =>
              number === currentTip ? (
                <img key={altText} src={image} alt={altText} loading='lazy' />
              ) : null,
            )}
            <div className='shipping-modal__main-modal__content__img-tips__tips-items'>
              <div className='shipping-modal__main-modal__content__img-tips__tips-items__wrapper'>
                {tips.map(
                  (
                    {
                      number,
                      color,
                      mainTitle,
                      listTitle,
                      tip1,
                      tip2,
                      tip3,
                      tip4,
                    },
                    index,
                  ) => (
                    <div
                      key={`tip-${index}`}
                      className={
                        number === currentTip
                          ? `${baseClassName}__chosen-${color}`
                          : baseClassName
                      }
                    >
                      <div
                        className={
                          number === currentTip
                            ? `${baseClassName}__chosen-${color}__header`
                            : `${baseClassName}__header`
                        }
                      >
                        {mainTitle}
                      </div>
                      <div
                        className={
                          number === currentTip
                            ? `${baseClassName}__chosen-${color}__list`
                            : `${baseClassName}__list`
                        }
                      >
                        <p>{listTitle || ''}</p>
                        {!!tip1 && selectBoldWords(number, tip1)}
                        {!!tip2 && <p>{tip2}</p>}
                        {tip3 && number === 3 ? (
                          <p>
                            - IMPORTANT: After shipping, return to your
                            <strong>Shipments</strong> page and enter the
                            tracking information from your shipping carrier
                          </p>
                        ) : (
                          <p>{tip3}</p>
                        )}
                        {!!tip4 && <p>{tip4}</p>}
                      </div>
                    </div>
                  ),
                )}
              </div>
              <FooterBlock
                setCurrentTip={setCurrentTip}
                currentTip={currentTip}
                handleModalClose={handleModalClose}
                checked={checked}
                setChecked={setChecked}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  },
);
