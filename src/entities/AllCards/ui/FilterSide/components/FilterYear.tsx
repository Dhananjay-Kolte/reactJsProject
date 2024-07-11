import { FC, memo, useEffect, useState } from 'react';
import { getError } from './helpers';
import { IFilterItemsProps } from './types';
import cls from '../filterSideBar.module.scss';
import { fromYear, toYear } from '@/features/YearFilter';
import { Autocomplete } from '@/shared/ui/Inputs';

const FilterYearUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
}) => {
  const error = getError(selectedFilter.yearMin, selectedFilter.yearMax);

  const [yearMin, setYearMin] = useState(selectedFilter.yearMin);
  const [yearMax, setYearMax] = useState(selectedFilter.yearMax);

  useEffect(() => {
    !!yearMin && changeSelectFilter('yearMin', yearMin, 'resetPage');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearMin]);
  useEffect(() => {
    !!yearMax && changeSelectFilter('yearMax', yearMax, 'resetPage');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearMax]);

  return (
    <div className='filter-sidebar-open__years'>
      <div className='filter-sidebar-open__years__year'>
        <Autocomplete
          items={fromYear}
          classNamePopup={cls.popup}
          value={yearMin}
          placeholder='From'
          minWidth={7.875}
          onChange={setYearMin}
        />
        <span>-</span>
        <Autocomplete
          items={toYear}
          classNamePopup={cls.popup}
          value={yearMax}
          placeholder='To'
          minWidth={7.875}
          onChange={setYearMax}
        />
      </div>
      {!!error && (
        <p className='filter-sidebar-open__years__error'>
          Minimum must be less than maximum
        </p>
      )}
    </div>
  );
};
const FilterYear = memo(FilterYearUI);
export default FilterYear;
