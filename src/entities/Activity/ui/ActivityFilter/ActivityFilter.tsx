import { Dispatch, FC, SetStateAction, memo } from 'react';
import cls from './activityFilter.module.scss';
import { periodsActivities, statusesActivities } from '../../consts/activities';
import {
  IActivitiesFilter,
  PeriodActivities,
  StatusActivities,
} from '../../model/types/activity';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Buttons';
import { Select } from '@/shared/ui/Popovers';
import { HStack } from '@/shared/ui/Stack';

interface IActivityFilterProps {
  selectedFilter: IActivitiesFilter;
  setSelectedFilter?: Dispatch<SetStateAction<IActivitiesFilter>>;
  withStatuses: boolean;
  className?: string;
}

export const ActivityFilter: FC<IActivityFilterProps> = memo(props => {
  const { selectedFilter, setSelectedFilter, withStatuses, className } = props;

  const changeSelectFilter = (
    param: keyof IActivitiesFilter,
    value: string | string[],
  ) => {
    setSelectedFilter &&
      setSelectedFilter((prev: IActivitiesFilter) => ({
        ...prev,
        [param]: value,
      }));
  };

  const addStatus = (value: StatusActivities) => {
    if (selectedFilter.statuses) {
      const inArray = selectedFilter.statuses.includes(value);
      const temp = inArray
        ? selectedFilter.statuses.filter(item => item !== value)
        : [...selectedFilter.statuses, value];
      changeSelectFilter('statuses', temp);
    }
  };

  const handlePeriodChange = (newPeriod: PeriodActivities) => {
    changeSelectFilter('value', newPeriod);
  };

  return (
    <HStack
      max
      justify='between'
      className={classNames(cls['activity-filter'], {}, [className])}
    >
      <HStack gap={0.5}>
        {!!withStatuses &&
          statusesActivities.map(status => (
            <Button
              key={status}
              typeButton='secondary'
              text={status}
              size='small'
              className={classNames(
                cls['no-active-button'],
                {
                  [cls['active-button']]:
                    selectedFilter.statuses &&
                    selectedFilter.statuses.includes(status),
                },
                [],
              )}
              onClick={() => addStatus(status)}
            />
          ))}
      </HStack>
      <Select
        value={selectedFilter.value}
        classNameInput={cls.input}
        items={periodsActivities}
        minWidth={10}
        size='small'
        onChange={handlePeriodChange}
      />
    </HStack>
  );
});
