import { ISelectFilters } from '../../../model/types/allCards';

export const selectFullValue = (
  value: boolean,
  typeField: keyof ISelectFilters,
) => (value ? typeField : '');

export const composeValues = (
  value1: string,
  value2: string,
  field: 'price' | 'year' | 'generic' | 'listedPrice',
) => {
  if (value1 !== '' && value2 === '') {
    if (field === 'price') return `from $${value1}`;
    if (field === 'listedPrice') return `from $${value1}`;
    if (field === 'year') return `year from ${value1}`;
    if (field === 'generic') return `generic grade from ${value1}`;
  }
  if (value1 === '' && value2 !== '') {
    if (field === 'price') return `to $${value2}`;
    if (field === 'listedPrice') return `to $${value2}`;
    if (field === 'year') return `year to ${value2}`;
    if (field === 'generic') return `generic grade to ${value2}`;
  }
  if (value1 !== '' && value2 !== '') {
    if (field === 'price') return `$${value1} - ${value2}`;
    if (field === 'listedPrice') return `$${value1} - ${value2}`;
    if (field === 'year') return `year: ${value1} - ${value2}`;
    if (field === 'generic') return `generic grade: ${value1} - ${value2}`;
  }
  return '';
};

const changeArrays = (
  value: string,
  param: keyof ISelectFilters,
  initArr: string[],
  changeSelectFilter: (
    param: keyof ISelectFilters,
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void,
) => {
  const temp = initArr.filter(item => item !== value);
  changeSelectFilter(param, temp, 'resetPage');
};

const conversionMinValue = (
  value: string,
  changeSelectFilter: (
    param: keyof ISelectFilters,
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void,
) => {
  if (value.startsWith('from')) changeSelectFilter('minPrice', '', 'resetPage');
  if (value.startsWith('from'))
    changeSelectFilter('listPriceMin', '', 'resetPage');
  if (value.startsWith('year')) changeSelectFilter('yearMin', '', 'resetPage');
  if (value.startsWith('generic'))
    changeSelectFilter('genericGradeMin', '', 'resetPage');
};

const conversionMaxValue = (
  value: string,
  changeSelectFilter: (
    param: keyof ISelectFilters,
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void,
) => {
  if (value.startsWith('to')) changeSelectFilter('maxPrice', '', 'resetPage');
  if (value.startsWith('to'))
    changeSelectFilter('listPriceMax', '', 'resetPage');
  if (value.startsWith('year')) changeSelectFilter('yearMax', '', 'resetPage');
  if (value.startsWith('generic'))
    changeSelectFilter('genericGradeMax', '', 'resetPage');
};

const conversionMinAndMaxValue = (
  value: string,
  changeSelectFilter: (
    param: keyof ISelectFilters,
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void,
) => {
  if (value.startsWith('$')) {
    changeSelectFilter('minPrice', '', 'resetPage');
    changeSelectFilter('maxPrice', '', 'resetPage');
    changeSelectFilter('listPriceMin', '', 'resetPage');
    changeSelectFilter('listPriceMax', '', 'resetPage');
  }

  if (value.startsWith('year:')) {
    changeSelectFilter('yearMin', '', 'resetPage');
    changeSelectFilter('yearMax', '', 'resetPage');
  }
  if (value.startsWith('generic grade:')) {
    changeSelectFilter('genericGradeMin', '', 'resetPage');
    changeSelectFilter('genericGradeMax', '', 'resetPage');
  }
};

const conversion = (
  value: string,
  changeSelectFilter: (
    param: keyof ISelectFilters,
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void,
) => {
  if (value.includes('from')) conversionMinValue(value, changeSelectFilter);
  if (value.includes('to')) conversionMaxValue(value, changeSelectFilter);
  conversionMinAndMaxValue(value, changeSelectFilter);
};

export const offFilter = (
  value: string,
  selectedFilter: ISelectFilters,
  changeSelectFilter: (
    param: keyof ISelectFilters,
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void,
) => {
  if (selectedFilter.status.includes(value))
    changeArrays(value, 'status', selectedFilter.status, changeSelectFilter);
  if (selectedFilter.gradingCompany.includes(value))
    changeArrays(
      value,
      'gradingCompany',
      selectedFilter.gradingCompany,
      changeSelectFilter,
    );
  if (selectedFilter.grade.includes(value))
    changeArrays(value, 'grade', selectedFilter.grade, changeSelectFilter);
  if (selectedFilter.categories.includes(value))
    changeArrays(
      value,
      'categories',
      selectedFilter.categories,
      changeSelectFilter,
    );
  if (value === 'autographed' || value === 'authenticated')
    changeSelectFilter(value, false, 'resetPage');

  conversion(value, changeSelectFilter);
};
