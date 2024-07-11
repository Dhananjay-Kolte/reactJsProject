import { FC, useEffect, useState, useCallback } from 'react';
import { MainInfo } from './TabsItems/MainInfo/MainInfo';
import cls from './profilePage.module.scss';
import {
  getMyProfile,
  getMyProfileAction,
  getMyProfileIsLoading,
} from '@/entities/MyProfile';
import { PublicProfileHeader } from '@/entities/PublicProfile';
import { getShipmentAddressesIsLoading } from '@/entities/ShipmentAddresses';
import { AccountBalance } from '@/features/AccountBalance';
import { ActivitiesProfile } from '@/features/ActivitiesProfile';
import { ITabSettings, SettingsTabs } from '@/features/SettingsTabs';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Loader } from '@/shared/ui/Loaders';
import { Page } from '@/widgets/Page';

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();

  const isLoadingAddresses = useAppSelector(getShipmentAddressesIsLoading);
  const profile = useAppSelector(getMyProfile);
  const isLoadingProfile = useAppSelector(getMyProfileIsLoading);

  const [currentTab, setCurrentTab] = useState<ITabSettings>('Main Info');

  const changeTab = useCallback((tabName: ITabSettings) => {
    setCurrentTab(tabName);
  }, []);

  useEffect(() => {
    dispatch(getMyProfileAction());
  }, [dispatch, profile.wallet]);

  const selectContent = useCallback(
    (tabName: ITabSettings, currentWallet: string) => {
      if (tabName === 'Main Info') return <MainInfo />;
      if (tabName === 'Account Balance')
        return <AccountBalance wallet={currentWallet} />;
      if (tabName === 'Activity')
        return <ActivitiesProfile wallet={currentWallet} />;
    },
    [],
  );

  if (isLoadingProfile || isLoadingAddresses) return <Loader />;

  return (
    <Page className={cls['my-profile-page']} justify='left'>
      <PublicProfileHeader
        isChanges
        profile={profile}
        wallet={profile.wallet || ''}
        isLoading={isLoadingProfile}
      />
      <SettingsTabs currentTab={currentTab} changeTabs={changeTab} />
      {selectContent(currentTab, profile.wallet)}
    </Page>
  );
};

export default ProfilePage;
