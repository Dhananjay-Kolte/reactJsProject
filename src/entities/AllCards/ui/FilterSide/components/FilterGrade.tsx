import { FC, memo, useCallback, useState } from 'react';
import { IFilterItemsProps } from './types';
import { grading } from '../constants';
import cls from '../filterSideBar.module.scss';
import { Select } from '@/shared/ui/Popovers';

const FilterGradeUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
}) => {
  const grades =
    selectedFilter.gradingCompany.length > 0
      ? grading[selectedFilter.gradingCompany[0]].map(item => ({
          content: item.value,
          value: item.value,
        }))
      : [];
  const lengthGradingCompany = selectedFilter.gradingCompany.length;

  const [selectGrades, setSelectGrades] = useState<string>('');

  const addGrade = useCallback(
    (value: string | string[]) => {
      if (typeof value === 'string') {
        setSelectGrades(value);
        changeSelectFilter('grade', [value], 'resetPage');
      } else changeSelectFilter('grade', value, 'resetPage');
    },
    [changeSelectFilter],
  );
  return (
    <div className='filter-sidebar-open__Grade-items'>
      <Select
        fullWidth
        classNamePopup={cls.popup}
        readonly={lengthGradingCompany < 1 || lengthGradingCompany > 1}
        placeholder='Enter grade'
        value={selectGrades}
        items={grades}
        onChange={addGrade}
      />
      {(lengthGradingCompany < 1 || lengthGradingCompany > 1) && (
        <p className='filter-sidebar-open__Grade-items__error'>
          {lengthGradingCompany < 1
            ? 'Choose the grading company first'
            : 'Grade parameter is available just for 1 Grading Company selected'}
        </p>
      )}
    </div>
  );
};
const FilterGrade = memo(FilterGradeUI);
export default FilterGrade;
