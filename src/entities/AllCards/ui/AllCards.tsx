import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { AllCardsContent } from './AllCardsContent/AllCardsContent';
import {
  getInitialFiltersParams,
  clearOtherSortingFields,
  initialFilters,
} from './helpers';
import { getAllUserCards } from '../model/actions/allCardsActions';
import { clearAllUserCardsSlice } from '../model/slice/allCards';
import { ISelectFilters, TSort } from '../model/types/allCards';
import { getIsAuth } from '@/entities/Auth';
import {
  getIsLoadingAllCardsPage,
  getTotalAllCardsPage,
  getFindTotalAllCardsPage,
  getAllCardsPage,
} from '@/pages/AllCardsPage';
import {
  getTotalBurnedCardsPage,
  getAllBurnedCardsAction,
  getIsLoadingBurnedCardsPage,
  getFindTotalBurnedCardsPage,
  getAllBurnedCardsPage,
  getBurnIdBurnedCardsPage,
  clearAllBurnedCardsSlice,
} from '@/pages/BurnedCardsPage';
import {
  getAllMarketPlaceCards,
  getIsLoadingMarketplaceCardsPage,
  getTotalMarketplaceCardsPage,
  getFindTotalMarketplaceCardsPage,
  getAllMarketplaceCardsPage,
  clearAllMarketPlaceCardsSlice,
} from '@/pages/Marketplace';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { useDebounceValue } from '@/shared/lib/hooks/useDebounceValue';

export interface IAllCardsProps {
  typePage: TypesPage;
  publicWallet: string;
  className?: string;
  clearPage?: boolean;
  setClearPage?: Dispatch<SetStateAction<boolean>>;
  selectedCards?: string[] | [];
  selectCard?: (
    event: MouseEvent<HTMLButtonElement>,
    collectorIDProp: string,
  ) => void;
  cartCards?: ICard[] | [];
}

