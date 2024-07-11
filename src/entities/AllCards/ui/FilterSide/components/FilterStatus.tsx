import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { IFilterItemsProps } from './types';
import { styleActive, styleNoActive } from '../constants';
import { addSelectValueArray } from '@/shared/lib/addValueArray';
import { Button } from '@/shared/ui/Buttons';

const FilterStatusUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
  typePage,
}) => {
  const arrayStatus = useMemo(
    () =>
      typePage === 'allCards' || typePage === 'profile'
        ? ['Valid', 'Invalid', 'Frozen', 'Has Offers', 'Listed', 'Not Listed']
        : ['Buy now', 'Has offers'],
    [typePage],
  );
  const [selectStatuses, setSelectStatuses] = useState<string[]>(
    selectedFilter.status,
  );

  const addStatus = useCallback(
    (value: string) => {
      const temp = addSelectValueArray(selectStatuses, value);
      setSelectStatuses(temp);
      changeSelectFilter('status', temp, 'resetPage');
    },
    [changeSelectFilter, selectStatuses],
  );

  useEffect(() => {
    selectedFilter.status
      ? setSelectStatuses(selectedFilter.status)
      : setSelectStatuses([]);
  }, [selectedFilter.status]);
  return (
    <div className='filter-sidebar-open__groupBTN'>
      {arrayStatus.map(status => (
        <Button
          key={status}
          typeButton='secondary'
          text={status}
          style={selectStatuses.includes(status) ? styleActive : styleNoActive}
          size='small'
          onClick={() => addStatus(status)}
        />
      ))}
    </div>
  );
};
const FilterStatus = memo(FilterStatusUI);
export default FilterStatus;
