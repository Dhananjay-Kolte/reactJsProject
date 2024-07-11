import { FC, memo, useCallback, useMemo, useState } from 'react';
import './shipmentSuccess.scss';
import MoreDetailsButton from '../MoreDetailsButton/MoreDetailsButton';
import { MultiStepper } from '../MultiStepper/MultiStepper';
import TableShipments from '../TableShipments/TableShipments';
import { IShipmentsItemProps } from '../types';
import {
  getInfoMintInboundShipments,
  setCreateInboundShipmentSlice,
  setIsEditInboundShipmentSlice,
} from '@/entities/InboundShipment';
import { EditSVG } from '@/shared/assets/svg';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { StatusShipments } from '@/shared/ui/Statuses';

export const ShipmentSuccess: FC<IShipmentsItemProps> = memo(
  ({ shipment, typeTiny, setOpenEditShipmentModal }) => {
    const dispatch = useAppDispatch();

    const { transferShipmentsIds } = useAppSelector(
      getInfoMintInboundShipments,
    );

    const { id, status, trackingUrl, location, trackingId } = shipment;
    const [expand, setExpand] = useState(false);
    const flagInPast =
      status === 'FullyMinted' ||
      status === 'PartlyMinted' ||
      transferShipmentsIds.includes(shipment.id);

    const editShipment = useCallback(() => {
      dispatch(setCreateInboundShipmentSlice(shipment));
      dispatch(setIsEditInboundShipmentSlice(true));
      setOpenEditShipmentModal && setOpenEditShipmentModal();
    }, [dispatch, setOpenEditShipmentModal, shipment]);

    const currentLocation = useMemo(
      () =>
        location
          .map((item, index) => (index === 0 ? null : item))
          .filter(Boolean)
          .join(', '),
      [location],
    );

    return (
      <div className='shipment-success' id={id}>
        <StatusShipments status={status} number={id} />
        <div className='shipment-success__tracking-details'>
          <div
            className='shipment-success__tracking-details__left'
            style={{ minHeight: !flagInPast ? '11.75rem' : '' }}
          >
            {!flagInPast && (
              <a
                href={trackingUrl}
                target='_blank'
                rel='noreferrer'
                style={{ visibility: 'hidden' }}
              >
                {trackingId}
              </a>
            )}
            <p>Ship to address</p>
            <h2 className={flagInPast ? 'past' : ''}>{location[0]}</h2>
            <h2 className={flagInPast ? 'past' : ''}>{currentLocation}</h2>
            {!flagInPast && (
              <MultiStepper statusShipment={status} typeShipment='inbound' />
            )}
          </div>
          <div className='shipment-success__tracking-details__right'>
            {!flagInPast ? (
              <Button
                typeButton='secondary'
                text='Edit'
                size='small'
                img={EditSVG}
                onClick={editShipment}
              />
            ) : (
              <div />
            )}
            <MoreDetailsButton expand={expand} setExpand={setExpand} />
          </div>
        </div>
        {!!expand && <TableShipments shipment={shipment} typeTiny={typeTiny} />}
      </div>
    );
  },
);
