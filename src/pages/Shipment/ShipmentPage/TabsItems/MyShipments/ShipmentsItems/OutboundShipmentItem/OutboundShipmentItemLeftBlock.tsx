import { FC, memo, useState } from 'react';
import { IOutboundShipmentsItemLeftBlockProps } from './types';
import { MultiStepper } from '../MultiStepper/MultiStepper';
import { ClockSVG } from '@/shared/assets/svg';
import {
  CheckCircleTrueSVG,
  CheckCircleFalseSVG,
  USDCSVG,
  USDTSVG,
  ArrowSquareUpRightSVG,
} from '@/shared/assets/svg/OutboundShipment';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';
import { limitWordCharacters } from '@/shared/lib/limitWordCharacters/limitWordCharacters';
import { IconButton } from '@/shared/ui/Buttons';

const OutboundShipmentItemLeftBlockUI: FC<
  IOutboundShipmentsItemLeftBlockProps
> = ({ shipment }) => {
  const {
    status,
    address: { fullName, country, state, city, streetAddress, apartment, zip },
    insurance,
    deliveryCompany,
    trackingId,
    trackingUrl,
    transactionURL,
    totalCost,
    createdAt,
    typeCurrency,
    comment,
    separatePayment,
  } = shipment;

  const [showMore, setShowMore] = useState(false);

  const showMoreUpdate = () => {
    setShowMore(!showMore);
  };

  const currentDate = new Date(createdAt).toLocaleDateString('en-US', {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    second: 'numeric',
  });

  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <div className='outbound-shipment__tracking-details__left'>
      <div className='outbound-shipment__tracking-details__left__top'>
        <div className='outbound-shipment__tracking-details__left__top__address'>
          <p>
            Ship <br />
            to address
          </p>
          <div>
            <span>{fullName}</span>
            <span>{`${streetAddress} ${apartment}`}</span>
            <span>{`${city}, ${state}, ${zip}`}</span>
            <span>{country}</span>
          </div>
        </div>
        {!separatePayment && (
          <div className='outbound-shipment__tracking-details__left__top__delivery'>
            <div>
              <p>Insurance</p>
              <div>
                {insurance ? <CheckCircleTrueSVG /> : <CheckCircleFalseSVG />}
              </div>
            </div>
            <div>
              <p>Delivery company</p>
              <span>{deliveryCompany}</span>
            </div>
            {!!trackingId && (
              <div>
                <p>Tracking number</p>
                <div className='trackingNumber'>
                  <span>{`# ${trackingId}`}</span>
                  <IconButton onClick={() => openLink(trackingUrl)}>
                    <ArrowSquareUpRightSVG />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
        )}
        <div className='outbound-shipment__tracking-details__left__top__payment'>
          <div>
            <p>Payment</p>
            <div>
              {typeCurrency === 'USDC' ? (
                <USDCSVG fill='#3875C9' secondFill='#FFFFFF' />
              ) : (
                <USDTSVG />
              )}
              <span>{convertNumberInK(totalCost)}</span>
              <IconButton onClick={() => openLink(transactionURL)}>
                <ArrowSquareUpRightSVG />
              </IconButton>
            </div>
          </div>
          <div>
            <p>Date</p>
            <span>{currentDate}</span>
          </div>
          {!!separatePayment && (
            <div className='outbound-shipment__tracking-details__left__top__payment__delivery-separated'>
              <p>Delivery</p>
              <div className='outbound-shipment__tracking-details__left__top__payment__delivery-separated__status'>
                <span>Pay separately</span>
                <ClockSVG />
              </div>
            </div>
          )}
        </div>
      </div>
      {!!comment && comment?.trim() !== '' && (
        <div className='outbound-shipment__tracking-details__left__comment'>
          <div className='outbound-shipment__tracking-details__left__comment__title'>
            Comment
          </div>
          <div className='outbound-shipment__tracking-details__left__comment__comment-text'>
            {showMore ? comment : limitWordCharacters(comment, 143, 'endDots')}
          </div>
          {comment.length > 143 && (
            <div
              className='outbound-shipment__tracking-details__left__comment__button'
              onClick={showMoreUpdate}
            >
              {showMore ? 'Show less' : 'Show more'}
            </div>
          )}
        </div>
      )}
      <MultiStepper statusShipment={status} typeShipment='outbound' />
    </div>
  );
};
const OutboundShipmentItemLeftBlock = memo(OutboundShipmentItemLeftBlockUI);
export default OutboundShipmentItemLeftBlock;
