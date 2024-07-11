import {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import cls from './cardActivities.module.scss';
import {
  ActivityTable,
  IActivitiesFilter,
  IActivity,
  getNFTCardActivitiesAction,
  toNumberTimeRange,
} from '@/entities/Activity';
import { TopArrowSVG, BottomArrowSVG } from '@/shared/assets/svg/miniButtons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { IconButton } from '@/shared/ui/Buttons';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ICardActivitiesProps {
  activities: IActivity[];
  id: string;
  nftAddress:string;
  selectedFilter: IActivitiesFilter;
  setSelectedFilter: Dispatch<SetStateAction<IActivitiesFilter>>;
  isExpanded?: {
    details: boolean;
    offers: boolean;
    activity: boolean;
  };
  updateExpand: (someKey: string, value: boolean) => void;
}

export const CardActivities: FC<ICardActivitiesProps> = memo(props => {
  const {
    activities,
    id,
    nftAddress,
    selectedFilter,
    setSelectedFilter,
    isExpanded,
    updateExpand,
  } = props;

  const dispatch = useAppDispatch();

  const expand = useCallback(
    () => updateExpand('activity', !isExpanded?.activity),
    [isExpanded?.activity, updateExpand],
  );

  const timeNumber: string = useMemo(
    () => toNumberTimeRange(selectedFilter.value),
    [selectedFilter.value],
  );

  const getNFTCardActivities = useCallback(() => {
    if (id && !!isExpanded?.activity)
      dispatch(
        getNFTCardActivitiesAction({
          nftAddress:nftAddress,
          statusFilter: selectedFilter.statuses,
          timeRange: timeNumber,
        }),
      );
  }, [dispatch, id, isExpanded?.activity, selectedFilter, timeNumber]);

  useEffect(() => {
    getNFTCardActivities();
  }, [getNFTCardActivities]);

  return (
    <VStack max className={cls['card-activity']}>
      <HStack
        max
        justify='between'
        align='center'
        className={classNames(cls.title, {
          [cls.expanded]: isExpanded?.activity,
        })}
        onClick={expand}
      >
        <h3>Activity</h3>
        <IconButton>
          {isExpanded?.activity ? <TopArrowSVG /> : <BottomArrowSVG />}
        </IconButton>
      </HStack>
      {!!isExpanded?.activity && (
        <div className={cls['activity-table']}>
          <ActivityTable
            selectedFilter={selectedFilter}
            classNameTable={cls.border}
            classNameFilter={cls.header}
            activities={activities}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      )}
    </VStack>
  );
});
