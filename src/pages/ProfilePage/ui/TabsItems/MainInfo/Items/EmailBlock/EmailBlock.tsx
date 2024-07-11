import {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from 'react';
import cls from '../../mainInfo.module.scss';
import {
  changesEmailProfileAction,
  getMyProfile,
  getMyProfileEmail,
} from '@/entities/MyProfile';
import { PhosphornSVG } from '@/shared/assets/svg';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Button, Checkbox } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Inputs';
import { Tooltip } from '@/shared/ui/Popovers';
import { HStack } from '@/shared/ui/Stack';
import { ChangeEmailModal } from '@/widgets/Headers';

interface IEmailBlockProps {
  className?: string;
  changeCheckbox: () => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  errorValidationEmail: string;
  setErrorValidationEmail: Dispatch<SetStateAction<string>>;
  emailDiscoverable: boolean;
}

export const EmailBlock: FC<IEmailBlockProps> = memo(props => {
  const {
    className,
    changeCheckbox,
    email,
    setEmail,
    errorValidationEmail,
    setErrorValidationEmail,
    emailDiscoverable,
  } = props;

  const dispatch = useAppDispatch();

  const profile = useAppSelector(getMyProfile);
  const profileEmail = useAppSelector(getMyProfileEmail);

  const [openModalChangeEmail, setOpenChangeEmail] = useState(false);

  const changeEmailProfile = useCallback(
    () =>
      profile.isActivateEmail
        ? setOpenChangeEmail(true)
        : dispatch(
            changesEmailProfileAction({
              email,
              typeAction: 'resent',
            }),
          ),
    [dispatch, email, profile.isActivateEmail],
  );

  return (
    <HStack max gap={1} align='center' justify='between'>
      <Input
        isValidate
        value={email}
        type='email'
        placeholder='Enter email'
        error={errorValidationEmail}
        setError={setErrorValidationEmail}
        disabled={!!profileEmail && profile.isActivateEmail}
        onChange={setEmail}
      />
      {!!profileEmail && (
        <Button
          typeButton='secondary'
          text={profile.isActivateEmail ? 'Change' : 'Resend email'}
          size='small'
          style={{ boxSizing: 'content-box' }}
          onClick={changeEmailProfile}
        />
      )}
      <Checkbox
        checked={emailDiscoverable}
        id='Discoverable'
        className={cls.discoverable}
        onChange={changeCheckbox}
      >
        Discoverable
      </Checkbox>
      <Tooltip
        placement='right'
        textWidth='243px'
        titleText={
          <span>
            Making your email address
            <br />
            discoverable will allow users
            <br />
            to search for your account by email
          </span>
        }
      >
        <PhosphornSVG />
      </Tooltip>
      {!!openModalChangeEmail && (
        <ChangeEmailModal
          open={openModalChangeEmail}
          setOpen={setOpenChangeEmail}
          currentEmail={email}
        />
      )}
    </HStack>
  );
});
