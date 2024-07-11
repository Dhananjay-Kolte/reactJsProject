import { FC, memo, useEffect } from 'react';
import './ShippingDetailsPageContent.scss';
import { useNavigate } from 'react-router-dom';
import {
  ContentLeftBlock,
  ContentRightBlock,
} from './ShippingDetailsContentBlocks/index';
import {
  getInboundShipmentById,
  getIsEditInboundShipment,
  setIsEditInboundShipmentSlice,
} from '@/entities/InboundShipment';
import { CheckCircleTrueSVG } from '@/shared/assets/svg/OutboundShipment';
import { LeftArrowSVG, RightArrowSVG } from '@/shared/assets/svg/miniButtons';
import {
  getRouteAllCards,
  getRouteShipmentInbound,
} from '@/shared/const/router';
import { useAppSelector, useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';

const ShipmentDetailsPageContentUI: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isEditInboundShipment = useAppSelector(getIsEditInboundShipment);
  const createInboundShipment = useAppSelector(getInboundShipmentById);

  useEffect(() => {
    if (isEditInboundShipment)
      return () => {
        dispatch(setIsEditInboundShipmentSlice(false));
      };
  }, [dispatch, isEditInboundShipment]);

  return (
    <div className='shipment-details'>
      <div className='shipment-details__header'>
        <CheckCircleTrueSVG width='32' height='32' />
        <h5>{`Shipment ${
          isEditInboundShipment ? 'edited' : 'created'
        } successfully!`}</h5>
      </div>
      <div className='shipment-details__content'>
        <ContentLeftBlock />
        <ContentRightBlock shipment={createInboundShipment} />
      </div>
      <div className='shipment-details__buttons'>
        <Button
          typeButton='secondary'
          text='go to my cards'
          size='small'
          img={LeftArrowSVG}
          onClick={() => navigate(getRouteAllCards())}
        />
        <Button
          typeButton='primary'
          text='go to my shipments'
          size='small'
          img={RightArrowSVG}
          imgLocation='right'
          onClick={() => navigate(getRouteShipmentInbound())}
        />
      </div>
    </div>
  );
};
const ShipmentDetailsPageContent = memo(ShipmentDetailsPageContentUI);
export default ShipmentDetailsPageContent;
