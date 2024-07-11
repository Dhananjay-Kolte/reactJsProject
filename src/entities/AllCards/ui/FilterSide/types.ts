import { ISelectFilters } from '../../model/types/allCards';

export type IFilterProps = {
  open: boolean;
  selectedFilter: ISelectFilters;
  changeSelectFilter: (
    param: keyof ISelectFilters | 'page' | 'step' | 'search',
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void;
  typePage: TypesPage;
};
