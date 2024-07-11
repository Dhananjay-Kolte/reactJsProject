import { FC, memo, useCallback, useEffect, useState } from 'react';
import './myShipments.scss';
import { useLocation } from 'react-router-dom';
import {
  ShipmentsTinyActive,
  ShipmentsTinyPast,
  ShipmentsTinyDraft,
} from './ShipmentsTiny';
import { IMyShipmentProps, ILocationNotsRedirectState } from './types';
import { IInboundShipmentTinyRadio } from '@/entities/InboundShipment';
import { TinyRadio } from '@/shared/ui/Buttons/ui/TinyRadio/TinyRadio';

const MyShipmentsUI: FC<IMyShipmentProps> = ({ currentTypeContent }) => {
  const { state } = useLocation();

  const currentState = state ? (state as ILocationNotsRedirectState) : null;

  const scrollToShipment = (shipmentId: string) => {
    document
      ?.getElementById(shipmentId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const [isActive, setIsActive] = useState<IInboundShipmentTinyRadio>(
    currentState?.activeOrPastRedirect || 'Active',
  );

  useEffect(() => {
    if (currentState?.activeOrPastRedirect)
      setIsActive(currentState.activeOrPastRedirect);
  }, [currentState?.activeOrPastRedirect]);

  const showContentOnTiny = useCallback(
    (isActiveTiny: IInboundShipmentTinyRadio) => {
      if (isActiveTiny === 'Active')
        return (
          <ShipmentsTinyActive
            typeTiny={isActiveTiny}
            currentTypeContent={currentTypeContent}
            scrollToShipment={scrollToShipment}
          />
        );
      if (isActiveTiny === 'Past')
        return (
          <ShipmentsTinyPast
            typeTiny={isActiveTiny}
            currentTypeContent={currentTypeContent}
            scrollToShipment={scrollToShipment}
          />
        );
      if (isActiveTiny === 'Draft')
        return (
          <ShipmentsTinyDraft
            typeTiny={isActiveTiny}
            currentTypeContent={currentTypeContent}
            scrollToShipment={scrollToShipment}
          />
        );
    },
    [currentTypeContent],
  );

  return (
    <div className='my-shipments'>
      <div className='my-shipments__title'>
        <h4>Tracking details</h4>
        <TinyRadio value={isActive} setValue={setIsActive} />
      </div>
      {showContentOnTiny(isActive)}
    </div>
  );
};
const MyShipments = memo(MyShipmentsUI);
export default MyShipments;
