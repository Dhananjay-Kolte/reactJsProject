import { FC, memo, useCallback, useMemo, useState } from 'react';
import './shipmentCancel.scss';
import MoreDetailsButton from '../MoreDetailsButton/MoreDetailsButton';
import { IShipmentsItemProps } from '../types';
import { updateInboundShipmentAction } from '@/entities/InboundShipment';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { StatusShipments, BlockCosts } from '@/shared/ui/Statuses';
import { CancelModal } from '@/widgets/Cancel';

export const ShipmentCancel: FC<IShipmentsItemProps> = memo(({ shipment }) => {
  const dispatch = useAppDispatch();

  const { id, numberOfCards, valueOfBox, description, status, location } =
    shipment;
  const [expand, setExpand] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);

  const resumeShipment = useCallback(() => {
    dispatch(updateInboundShipmentAction({ shipmentId: id, status: 'New' }));
    setOpenCancel(false);
  }, [dispatch, id]);

  const currentLocation = useMemo(
    () =>
      location
        .map((item, index) => (index === 0 ? null : item))
        .filter(Boolean)
        .join(', '),
    [location],
  );

  return (
    <div className='cancel-shipment' id={id}>
      <StatusShipments status={status} number={id} />
      <div className='cancel-shipment__tracking-details'>
        <div className='cancel-shipment__tracking-details__left'>
          <p>Ship to address</p>
          <h3>{location[0]}</h3>
          <h2>{currentLocation}</h2>
        </div>
        <div className='cancel-shipment__tracking-details__right'>
          <div className='cancel-shipment__tracking-details__right__buttons'>
            <Button
              fullWidth
              typeButton='secondary'
              text='resume shipment'
              onClick={() => setOpenCancel(true)}
            />
          </div>
          <MoreDetailsButton expand={expand} setExpand={setExpand} />
        </div>
        <CancelModal
          open={openCancel}
          setOpen={setOpenCancel}
          typeContent='resumeShipment'
          shipment={shipment}
          onClick={resumeShipment}
        />
      </div>
      {!!expand && (
        <div className='shipment-in-progress__block-description'>
          <div className='shipment-in-progress__block-description__left'>
            <h1>Cards Description</h1>
            <p>{description}</p>
          </div>
          <BlockCosts
            status={status}
            value2={valueOfBox}
            value1={numberOfCards}
          />
        </div>
      )}
    </div>
  );
});
