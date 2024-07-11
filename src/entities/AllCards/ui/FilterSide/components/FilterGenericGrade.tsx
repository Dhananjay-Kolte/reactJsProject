import { FC, memo, useEffect, useState } from 'react';
import { getError } from './helpers';
import { IFilterItemsProps } from './types';
import { Input } from '@/shared/ui/Inputs';

const FilterGenericGradeUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
}) => {
  const error = getError(
    selectedFilter.genericGradeMin,
    selectedFilter.genericGradeMax,
  );

  const [minValue, setMinValue] = useState(selectedFilter.genericGradeMin);
  const [maxValue, setMaxValue] = useState(selectedFilter.genericGradeMax);

  useEffect(() => {
    !!minValue && changeSelectFilter('genericGradeMin', minValue, 'resetPage');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minValue]);
  useEffect(() => {
    !!maxValue && changeSelectFilter('genericGradeMax', maxValue, 'resetPage');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxValue]);

  return (
    <div className='filter-sidebar-open__insurance-value'>
      <div className='filter-sidebar-open__insurance-value-items'>
        <div className='filter-sidebar-open__insurance-value-min-max'>
          <Input
            isValidate
            value={minValue}
            type='number'
            placeholder='Min'
            isError={error}
            min={1}
            max={10}
            onChange={setMinValue}
          />
          <span>-</span>
          <Input
            isValidate
            value={maxValue}
            type='number'
            placeholder='Max'
            isError={error}
            min={1}
            max={10}
            onChange={setMaxValue}
          />
        </div>
      </div>
      {!!error && (
        <p className='filter-sidebar-open__insurance-value__error'>
          Minimum must be less than maximum
        </p>
      )}
    </div>
  );
};
const FilterGenericGrade = memo(FilterGenericGradeUI);
export default FilterGenericGrade;
