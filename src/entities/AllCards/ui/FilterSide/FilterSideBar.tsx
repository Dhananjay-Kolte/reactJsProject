import {
  createElement,
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './filterSideBar.scss';
import {
  FilterCategories,
  FilterStatus,
  FilterPrice,
  FilterGenericGrade,
  FilterYear,
  FilterGradingCompany,
  FilterGrade,
  FilterBottomCheckboxes,
  FilterListedPrice,
} from './components';
import { IFilterProps } from './types';
import { CollapseFilters } from '@/shared/ui/Collapse';
import { FilterSidebarWrapper } from '@/shared/ui/Wrappers';

const FilterSideBarUI: FC<IFilterProps> = ({
  open,
  selectedFilter,
  changeSelectFilter,
  typePage,
}) => {
  const [countRenders, setCountRenders] = useState(0);

  const itemsFiltering = useMemo(() => {
    const items = [];

    if (
      typePage === 'allCards' ||
      typePage === 'profile' ||
      typePage === 'marketplace'
    )
      items.push({ component: FilterStatus, title: 'Status' });

    items.push({ component: FilterCategories, title: 'Card Category' });

    if (
      typePage === 'allCards' ||
      typePage === 'profile' ||
      typePage === 'marketplace' ||
      typePage === 'SealedBoxes'
    )
      items.push({
        component: FilterPrice,
        title: 'Insured value',
      });
    if (typePage === 'marketplace')
      items.push({
        component: FilterListedPrice,
        title: 'Listed price',
      });
    if (typePage !== 'SealedBoxes')
      items.push(
        { component: FilterGradingCompany, title: 'Grading Company' },
        { component: FilterGenericGrade, title: 'Generic Grade' },
        { component: FilterGrade, title: 'Grade' },
      );

    items.push({ component: FilterYear, title: 'Year' });

    return items;
  }, [typePage]);

  const currentClassName = useCallback(
    () => (!open && countRenders < 2 ? 'filterEmpty' : 'filterClose'),
    [countRenders, open],
  );

  useEffect(() => {
    // eslint-disable-next-line no-return-assign
    setCountRenders(prev => (prev += 1));
  }, [open]);

  return (
    <FilterSidebarWrapper open={open} className='filter-sidebar-open'>
      {itemsFiltering.map(
        item =>
          item && (
            <CollapseFilters
              key={item.title}
              open={item.title === 'Status'}
              disabled={item.title === 'Status'}
              title={item.title}
              classCollapse={
                item.title === 'Year' || item.title === 'Grade'
                  ? 'classCollapse'
                  : ''
              }
              className={
                item.title === 'Grade' || item.title === 'Year'
                  ? 'no-overflow'
                  : ''
              }
            >
              {createElement(item.component, {
                changeSelectFilter,
                selectedFilter,
                typePage,
              })}
            </CollapseFilters>
          ),
      )}
      {typePage !== 'SealedBoxes' && (
        <FilterBottomCheckboxes
          selectedFilter={selectedFilter}
          changeSelectFilter={changeSelectFilter}
          typePage={typePage}
        />
      )}
    </FilterSidebarWrapper>
  );
};

const FilterSideBar = memo(FilterSideBarUI);

export default FilterSideBar;
