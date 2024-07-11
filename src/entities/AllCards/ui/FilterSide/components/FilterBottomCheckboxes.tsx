import { FC, memo, useMemo } from 'react';
import { IFilterItemsProps } from './types';
import { ISelectFilters } from '../../../model/types/allCards';
import { Checkbox } from '@/shared/ui/Buttons';

const FilterBottomCheckboxesUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
}) => {
  const bottomCheckboxes: {
    title: keyof ISelectFilters;
    value: boolean;
  }[] = useMemo(
    () => [
      { title: 'autographed', value: selectedFilter.autographed },
      { title: 'authenticated', value: selectedFilter.authenticated },
    ],
    [selectedFilter.authenticated, selectedFilter.autographed],
  );

  return (
    <div className='filter-sidebar-open__checkboxes'>
      {bottomCheckboxes.map((item, i) => (
        <div
          key={item.title}
          className='filter-sidebar-open__categories-checkbox'
        >
          <Checkbox
            checked={item.value}
            id={`autographed-${i}`}
            onChange={() => {
              changeSelectFilter(item.title, !item.value, 'resetPage');
            }}
          >
            {item.title}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};
const FilterBottomCheckboxes = memo(FilterBottomCheckboxesUI);
export default FilterBottomCheckboxes;
