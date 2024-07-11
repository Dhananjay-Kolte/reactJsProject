import { FC, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyProfile, getMyProfileEmail } from '@/entities/MyProfile';
import {
  getRouteCreateShipment,
  getRouteSettings,
  getRouteVerifyNFTCard,
} from '@/shared/const/router';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { CancelModal } from '@/widgets/Cancel';

export interface NoDataProps {
  withButtons: boolean;
}

const NodataUI: FC<NoDataProps> = props => {
  const navigate = useNavigate();
  const { withButtons } = props;
  const { isActivateEmail } = useAppSelector(getMyProfile);
  const profileEmail = useAppSelector(getMyProfileEmail);

  const currentTypeContent =
    profileEmail && !isActivateEmail ? 'unconfirmedEmail' : 'emptyEmail';

  const [openModalEmail, setOpenModalEmail] = useState(false);
  const checkingForEmail = () =>
    isActivateEmail
      ? navigate(getRouteCreateShipment())
      : setOpenModalEmail(true);
  const redirectInSettings = () => {
    navigate(getRouteSettings());
    setOpenModalEmail(false);
  };

  const redirectToVerify = () => {
    navigate(getRouteVerifyNFTCard());
    setOpenModalEmail(false);
  };

  return (
    <div>
      <div className='all-cards__cards__empty'>
        <span>No cards yet</span>
        {!!withButtons && (
          <div className='all-cards__cards__empty__btns'>
            <Button
              typeButton='primary'
              text='DEPOSIT CARDS'
              onClick={checkingForEmail}
            />
            <Button
              typeButton='secondary'
              text='VERIFY ASSET'
              onClick={redirectToVerify}
            />
          </div>
        )}
        <CancelModal
          open={openModalEmail}
          setOpen={setOpenModalEmail}
          typeContent={currentTypeContent}
          onClick={redirectInSettings}
        />
      </div>
    </div>
  );
};

const Nodata = memo(NodataUI);
export default Nodata;
