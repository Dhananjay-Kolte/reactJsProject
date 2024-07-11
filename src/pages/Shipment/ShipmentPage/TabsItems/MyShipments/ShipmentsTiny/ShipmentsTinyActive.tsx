import { FC, useState, useEffect, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import EditShipmentModal from './EditShipment/EditShipmentModal';
import EmptyShipments from './EmptyShipments';
import { IShipmentsTinyProps } from './types';
import { getAuthData, getAuthIsLoading } from '@/entities/Auth';
import {
  getAllActiveInboundShipments,
  getAllInboundShipmentsAction,
  getInboundShipmentIsLoading,
} from '@/entities/InboundShipment';
import {
  IOutboundShipmentTinyRadio,
  getAllActiveOutboundShipments,
  getAllOutboundShipmentsAction,
} from '@/entities/OutboundShipment';
import {
  selectInboundShipmentInTiny,
  selectOutboundShipmentInTiny,
} from '@/shared/lib/helpers/selectShipmentInTiny';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Loader } from '@/shared/ui/Loaders';

const ShipmentsTinyActiveUI: FC<IShipmentsTinyProps> = ({
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

  const isLoadingInboundShipment = useAppSelector(getInboundShipmentIsLoading);
  const { wallet: publicWallet } = useAppSelector(getAuthData);
  const isLoadingProfile = useAppSelector(getAuthIsLoading);

  const typeInbound = currentTypeContent === 'inbound';

  const shipmentsActiveInboundShipments = useAppSelector(
    getAllActiveInboundShipments,
  );
  const shipmentsActiveOutboundShipments = useAppSelector(
    getAllActiveOutboundShipments,
  );
  const currentShipmentActive = useMemo(
    () =>
      typeInbound
        ? shipmentsActiveInboundShipments
        : shipmentsActiveOutboundShipments,
    [
      shipmentsActiveInboundShipments,
      shipmentsActiveOutboundShipments,
      typeInbound,
    ],
  );
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const closeEditShipmentModal = () => setIsOpenEditModal(false);

  const setOpenEditShipmentModal = () => setIsOpenEditModal(true);

  useEffect(() => {
    dispatch(
      typeInbound
        ? getAllInboundShipmentsAction('Active')
        : getAllOutboundShipmentsAction('Active'),
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
      {currentShipmentActive.length > 0 ? (
        currentShipmentActive.map(item => (
          <div key={item.id} className='my-shipments__tiny__item'>
            {typeInbound
              ? selectInboundShipmentInTiny(
                  item as IShipmentInbound,
                  typeTiny,
                  isOpenEditModal,
                  setOpenEditShipmentModal,
                )
              : selectOutboundShipmentInTiny(
                  item as IShipmentOutbound,
                  typeTiny as IOutboundShipmentTinyRadio,
                )}
          </div>
        ))
      ) : (
        <EmptyShipments currentTypeContent={currentTypeContent} />
      )}
      <EditShipmentModal
        open={isOpenEditModal}
        setOpenEditShipmentModal={closeEditShipmentModal}
      />
    </div>
  );
};
const ShipmentsTinyActive = memo(ShipmentsTinyActiveUI);
export default ShipmentsTinyActive;
