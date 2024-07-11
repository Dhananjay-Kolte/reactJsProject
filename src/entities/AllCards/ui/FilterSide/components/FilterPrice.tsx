import { FC, memo, useCallback, useEffect, useState } from 'react';
import { getError } from './helpers';
import { IFilterItemsProps } from './types';
import { Input } from '@/shared/ui/Inputs';
import { ErrorMessage } from '@/shared/ui/Messages';
import { Select } from '@/shared/ui/Popovers';

const FilterPriceUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
}) => {
  const [selectTypeCurrency, setSelectTypeCurrency] = useState<string>('USD');

  const error = getError(selectedFilter.minPrice, selectedFilter.maxPrice);

  const addPrice = useCallback(
    (value: string | string[]) => {
      if (typeof value === 'string') {
        setSelectTypeCurrency(value);
        changeSelectFilter('typeCurrency', [value], 'resetPage');
      } else changeSelectFilter('typeCurrency', value, 'resetPage');
    },
    [changeSelectFilter],
  );

  const [minValue, setMinValue] = useState(selectedFilter.minPrice);
  const [maxValue, setMaxValue] = useState(selectedFilter.maxPrice);

  const handelMin = useCallback(
    (value: string) => {
      changeSelectFilter('minPrice', value, 'resetPage');
      setMinValue(value);
    },
    [changeSelectFilter],
  );

  const handelMax = useCallback(
    (value: string) => {
      changeSelectFilter('maxPrice', value, 'resetPage');
      setMaxValue(value);
    },
    [changeSelectFilter],
  );

  useEffect(() => {
    setMinValue(selectedFilter.minPrice);
  }, [selectedFilter.minPrice]);

  useEffect(() => {
    setMaxValue(selectedFilter.maxPrice);
  }, [selectedFilter.maxPrice]);

  return (
    <div className='filter-sidebar-open__insurance-value'>
      <div className='filter-sidebar-open__insurance-value-items'>
        {!1 && (
          <Select
            value={selectTypeCurrency}
            items={[{ content: 'USD', value: 'USD' }]}
            onChange={addPrice}
          />
        )}
        <div className='filter-sidebar-open__insurance-value-min-max'>
          <Input
            isValidate
            value={minValue}
            type='number'
            placeholder='Min'
            isError={error}
            min={1}
            max={999_999_998}
            onChange={handelMin}
          />
          <span>-</span>
          <Input
            isValidate
            value={maxValue}
            type='number'
            placeholder='Max'
            isError={error}
            min={1}
            max={999_999_998}
            onChange={handelMax}
          />
        </div>
      </div>
      {!!error && (
        <ErrorMessage errorMessage='Minimum must be less than maximum' />
      )}
    </div>
  );
};
const FilterPrice = memo(FilterPriceUI);
export default FilterPrice;
