import { FC, memo, useState } from 'react';
import { useNavigate } from 'react-router';
import { IEmptyShipmentsProps } from './types';
import { setIsEditInboundShipmentSlice } from '@/entities/InboundShipment';
import { getMyProfile, getMyProfileEmail } from '@/entities/MyProfile';
import {
  getRouteAllCards,
  getRouteCreateShipment,
  getRouteSettings,
} from '@/shared/const/router';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { CancelModal } from '@/widgets/Cancel';

const EmptyShipmentsUI: FC<IEmptyShipmentsProps> = ({ currentTypeContent }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const profileEmail = useAppSelector(getMyProfileEmail);
  const { isActivateEmail } = useAppSelector(getMyProfile);

  const currentTypeModalContent =
    profileEmail && !isActivateEmail ? 'unconfirmedEmail' : 'emptyEmail';

  const [openModalEmail, setOpenModalEmail] = useState(false);

  const openCreateShipment = () => {
    dispatch(setIsEditInboundShipmentSlice(false));
    navigate(getRouteCreateShipment());
  };

  const openCollections = () => {
    navigate(getRouteAllCards());
  };

  const checkingForEmail = () => {
    isActivateEmail ? openCreateShipment() : setOpenModalEmail(true);
  };

  const redirectInProfile = () => {
    navigate(getRouteSettings());
    setOpenModalEmail(false);
  };

  return (
    <div className='my-shipments__empty'>
      {currentTypeContent === 'inbound' ? (
        <>
          <p>You don&apos;t have any shipments yet</p>
          <Button
            typeButton='secondary'
            text='SEND IN YOUR CARDS'
            size='small'
            onClick={checkingForEmail}
          />
        </>
      ) : (
        <>
          <p>You haven’t completed any withdrawal transactions yet</p>
          <Button
            typeButton='secondary'
            text='go to your collection'
            size='small'
            onClick={openCollections}
          />
        </>
      )}
      <CancelModal
        open={openModalEmail}
        setOpen={setOpenModalEmail}
        typeContent={currentTypeModalContent}
        onClick={redirectInProfile}
      />
    </div>
  );
};
const EmptyShipments = memo(EmptyShipmentsUI);
export default EmptyShipments;
