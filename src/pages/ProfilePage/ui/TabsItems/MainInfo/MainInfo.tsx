import { FC, useState, memo, FormEvent, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailBlock } from './Items/EmailBlock/EmailBlock';
import { ShipmentAddress } from './Items/ShipmentAddress/ShipmentAddress';
import cls from './mainInfo.module.scss';
import {
  changesEmailProfileAction,
  getMyProfile,
  getMyProfileEmail,
  setEmailMyProfileSlice,
  setMyProfileAction,
  setViewResendEmailMyProfileSlice,
} from '@/entities/MyProfile';
import { PhosphornSVG } from '@/shared/assets/svg';
import { getRouteShipmentInbound } from '@/shared/const/router';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { Input, TextArea } from '@/shared/ui/Inputs';
import { Tooltip } from '@/shared/ui/Popovers';
import { HStack, VStack } from '@/shared/ui/Stack';
import { CancelModal } from '@/widgets/Cancel';

export const MainInfo: FC = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const profile = useAppSelector(getMyProfile);
  const profileEmail = useAppSelector(getMyProfileEmail);

  const [openModalPreventChanges, setOpenPreventChanges] = useState(false);
  const [openModalPreventShipmentChanges, setOpenPreventShipmentChanges] =
    useState(false);

  const [email, setEmail] = useState(profileEmail || '');
  const [name, setName] = useState(profile.name || '');
  const [bio, setBio] = useState(profile.bio || '');
  const [twitterUsername, setTwitterUsername] = useState(
    profile.twitterUsername
      ? profile.twitterUsername.replace('https://twitter.com/', '')
      : '',
  );
  const [personalSite, setPersonalSite] = useState(profile.personalSite || '');

  const [emailDiscoverable, setIsDiscoverable] = useState(
    profile.emailDiscoverable,
  );

  const [errorValidationEmail, setErrorValidationEmail] = useState('');

  const handleProfileInfo = useCallback(
    (formData: FormData) => dispatch(setMyProfileAction(formData)),
    [dispatch],
  );

  const handleActivateEmail = useCallback(() => {
    dispatch(setViewResendEmailMyProfileSlice(true));
    dispatch(setEmailMyProfileSlice(email));
    dispatch(changesEmailProfileAction({ email, typeAction: 'add' }));
  }, [dispatch, email]);

  const handleSubmit = useCallback(
    (event: FormEvent<EventTarget>) => {
      event.preventDefault();
      const formData = new FormData();
      name !== profile.name && formData.append('name', name);
      bio !== profile.bio && formData.append('bio', bio);
      twitterUsername !== profile.twitterUsername &&
        formData.append(
          'twitterUsername',
          (twitterUsername.length > 0 ? 'https://twitter.com/' : '') +
            twitterUsername,
        );
      personalSite !== profile.personalSite &&
        formData.append('personalSite', personalSite);
      emailDiscoverable !== profile.emailDiscoverable &&
        formData.append('emailDiscoverable', String(emailDiscoverable));

      Array.from(formData.keys()).length && handleProfileInfo(formData);

      if (!profile.isActivateEmail) handleActivateEmail();
    },
    [
      bio,
      emailDiscoverable,
      handleActivateEmail,
      handleProfileInfo,
      name,
      personalSite,
      profile,
      twitterUsername,
    ],
  );

  const handleCancel = useCallback(
    (cause?: 'shipments') => {
      setEmail(profileEmail || '');
      setName(profile.name || '');
      setBio(profile.bio || '');
      setTwitterUsername(
        profile.twitterUsername
          ? profile.twitterUsername.replace('https://twitter.com/', '')
          : '',
      );
      setPersonalSite(profile.personalSite || '');
      if (cause === 'shipments') navigate(getRouteShipmentInbound());

      setOpenPreventChanges(false);
    },
    [navigate, profile, profileEmail],
  );

  const handleCancelModal = useCallback(
    (cause?: 'shipments') => {
      const profileCopy = JSON.parse(JSON.stringify(profile));
      profileCopy.email = profileCopy.email || '';
      profileCopy.name = profileCopy.name || '';
      profileCopy.bio = profileCopy.bio || '';
      profileCopy.twitterUsername = profileCopy.twitterUsername
        ? profileCopy.twitterUsername.replace('https://twitter.com/', '')
        : '';
      profileCopy.personalSite = profileCopy.personalSite || '';

      if (
        JSON.stringify({ ...profileCopy }) !==
        JSON.stringify({
          ...profileCopy,
          bio,
          email,
          name,
          personalSite,
          twitterUsername,
        })
      )
        if (cause === 'shipments') {
          setOpenPreventShipmentChanges(true);
          navigate(getRouteShipmentInbound());
        } else setOpenPreventChanges(true);
      else if (cause === 'shipments') navigate(getRouteShipmentInbound());
    },
    [bio, email, name, navigate, personalSite, profile, twitterUsername],
  );

  const changeCheckbox = useCallback(
    () => setIsDiscoverable(!emailDiscoverable),
    [emailDiscoverable],
  );

  const disableSubmit = useMemo(
    () => Boolean(errorValidationEmail) || email === '',
    [email, errorValidationEmail],
  );

  const fields = useMemo(
    () => [
      {
        title: 'Username',
        value: (
          <Input
            value={name}
            placeholder='Enter username'
            afterIcon={
              <Tooltip
                titleText='Public information will be available to everyone'
                placement='right'
                textWidth='123px'
              >
                <PhosphornSVG />
              </Tooltip>
            }
            onChange={setName}
          />
        ),
      },
      {
        title: 'Email',
        value: (
          <EmailBlock
            changeCheckbox={changeCheckbox}
            email={email}
            setEmail={setEmail}
            errorValidationEmail={errorValidationEmail}
            setErrorValidationEmail={setErrorValidationEmail}
            emailDiscoverable={emailDiscoverable}
          />
        ),
      },
      {
        title: 'Bio',
        value: (
          <TextArea
            fullWidth
            value={bio}
            placeholder='Tell the world your story!'
            onChange={setBio}
          />
        ),
      },
      {
        title: 'Twitter username',
        value: (
          <Input
            value={twitterUsername}
            placeholder='Enter your name in Twitter'
            startIcon={<span style={{ fontSize: '1.1rem' }}>@</span>}
            onChange={setTwitterUsername}
          />
        ),
      },
      {
        title: 'Personal site',
        value: (
          <Input
            value={personalSite}
            type='url'
            placeholder='https://'
            onChange={setPersonalSite}
          />
        ),
      },
      {
        align: true,
        title: 'Shipment address',
        value: <ShipmentAddress handleCancelModal={handleCancelModal} />,
      },
    ],
    [
      bio,
      changeCheckbox,
      email,
      emailDiscoverable,
      errorValidationEmail,
      handleCancelModal,
      name,
      personalSite,
      twitterUsername,
    ],
  );

  return (
    <VStack max className={cls['main-info']}>
      <form id='form' onSubmit={handleSubmit}>
        {fields.map(({ title, value, align }) => (
          <HStack key={title} align={align ? 'start' : 'center'}>
            <h5>{title}</h5>
            {value}
          </HStack>
        ))}
        <HStack justify='between' className={cls.buttons}>
          <Button
            typeButton='secondary'
            text='Cancel'
            onClick={() => handleCancelModal()}
          />
          <Button
            typeButton='primary'
            type='submit'
            text='Save'
            disabled={disableSubmit}
          />
        </HStack>
      </form>
      {!!openModalPreventChanges && (
        <CancelModal
          open={openModalPreventChanges}
          setOpen={setOpenPreventChanges}
          onClick={handleCancel}
        />
      )}
      {!!openModalPreventShipmentChanges && (
        <CancelModal
          open={openModalPreventShipmentChanges}
          setOpen={setOpenPreventShipmentChanges}
          onClick={() => handleCancel('shipments')}
        />
      )}
    </VStack>
  );
});
