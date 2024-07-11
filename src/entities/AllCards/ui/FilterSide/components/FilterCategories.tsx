import { FC, memo, useEffect, useState } from 'react';
import { IFilterItemsProps } from './types';
import { useGetAllCategories } from '@/shared/lib/hooks/useGetAllCategories';
import { Checkbox } from '@/shared/ui/Buttons';
import { HStack } from '@/shared/ui/Stack';

const FilterCategoriesUI: FC<IFilterItemsProps> = ({
  selectedFilter,
  changeSelectFilter,
  typePage,
}) => {
  const { allCategories } = useGetAllCategories(typePage);
  const [selectCategories, setSelectCategories] = useState<string[]>(
    selectedFilter.categories,
  );
  const addCategory = (value: string) => {
    const inArray = selectCategories.includes(value);
    const temp = inArray
      ? selectCategories.filter(item => item !== value)
      : [...selectCategories, value];
    setSelectCategories(temp);
    changeSelectFilter('categories', temp, 'resetPage');
  };

  useEffect(() => {
    setSelectCategories(
      selectedFilter.categories ? selectedFilter.categories : [],
    );
  }, [selectedFilter.categories]);

  return (
    <div className='filter-sidebar-open__categories'>
      {allCategories.map(([category, count]) => (
        <div
          key={category}
          className='filter-sidebar-open__categories-checkbox'
        >
          <Checkbox
            checked={selectCategories.includes(category)}
            id={category}
            onChange={() => addCategory(category)}
          >
            <HStack max gap={0.25}>
              <p
                className={'filter-sidebar-open__categories-checkbox__category'}
              >
                {category}
              </p>
              {!!count && (
                <p
                  className={'filter-sidebar-open__categories-checkbox__count'}
                >
                  {count}
                </p>
              )}
            </HStack>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};
const FilterCategories = memo(FilterCategoriesUI);
export default FilterCategories;
