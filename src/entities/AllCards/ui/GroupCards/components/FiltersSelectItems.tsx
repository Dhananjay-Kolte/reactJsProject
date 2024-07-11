import { FC, memo, useMemo } from 'react';
import '../groupsCards.scss';
import { composeValues, selectFullValue, offFilter } from './helpers';
import { IFilterItemsProps } from './types';
import { CloseWhiteSVG } from '@/shared/assets/svg/buttons';
import { IconButton, Button } from '@/shared/ui/Buttons';

const FiltersSelectUI: FC<IFilterItemsProps> = ({
  onClearFilter,
  selectedFilter,
  changeSelectFilter,
}) => {
  const filters = useMemo(
    () => [
      ...selectedFilter.status,
      ...selectedFilter.gradingCompany,
      ...selectedFilter.grade,
      ...selectedFilter.categories,
      composeValues(selectedFilter.minPrice, selectedFilter.maxPrice, 'price'),
      composeValues(
        selectedFilter.listPriceMin,
        selectedFilter.listPriceMax,
        'listedPrice',
      ),
      composeValues(
        selectedFilter.genericGradeMin,
        selectedFilter.genericGradeMax,
        'generic',
      ),
      composeValues(selectedFilter.yearMin, selectedFilter.yearMax, 'year'),
      selectFullValue(selectedFilter.autographed, 'autographed'),
      selectFullValue(selectedFilter.authenticated, 'authenticated'),
    ],
    [selectedFilter],
  );

  return filters.every(el => el === '') ? null : (
    <div className='Items-filter' style={{ color: '#dfe0e1' }}>
      <div className='Items-filter-groups'>
        {filters.map((select, i) =>
          select && select !== '' ? (
            <div key={i} className='Items-filter-select'>
              <p>{select.toUpperCase()}</p>
              <IconButton
                onClick={() =>
                  offFilter(select, selectedFilter, changeSelectFilter)
                }
              >
                <CloseWhiteSVG />
              </IconButton>
            </div>
          ) : null,
        )}
      </div>
      <Button
        typeButton='ghost'
        text='clear all'
        size='small'
        onClick={onClearFilter}
      />
    </div>
  );
};
const FiltersSelect = memo(FiltersSelectUI);
export default FiltersSelect;
