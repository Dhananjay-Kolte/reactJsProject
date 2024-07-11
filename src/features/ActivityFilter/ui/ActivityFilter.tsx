import { memo, useState } from 'react';
import cls from './ActivityFilter.module.scss';
import {
  PeriodActivities,
  periodsActivities,
  statusesActivities,
} from '@/entities/Activity';
import { classNames } from '@/shared/lib/classNames/classNames';
import { StatusesFilters } from '@/shared/ui/Buttons';
import { Select } from '@/shared/ui/Popovers';
import { HStack } from '@/shared/ui/Stack';

export interface ActivityFilterProps {
  className?: string;
  onSelectFilter?: () => void;
  defaultValue?: string;
  withStatuses?: boolean;
}

export const ActivityFilter = memo((props: ActivityFilterProps) => {
  const {
    className,
    onSelectFilter,
    withStatuses = false,
    defaultValue,
  } = props;

  const [selectPeriod, setSelectPeriod] = useState<PeriodActivities>(
    defaultValue || 'All time',
  );

  const handlePeriodChange = (newPeriod: PeriodActivities) => {
    setSelectPeriod(newPeriod);
  };

  return (
    <HStack
      max
      className={classNames('ActivityFilter', {}, [className])}
      justify='between'
    >
      <HStack gap={0.5}>
        <StatusesFilters statuses={statusesActivities} />
      </HStack>
      <div>
        <Select
          defaultValue={'All time'}
          value={selectPeriod}
          classNameInput={cls.input}
          items={periodsActivities}
          onChange={handlePeriodChange}
        />
      </div>
    </HStack>
  );
});
