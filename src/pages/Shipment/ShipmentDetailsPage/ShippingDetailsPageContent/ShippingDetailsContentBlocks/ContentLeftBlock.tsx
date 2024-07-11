import { FC, memo } from 'react';
import { getInboundShipmentById } from '@/entities/InboundShipment';
import { OrangeBoxSVG } from '@/shared/assets/svg/ShipmentDetails';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { BlockCosts } from '@/shared/ui/Statuses/ui/BlocksColor';

const ContentLeftBlockUI: FC = () => {
  const { numberOfCards, description, valueOfBox } = useAppSelector(
    getInboundShipmentById,
  );

  return (
    <div className='shipment-details__content__left'>
      <div className='shipment-details__content__left__summary'>
        <div>
          <OrangeBoxSVG />
          <p>Shipment details</p>
        </div>
        <BlockCosts
          status='Processing'
          value2={valueOfBox}
          value1={numberOfCards}
        />
      </div>
      <div className='shipment-details__content__left__description'>
        {description}
      </div>
    </div>
  );
};
const ContentLeftBlock = memo(ContentLeftBlockUI);
export default ContentLeftBlock;
