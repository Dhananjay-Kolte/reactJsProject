import { FC, memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EmptyShipments from './EmptyShipments';
import { IShipmentsTinyProps } from './types';
import {
  getAllDraftInboundShipments,
  getAllInboundShipmentsAction,
  getInboundShipmentIsLoading,
} from '@/entities/InboundShipment';
import { selectInboundShipmentInTiny } from '@/shared/lib/helpers/selectShipmentInTiny';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Loader } from '@/shared/ui/Loaders';

const ShipmentsTinyDraftUI: FC<IShipmentsTinyProps> = ({
  typeTiny,
  currentTypeContent,
  scrollToShipment,
}) => {
  const dispatch = useAppDispatch();
  const { state: stateLocation } = useLocation();

  const currentStateLocation = stateLocation
    ? (stateLocation as {
        activeOrPastRedirect: string;
        typeShipment: string;
        shipmentId: string;
      })
    : null;

  const inboundShipmentsDraft = useAppSelector(getAllDraftInboundShipments);
  const isLoadingInboundShipment = useAppSelector(getInboundShipmentIsLoading);
  const isLoadingProfile = useAppSelector(
    state => state.auth.authWallet.isLoadingAuth,
  );

  useEffect(() => {
    dispatch(getAllInboundShipmentsAction('Draft'));
  }, [dispatch]);

  useEffect(() => {
    if (currentStateLocation?.shipmentId && !isLoadingInboundShipment)
      scrollToShipment(currentStateLocation.shipmentId);
  }, [
    currentStateLocation?.shipmentId,
    isLoadingInboundShipment,
    scrollToShipment,
  ]);

  return isLoadingInboundShipment || isLoadingProfile ? (
    <Loader />
  ) : (
    <div className='my-shipments__tiny'>
      {inboundShipmentsDraft.length > 0 ? (
        inboundShipmentsDraft.map(item => (
          <div key={item.id} className='my-shipments__tiny__item'>
            {selectInboundShipmentInTiny(item, typeTiny)}
          </div>
        ))
      ) : (
        <EmptyShipments currentTypeContent={currentTypeContent} />
      )}
    </div>
  );
};
const ShipmentsTinyDraft = memo(ShipmentsTinyDraftUI);
export default ShipmentsTinyDraft;
