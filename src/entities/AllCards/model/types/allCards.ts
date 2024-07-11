export interface AllCardsSchema {
  isLoading: boolean;
  data?: any;
  error?: string;
}

export type TSort =
  | 'nameAsc'
  | 'nameDesc'
  | 'priceAsc'
  | 'priceDesc'
  | 'dateAsc'
  | 'dateDesc'
  | 'yearAsc'
  | 'yearDesc'
  | '';

export interface ISelectFilters {
  status: string[];
  minPrice: string;
  maxPrice: string;
  listPriceMin: string;
  listPriceMax: string;
  categories: string[];
  gradingCompany: string[];
  genericGradeMin: string;
  genericGradeMax: string;
  grade: string[];
  autographed: boolean;
  authenticated: boolean;
  orderBy: TSort;
  yearMin: string;
  yearMax: string;
  typeCurrency?: string;
  hideOwned: boolean;
}
