import { Dispatch, SetStateAction } from 'react';
import { ISelectFilters } from '../../../model/types/allCards';

export interface IFilterSelectProps {
  isFiltering: boolean;
  filters: string[];
  onClearFilter: () => void;
}

export interface IFilterItemsProps {
  changeSelectFilter: (
    param: keyof ISelectFilters,
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void;
  onClearFilter: () => void;
  selectedFilter: ISelectFilters;
}

export interface ISkeletonProps {
  page: string;
  changeSelectFilter: (
    param: keyof ISelectFilters | 'search' | 'step' | 'page',
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void;
  setIsScroll: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  total: number;
}
