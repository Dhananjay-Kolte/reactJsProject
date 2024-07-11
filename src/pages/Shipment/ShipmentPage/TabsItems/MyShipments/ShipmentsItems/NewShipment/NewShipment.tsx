import { FC, memo, SyntheticEvent, useCallback, useState } from 'react';
import './newShipment.scss';
import MoreDetailsButton from '../MoreDetailsButton/MoreDetailsButton';
import { MultiStepper } from '../MultiStepper/MultiStepper';
import { IShipmentsItemProps } from '../types';
import {
  cancelInboundShipmentAction,
  setCreateInboundShipmentSlice,
  setIsEditInboundShipmentSlice,
  updateInboundShipmentAction,
} from '@/entities/InboundShipment';
import { PrintDownloadButtons } from '@/pages/PDFworker';
import { CancelSVG, EditSVG } from '@/shared/assets/svg';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Inputs';
import { StatusShipments, BlockCosts } from '@/shared/ui/Statuses';
import { CancelModal } from '@/widgets/Cancel';

export const NewShipment: FC<IShipmentsItemProps> = memo(
  ({ shipment, setOpenEditShipmentModal }) => {
    const dispatch = useAppDispatch();

    const { id, numberOfCards, valueOfBox, description, status } = shipment;
    const [trackingNumber, setTrackingNumber] = useState('');
    const [openCancel, setOpenCancel] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
    };

    const cancelShipment = useCallback(() => {
      dispatch(cancelInboundShipmentAction(id));
      setOpenCancel(false);
    }, [dispatch, id]);

    const editShipment = useCallback(() => {
      dispatch(setCreateInboundShipmentSlice(shipment));
      dispatch(setIsEditInboundShipmentSlice(true));
      setOpenEditShipmentModal && setOpenEditShipmentModal();
    }, [dispatch, setOpenEditShipmentModal, shipment]);

    const submitShipment = useCallback(() => {
      dispatch(
        updateInboundShipmentAction({
          shipmentId: id,
          trackingId: trackingNumber,
        }),
      );
    }, [dispatch, id, trackingNumber]);

    return (
      <div className='new-shipment'>
        <StatusShipments status={status} number={id} />
        <div className='new-shipment__tracking-details' id={id}>
          <div className='new-shipment__tracking-details__left'>
            <MultiStepper statusShipment={status} typeShipment='inbound' />
            <h3>
              Please enter the tracking number you received from your shipping
              carrier
            </h3>
            <div className='new-shipment__tracking-details__left__form'>
              <form
                id='form'
                style={{ minWidth: '36.5rem' }}
                onSubmit={handleSubmit}
              >
                <Input
                  value={trackingNumber}
                  placeholder='Tracking id'
                  onChange={setTrackingNumber}
                />
                <Button
                  typeButton='primary'
                  text='Submit'
                  disabled={trackingNumber === ''}
                  onClick={submitShipment}
                />
              </form>
              <div className='new-shipment__tracking-details__right__prints'>
                <PrintDownloadButtons shipment={shipment} />
              </div>
            </div>
          </div>
          <div className='new-shipment__tracking-details__right'>
            <div className='new-shipment__tracking-details__right__buttons'>
              <Button
                typeButton='secondary'
                text='Edit'
                size='small'
                img={EditSVG}
                onClick={editShipment}
              />
              <Button
                typeButton='secondary'
                text='Cancel'
                size='small'
                img={CancelSVG}
                onClick={() => setOpenCancel(true)}
              />
            </div>
            <MoreDetailsButton expand={expand} setExpand={setExpand} />
          </div>
          <CancelModal
            open={openCancel}
            setOpen={setOpenCancel}
            typeContent='cancelShipment'
            onClick={cancelShipment}
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
