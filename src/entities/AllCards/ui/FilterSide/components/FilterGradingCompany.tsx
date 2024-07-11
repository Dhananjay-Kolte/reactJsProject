import { FC, memo, useEffect, useState } from 'react';
import { allGradingCompany } from './helpers';
import { IFilterItemsProps } from './types';
import { Checkbox } from '@/shared/ui/Buttons';

const FilterGradingCompanyUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
}) => {
  const [selectGradingCompany, setSelectGradingCompany] = useState<string[]>(
    selectedFilter.gradingCompany,
  );
  const addCategory = (value: string) => {
    const inArray = selectGradingCompany.includes(value);
    const temp = inArray
      ? selectGradingCompany.filter(item => item !== value)
      : [...selectGradingCompany, value];
    setSelectGradingCompany(temp);
    changeSelectFilter('gradingCompany', temp, 'resetPage');
  };

  useEffect(() => {
    setSelectGradingCompany(
      selectedFilter.gradingCompany ? selectedFilter.gradingCompany : [],
    );
  }, [selectedFilter.gradingCompany]);

  return (
    <div className='filter-sidebar-open__categories'>
      {allGradingCompany.map(item => (
        <div key={item} className='filter-sidebar-open__categories-checkbox'>
          <Checkbox
            id={item}
            checked={selectGradingCompany.includes(item)}
            onChange={() => addCategory(item)}
          >
            {item}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};
const FilterGradingCompany = memo(FilterGradingCompanyUI);
export default FilterGradingCompany;
