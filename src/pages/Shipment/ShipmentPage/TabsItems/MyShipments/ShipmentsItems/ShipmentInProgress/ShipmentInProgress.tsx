import { FC, memo, useCallback, useMemo, useState } from 'react';
import './shipmentInProgress.scss';
import { EditTrackNumberModal } from './EditTrackNumberModal/EditTrackNumberModal';
import MoreDetailsButton from '../MoreDetailsButton/MoreDetailsButton';
import { MultiStepper } from '../MultiStepper/MultiStepper';
import { IShipmentsItemProps } from '../types';
import {
  getAllInboundShipmentsAction,
  setCreateInboundShipmentSlice,
  setIsEditInboundShipmentSlice,
  updateInboundShipmentAction,
} from '@/entities/InboundShipment';
import { PrintDownloadButtons } from '@/pages/PDFworker';
import { EditSVG } from '@/shared/assets/svg';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { IconButton, Button } from '@/shared/ui/Buttons';
import { StatusShipments, BlockCosts } from '@/shared/ui/Statuses';

export const ShipmentInProgress: FC<IShipmentsItemProps> = memo(
  ({ shipment, setOpenEditShipmentModal }) => {
    const {
      id,
      numberOfCards,
      valueOfBox,
      description,
      status,
      trackingUrl,
      location,
      trackingId,
    } = shipment;
    const dispatch = useAppDispatch();

    const [expand, setExpand] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const updateTrackNumber = useCallback(
      (valueInput: string) => {
        dispatch(
          updateInboundShipmentAction({
            shipmentId: id,
            trackingId: valueInput,
          }),
        );
        dispatch(getAllInboundShipmentsAction('Active'));
        setOpenEditModal(false);
      },
      [dispatch, id],
    );
    const locationFilter = location.filter(i => !!i.length);
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
      <div className='shipment-in-progress' id={id}>
        <StatusShipments status={status} number={id} />
        <div className='shipment-in-progress__tracking-details'>
          <div className='shipment-in-progress__tracking-details__left'>
            {!!trackingId && (
              <div className='shipment-in-progress__tracking-details__left__link'>
                <a href={trackingUrl} target='_blank' rel='noreferrer'>
                  {`# ${trackingId}`}
                </a>
                <IconButton onClick={() => setOpenEditModal(true)}>
                  <EditSVG />
                </IconButton>
              </div>
            )}
            <div className='shipment-in-progress__tracking-details__left__wrapper'>
              <div className='shipment-in-progress__tracking-details__left__wrapper__titles'>
                <p>Ship to address</p>
                <h2>{location[0]}</h2>
                <h2>{currentLocation}</h2>
              </div>
              <PrintDownloadButtons shipment={shipment} />
            </div>
            <MultiStepper statusShipment={status} typeShipment='inbound' />
          </div>
          <div className='shipment-in-progress__tracking-details__right'>
            <Button
              typeButton='secondary'
              text='Edit'
              size='small'
              img={EditSVG}
              onClick={editShipment}
            />
            <MoreDetailsButton expand={expand} setExpand={setExpand} />
          </div>
          <EditTrackNumberModal
            open={openEditModal}
            setOpen={setOpenEditModal}
            trackingId={trackingId || ''}
            onClick={updateTrackNumber}
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
  },
);
