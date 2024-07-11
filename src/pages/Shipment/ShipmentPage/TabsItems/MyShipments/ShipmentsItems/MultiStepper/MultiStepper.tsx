import { FC, memo, useMemo } from 'react';
import './multiStepper.scss';
import { IShipmentStepperProps, IStatusStepperInbound } from './types';
import EllipseSVG from '@/shared/assets/svg/Stepper/DefaultEllipseSVG';
import LocationSVG from '@/shared/assets/svg/Stepper/LocationSVG';

export const MultiStepper: FC<IShipmentStepperProps> = memo(
  ({ statusShipment, typeShipment }) => {
    const isPaymentReceived = statusShipment === 'PaymentReceived';
    const viewStatus = isPaymentReceived
      ? 'Pending'
      : (statusShipment as string);

    const statuses = useMemo(
      () =>
        typeShipment === 'inbound'
          ? [
              'New',
              'Shipped',
              'Received',
              'Processing',
              statusShipment === 'PartlyMinted'
                ? 'PartlyMinted'
                : 'FullyMinted',
            ]
          : [
              statusShipment === 'PaymentPending'
                ? 'PaymentPending'
                : 'Pending',
              'Processing',
              'Shipped',
              'Delivered',
            ],
      [statusShipment, typeShipment],
    );

    const selectStepperTitle = (status: IStatusStepperInbound) => {
      if (status === 'New') return 'tracking #';
      if (status === 'Received') return 'Received';
      if (status === 'Processing') return 'Processing';
      if (status === 'Pending' || status === 'PaymentReceived')
        return 'Pending';
      if (typeShipment === 'inbound')
        if (status === 'Shipped') return 'In Transit';
      if (typeShipment === 'outbound') {
        if (status === 'PaymentPending') return 'Payment Pending';
        if (status === 'Shipped') return 'Shipped';
      }
      return 'Complete';
    };

    return (
      <div className='shipment-stepper'>
        <div className='shipment-stepper__dots' />
        <div className='shipment-stepper__progress-bar'>
          {statuses.map((status, index) => (
            <div
              key={`key-${status}`}
              className='shipment-stepper__progress-bar__wrapper'
            >
              <div
                className='shipment-stepper__progress-bar__wrapper__right'
                style={{
                  fill:
                    statuses.indexOf(viewStatus) >= index
                      ? '#ff9900'
                      : '#828585',
                }}
              >
                {statuses.indexOf(viewStatus) === index ? (
                  <LocationSVG />
                ) : (
                  <EllipseSVG />
                )}
              </div>
              <div
                key={`key-${status}`}
                className={`shipment-stepper__progress-bar__wrapper__block-text ${
                  statuses.indexOf(viewStatus) >= index ? '' : 'inactive'
                }`}
              >
                {selectStepperTitle(status)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);