const AllCards: FC<IAllCardsProps> = memo(
  ({
    className,
    typePage,
    publicWallet,
    clearPage,
    setClearPage,
    selectedCards,
    selectCard,
    cartCards,
  }) => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const searchForParams = useMemo(
      () =>
        searchParams.get('search') && searchParams.get('search') !== null
          ? (searchParams.get('search') as string)
          : '',
      [searchParams],
    );

    const isLoadingAllCards = useAppSelector(getIsLoadingAllCardsPage);
    const isLoadingBurnedCard = useAppSelector(getIsLoadingBurnedCardsPage);
    const isLoadingMarketPlace = useAppSelector(
      getIsLoadingMarketplaceCardsPage,
    );
    const isAuth = useAppSelector(getIsAuth);

    const currentIsLoading = useMemo(() => {
      if (typePage === 'burned') return isLoadingBurnedCard;
      if (typePage === 'marketplace') return isLoadingMarketPlace;
      return isLoadingAllCards;
    }, [
      isLoadingAllCards,
      isLoadingBurnedCard,
      isLoadingMarketPlace,
      typePage,
    ]);

    const totalAllCards = useAppSelector(getTotalAllCardsPage);
    const totalBurnedCards = useAppSelector(getTotalBurnedCardsPage);
    const totalMarketPlace = useAppSelector(getTotalMarketplaceCardsPage);
    const currentTotal = useMemo(() => {
      if (typePage === 'burned') return totalBurnedCards;
      if (typePage === 'marketplace') return totalMarketPlace;
      return totalAllCards;
    }, [totalAllCards, totalBurnedCards, totalMarketPlace, typePage]);

    const findTotalAllCards = useAppSelector(getFindTotalAllCardsPage);
    const findTotalBurnedCard = useAppSelector(getFindTotalBurnedCardsPage);
    const findTotalMarketplace = useAppSelector(
      getFindTotalMarketplaceCardsPage,
    );
    const currentFindTotal = useMemo(() => {
      if (typePage === 'burned') return findTotalBurnedCard;
      if (typePage === 'marketplace') return findTotalMarketplace;
      return findTotalAllCards;
    }, [
      findTotalAllCards,
      findTotalBurnedCard,
      findTotalMarketplace,
      typePage,
    ]);

    const allCard = useAppSelector(getAllCardsPage);
    const allCardBurned = useAppSelector(getAllBurnedCardsPage);
    const allCardMarketPlace = useAppSelector(getAllMarketplaceCardsPage);
    const currentAllCards = useMemo(() => {
      if (typePage === 'burned') return allCardBurned;
      if (typePage === 'marketplace') return allCardMarketPlace;
      return allCard;
    }, [allCard, allCardBurned, allCardMarketPlace, typePage]);

    const burnId = useAppSelector(getBurnIdBurnedCardsPage);

    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<ISelectFilters>(
      getInitialFiltersParams(searchParams),
    );
    const [page, setPage] = useState('1');
    const [step, setStep] = useState('8');
    const [search, setSearch] = useState(searchForParams);
    const deferredSearch = useDebounceValue(search, 400);
    const changeSelectFilter = useCallback(
      (
        param: keyof ISelectFilters | 'page' | 'step' | 'search',
        value: (typeof selectedFilter)[keyof ISelectFilters] | string,
        resetPage: 'resetPage' | undefined,
      ) => {
        console.log('page--->',page);
        console.log('value---->',value);
        console.log("param--->",param);
        setSelectedFilter((prev: ISelectFilters) =>
          resetPage === 'resetPage'
            ? { ...prev, page: '1', [param]: value }
            : { ...prev, [param]: value },
        );
        if (param === 'page') setPage(value as string);
        if (param === 'step') setStep(value as string);
        if (param === 'search') setSearch(value as string);

        if (typeof value === 'string' || typeof value === 'boolean')
          if (value)
            param === 'page' || param === 'step'
              ? null
              : searchParams.set(param, `${value}`);
          else searchParams.delete(param);

        if (typeof value === 'object')
          value.length > 0
            ? searchParams.set(param, `${value}`)
            : searchParams.delete(param);
        setSearchParams(searchParams);
        if (resetPage === 'resetPage') {
          setPage('1');
          if (typePage === 'allCards' || typePage === 'profile')
            dispatch(clearAllUserCardsSlice());
          if (typePage === 'burned') dispatch(clearAllBurnedCardsSlice());
          if (typePage === 'marketplace')
            dispatch(clearAllMarketPlaceCardsSlice());
        }
        if (param === 'orderBy')
          clearOtherSortingFields(value as TSort, setSelectedFilter);
      },
      [dispatch, searchParams, setSearchParams, typePage],
    );

    const onClearFilter = useCallback(() => {
      setIsScroll(false);
      setSelectedFilter(initialFilters);
      setPage('1');
      setStep('8');
      setSearch('');
      setSearchParams({});
      if (typePage === 'allCards' || typePage === 'profile')
        dispatch(clearAllUserCardsSlice());
      if (typePage === 'burned') dispatch(clearAllBurnedCardsSlice());
      if (typePage === 'marketplace') dispatch(clearAllMarketPlaceCardsSlice());
    }, [dispatch, setSearchParams, typePage]);

    useEffect(() => {
      if (publicWallet && (typePage === 'allCards' || typePage === 'profile')) {
        dispatch(
          getAllUserCards({
            clear: page === '1' || clearPage ? 'clear' : undefined,
            filters: selectedFilter,
            page,
            search: deferredSearch,
            step,
            wallet: publicWallet,
          }),
        );
        setClearPage && setClearPage(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      dispatch,
      page,
      deferredSearch,
      selectedFilter,
      step,
      publicWallet,
      setClearPage,
      isAuth,
    ]);

    useEffect(() => {
      if (burnId && typePage === 'burned')
        dispatch(
          getAllBurnedCardsAction({
            burnId,
            clear: page === '1' ? 'clear' : undefined,
            filters: selectedFilter,
            page,
            search: deferredSearch,
            step,
          }),
        );

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [burnId, dispatch, publicWallet, page, search, selectedFilter, step]);

    useEffect(() => {
      if (typePage === 'marketplace')
        dispatch(
          getAllMarketPlaceCards({
            clear: page === '1' ? 'clear' : undefined,
            filters: selectedFilter,
            page,
            search: deferredSearch,
            step,
          }),
        );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, page, deferredSearch, publicWallet, selectedFilter, step]);

    console.log("currentAllCards---->",currentAllCards);

    return (
      <AllCardsContent
        clearFilterFunction={onClearFilter}
        changeSelectFilter={changeSelectFilter}
        cards={currentAllCards}
        publicWallet={publicWallet}
        typePage={typePage}
        selectedFilter={selectedFilter}
        isLoading={currentIsLoading}
        total={currentTotal}
        findTotal={currentFindTotal}
        isScroll={isScroll}
        setIsScroll={setIsScroll}
        step={step}
        search={search}
        setSearch={setSearch}
        page={page}
        setPage={setPage}
        selectedCards={selectedCards}
        selectCard={selectCard}
        cartCards={cartCards}
      />
    );
  },
);

export default AllCards;
