import { FC, memo, useEffect, useMemo, useState } from 'react';
import cls from './activitiesProfile.module.scss';
import {
  ActivityTable,
  IActivitiesFilter,
  getActivityAction,
  getAllActivity,
} from '@/entities/Activity';
import { getAuthData, getIsAuth } from '@/entities/Auth';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';

interface IActivitiesProfileProps {
  className?: string;
  wallet: string;
}

export const ActivitiesProfile: FC<IActivitiesProfileProps> = memo(props => {
  const { className, wallet } = props;

  const dispatch = useAppDispatch();

  const { wallet: currentUserWallet } = useAppSelector(getAuthData);
  const activities = useAppSelector(getAllActivity);
  const isAuth = useAppSelector(getIsAuth);

  const isOwnerWallet = useMemo(
    () => wallet === currentUserWallet,
    [currentUserWallet, wallet],
  );

  const [selectedFilter, setSelectedFilter] = useState<IActivitiesFilter>({
    statuses: [],
    value: 'All time',
  });

  useEffect(() => {
    dispatch(
      getActivityAction({
        wallet,
      }),
    );
  }, [selectedFilter, dispatch, wallet, isAuth]);

  return (
    <ActivityTable
      isOwnerWallet={isOwnerWallet}
      classNameFilter={cls['filter-block']}
      classNameTable={cls.table}
      typePage='profile'
      activities={activities}
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
    />
  );
});
