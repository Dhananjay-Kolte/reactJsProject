import { FC, memo, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import EmptyShipments from './EmptyShipments';
import { IShipmentsTinyProps } from './types';
import { getAuthData, getAuthIsLoading } from '@/entities/Auth';
import {
  getAllInboundShipmentsAction,
  getAllPastInboundShipments,
  getInboundShipmentIsLoading,
} from '@/entities/InboundShipment';
import {
  IOutboundShipmentTinyRadio,
  getAllOutboundShipmentsAction,
  getAllPastOutboundShipments,
} from '@/entities/OutboundShipment';
import {
  selectInboundShipmentInTiny,
  selectOutboundShipmentInTiny,
} from '@/shared/lib/helpers/selectShipmentInTiny';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Loader } from '@/shared/ui/Loaders';

const ShipmentsTinyPastUI: FC<IShipmentsTinyProps> = ({
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

  const typeInbound = currentTypeContent === 'inbound';
  const isLoadingInboundShipment = useAppSelector(getInboundShipmentIsLoading);
  const { wallet: publicWallet } = useAppSelector(getAuthData);
  const isLoadingProfile = useAppSelector(getAuthIsLoading);

  const shipmentsPastInboundShipments = useAppSelector(
    getAllPastInboundShipments,
  );
  const shipmentsPastOutboundShipments = useAppSelector(
    getAllPastOutboundShipments,
  );
  const currentShipmentPast = useMemo(
    () =>
      typeInbound
        ? shipmentsPastInboundShipments
        : shipmentsPastOutboundShipments,
    [
      shipmentsPastInboundShipments,
      shipmentsPastOutboundShipments,
      typeInbound,
    ],
  );

  useEffect(() => {
    dispatch(
      typeInbound
        ? getAllInboundShipmentsAction('Past')
        : getAllOutboundShipmentsAction('Past'),
    );
  }, [dispatch, typeInbound, publicWallet]);

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
      {currentShipmentPast.length > 0 ? (
        currentShipmentPast.map(item => (
          <div key={item.id} className='my-shipments__tiny__item'>
            {typeInbound
              ? selectInboundShipmentInTiny(item as IShipmentInbound, typeTiny)
              : selectOutboundShipmentInTiny(
                  item as IShipmentOutbound,
                  typeTiny as IOutboundShipmentTinyRadio,
                )}
          </div>
        ))
      ) : (
        <EmptyShipments currentTypeContent={currentTypeContent} />
      )}
    </div>
  );
};
const ShipmentsTinyPast = memo(ShipmentsTinyPastUI);
export default ShipmentsTinyPast;
