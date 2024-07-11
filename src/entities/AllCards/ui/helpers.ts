import { Dispatch } from 'react';
import { ISelectFilters, TSort } from '../model/types/allCards';

export const getInitialFiltersParams = (
  searchParams: URLSearchParams,
): ISelectFilters => {
  const statusParams = searchParams.get('status') as string;
  const categoriesParams = searchParams.get('categories') as string;
  const gradingCompanyParams = searchParams.get('gradingCompany') as string;
  const gradeParams = searchParams.get('grade') as string;
  return {
    authenticated: searchParams.get('authenticated')
      ? Boolean(searchParams.get('authenticated'))
      : false,
    autographed: searchParams.get('autographed')
      ? Boolean(searchParams.get('autographed'))
      : false,
    categories: categoriesParams ? categoriesParams.split(',') : [],
    genericGradeMax: searchParams.get('genericGradeMax')
      ? (searchParams.get('genericGradeMax') as string)
      : '',
    genericGradeMin: searchParams.get('genericGradeMin')
      ? (searchParams.get('genericGradeMin') as string)
      : '',
    grade: gradeParams ? gradeParams.split(',') : [],
    gradingCompany: gradingCompanyParams ? gradingCompanyParams.split(',') : [],
    hideOwned: searchParams.get('hideOwned')
      ? Boolean(searchParams.get('hideOwned'))
      : false,
    listPriceMax: searchParams.get('listPriceMax')
      ? (searchParams.get('listPriceMax') as string)
      : '',
    listPriceMin: searchParams.get('listPriceMin')
      ? (searchParams.get('listPriceMin') as string)
      : '',

    maxPrice: searchParams.get('maxPrice')
      ? (searchParams.get('maxPrice') as string)
      : '',
    minPrice: searchParams.get('minPrice')
      ? (searchParams.get('minPrice') as string)
      : '',

    orderBy: searchParams.get('orderBy')
      ? (searchParams.get('orderBy') as TSort)
      : '',
    status: statusParams ? statusParams.split(',') : [],
    typeCurrency: 'USD',
    yearMax: searchParams.get('yearMax')
      ? (searchParams.get('yearMax') as string)
      : '',
    yearMin: searchParams.get('yearMin')
      ? (searchParams.get('yearMin') as string)
      : '',
  };
};

export const initialFilters = (): ISelectFilters => ({
  authenticated: false,
  autographed: false,
  categories: [],
  genericGradeMax: '',
  genericGradeMin: '',
  grade: [],
  gradingCompany: [],
  hideOwned: false,
  listPriceMax: '',
  listPriceMin: '',
  maxPrice: '',
  minPrice: '',
  orderBy: '',
  status: [],
  typeCurrency: 'USD',
  yearMax: '',
  yearMin: '',
});

export const clearOtherSortingFields = (
  param: TSort,
  setSelectedFilter: Dispatch<React.SetStateAction<ISelectFilters>>,
) => {
  setSelectedFilter((prev: ISelectFilters) => ({
    ...prev,
    orderBy: param,
  }));
};
