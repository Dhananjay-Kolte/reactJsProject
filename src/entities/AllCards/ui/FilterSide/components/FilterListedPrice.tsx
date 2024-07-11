import { FC, useCallback, useEffect, useState } from 'react';
import { getError } from './helpers';
import { IFilterItemsProps } from './types';
import { typedMemo } from '@/shared/types/TypedMemo';
import { Input } from '@/shared/ui/Inputs';
import { ErrorMessage } from '@/shared/ui/Messages';
import { Select } from '@/shared/ui/Popovers';

const FilterListedPriceUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
}) => {
  const [selectTypeCurrency, setSelectTypeCurrency] = useState<string>('USD');

  const error = getError(
    selectedFilter.listPriceMin,
    selectedFilter.listPriceMax,
  );

  const addPrice = useCallback(
    (value: string | string[]) => {
      if (typeof value === 'string') {
        setSelectTypeCurrency(value);
        changeSelectFilter('typeCurrency', [value], 'resetPage');
      } else changeSelectFilter('typeCurrency', value, 'resetPage');
    },
    [changeSelectFilter],
  );

  const [minListedValue, setMinListedValue] = useState(
    selectedFilter.listPriceMin,
  );
  const [maxListedValue, setMaxListedValue] = useState(
    selectedFilter.listPriceMax,
  );

  const handelMin = useCallback(
    (value: string) => {
      changeSelectFilter('listPriceMin', value, 'resetPage');
      setMinListedValue(value);
    },
    [changeSelectFilter],
  );

  const handelMax = useCallback(
    (value: string) => {
      changeSelectFilter('listPriceMax', value, 'resetPage');
      setMaxListedValue(value);
    },
    [changeSelectFilter],
  );

  useEffect(() => {
    setMinListedValue(selectedFilter.listPriceMin);
  }, [selectedFilter.listPriceMin]);

  useEffect(() => {
    setMaxListedValue(selectedFilter.listPriceMax);
  }, [selectedFilter.listPriceMax]);

  return (
    <div className='filter-sidebar-open__insurance-value'>
      <div className='filter-sidebar-open__insurance-value-items'>
        {!1 && (
          <Select
            value={selectTypeCurrency}
            items={[{ content: 'USD', disabled: true, value: 'USD' }]}
            onChange={addPrice}
          />
        )}
        <div className='filter-sidebar-open__insurance-value-min-max'>
          <Input
            isValidate
            value={minListedValue}
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
            value={maxListedValue}
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
const FilterListedPrice = typedMemo(FilterListedPriceUI);
export default FilterListedPrice;
