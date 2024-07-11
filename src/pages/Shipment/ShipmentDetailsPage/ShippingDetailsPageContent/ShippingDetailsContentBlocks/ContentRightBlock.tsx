import { FC, memo, useState } from 'react';
import { ShippingTipsModal } from '../../../ShippingTips/ShippingTipsModal';
import { IRightContentBLockProps } from '../../types';
import {
  getInboundShipmentById,
  getInboundShipmentIsLoading,
} from '@/entities/InboundShipment';
import { PrintDownloadButtons } from '@/pages/PDFworker';
import { PhosphorSVG } from '@/shared/assets/svg';
import { LocationSVG, QRCodeSVG } from '@/shared/assets/svg/ShipmentDetails';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { Spinner } from '@/shared/ui/Loaders';
import { QRCode } from '@/shared/ui/QRCode/QRCode';
import { HStack } from '@/shared/ui/Stack';

const ContentRightBlockUI: FC<IRightContentBLockProps> = ({ shipment }) => {
  const { location } = useAppSelector(getInboundShipmentById);
  const isLoadingInboundShipment = useAppSelector(getInboundShipmentIsLoading);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='shipment-details__content__right__container'>
      <div className='shipment-details__content__left__address'>
        <div className='shipment-details__content__left__address__title'>
          <div className='shipment-details__content__left__address__title__logo'>
            <LocationSVG />
            <p>Ship to address</p>
          </div>
          <Button
            typeButton='ghost'
            img={PhosphorSVG}
            imgLocation='left'
            size='small'
            text='SHIPPING TIPS'
            style={{
              background: 'rgba(91, 234, 255, 0.07)',
              borderRadius: '35px',
              color: '#5BEAFF',
              fill: 'white',
              padding: '0.5rem 1rem',
            }}
            onClick={() => setOpenModal(true)}
          />
        </div>
        {isLoadingInboundShipment ? (
          <HStack max align='center' justify='center' style={{ minHeight: 96 }}>
            <Spinner size={32} />
          </HStack>
        ) : (
          <div
            className='shipment-details__content__left__address__primary-text'
            style={{ minHeight: 96 }}
          >
            {location.map(i => (
              <p key={i}>{i}</p>
            ))}
          </div>
        )}
      </div>
      <div className='shipment-details__content__right__container__right__left'>
        <div className='shipment-details__content__right__container__right__left__text-container'>
          <div>
            <div>
              <QRCodeSVG />
              <p>Shipping Identifier</p>
            </div>
            <p className='p'>
              You need to print out this “Shipping Identifier” and include it
              with your packaged cards. This is a QR code that will help us
              identify your card when we receive the package.
            </p>
          </div>
          <div className='shipment-details-btn-PrintDownloadButtons'>
            <PrintDownloadButtons shipment={shipment} />
          </div>
        </div>
        <div className='shipment-details__content__right__container__right__qr-container'>
          <QRCode
            value={`${shipment.id}` || 'somestringfortest'}
            id='qrcodeship'
          />
        </div>
      </div>
      <ShippingTipsModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};
const ContentRightBlock = memo(ContentRightBlockUI);
export default ContentRightBlock;
