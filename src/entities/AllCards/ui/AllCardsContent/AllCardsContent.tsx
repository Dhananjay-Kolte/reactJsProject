import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from 'react';
import '../AllCards.scss';
import { ISelectFilters } from '../../model/types/allCards';
import FilterSideBar from '../FilterSide/FilterSideBar';
import GroupsCards from '../GroupCards/GroupsCards';
import {
  NoDataWithFilter,
  Nodata,
  FiltersSelect,
  Skeletons,
} from '../GroupCards/components';
import NoDataPublicPage from '../GroupCards/components/NoDataPublicPage';
import ListCards from '../ListCards/ListCards';
import SortingHeader from '../SortingHeader/SortingHeader';
import { getAuthData, getAuthIsLoading } from '@/entities/Auth';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { useOpenAnimate } from '@/shared/lib/hooks/useOpenAnimate/useOpenAnimate';
import { Spinner } from '@/shared/ui/Loaders';
import { HStack } from '@/shared/ui/Stack';

export interface IAllCardsContentProps {
  className?: string;
  clearFilterFunction: () => void;
  changeSelectFilter: (
    param: keyof ISelectFilters | 'page' | 'step' | 'search',
    value: string | boolean | string[] | undefined,
    resetPage: 'resetPage' | undefined,
  ) => void;
  cards: ICard[];
  publicWallet?: string;
  selectedCards?: string[] | [];
  selectCard?: (
    event: MouseEvent<HTMLButtonElement>,
    collectorIDProp: string,
  ) => void;
  cartCards?: ICard[] | [];
  typePage: TypesPage;
  selectedFilter: ISelectFilters;
  isLoading: boolean;
  total: number;
  findTotal: number;
  isScroll: boolean;
  setIsScroll: Dispatch<SetStateAction<boolean>>;
  step: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

export const AllCardsContent: FC<IAllCardsContentProps> = memo(
  ({
    className,
    clearFilterFunction,
    changeSelectFilter,
    cards,
    publicWallet,
    selectCard,
    selectedCards,
    cartCards,
    typePage,
    selectedFilter,
    isLoading,
    total,
    findTotal,
    isScroll,
    setIsScroll,
    step,
    search,
    setSearch,
    page,
    setPage,
  }) => {
    const [typeContent, setTypeContent] = useState<'groups' | 'table'>(
      'groups',
    );
    const [openFilterSaid, setOpenFilterSaid] = useState<boolean>(false);
    const openFilter = useOpenAnimate(openFilterSaid, 300);
    const isLoadingProfile = useAppSelector(getAuthIsLoading);
    const { wallet: currentUserWallet } = useAppSelector(getAuthData);
    const selectViewCards = useCallback(
      (type: 'groups' | 'table') => {
        if (type === 'groups')
          return (
            <GroupsCards
              cards={cards}
              selectedCards={selectedCards}
              selectCard={selectCard}
              isScroll={isScroll}
              cartCards={cartCards}
              typePage={typePage}
            />
          );

        return (
          <ListCards
            filteredCards={cards}
            selectedCards={selectedCards}
            selectCard={selectCard}
            typePage={typePage}
            page={page}
            changeSelectFilter={changeSelectFilter}
            setIsScroll={setIsScroll}
            isLoading={isLoading}
            total={total}
            findTotal={findTotal}
          />
        );
      },
      [
        cards,
        cartCards,
        changeSelectFilter,
        findTotal,
        isLoading,
        isScroll,
        page,
        selectCard,
        selectedCards,
        setIsScroll,
        total,
        typePage,
      ],
    );

    const renderMainContent = useCallback(() => {
      if (cards?.length) return selectViewCards(typeContent);
      if (!cards?.length && total && !isLoading) return <NoDataWithFilter />;
      if (!total && !findTotal && !isLoading)
        return <Nodata withButtons={publicWallet === currentUserWallet} />;
      if (typePage === 'profile' && !cards?.length && !isLoading)
        return <NoDataPublicPage />;
    }, [
      cards?.length,
      findTotal,
      total,
      isLoading,
      selectViewCards,
      typeContent,
      typePage,
      currentUserWallet,
      publicWallet,
    ]);

    return (
      <div className='all-cards'>
        <SortingHeader
          selectedFilter={selectedFilter}
          searchValue={search}
          setSearch={setSearch}
          wallet={publicWallet || ''}
          pageValue={page}
          setPageValue={setPage}
          stepValue={step}
          changeSelectFilter={changeSelectFilter}
          open={openFilterSaid}
          setOpen={setOpenFilterSaid}
          typeContent={typeContent}
          setTypeContent={setTypeContent}
          typePage={typePage}
        />
        {(isLoading && !openFilterSaid && !isScroll) || isLoadingProfile ? (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              height: '50vh',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Spinner />
          </div>
        ) : (
          <HStack max gap={1} align='start'>
            {!!openFilter && (
              <FilterSideBar
                open={openFilterSaid}
                selectedFilter={selectedFilter}
                changeSelectFilter={changeSelectFilter}
                typePage={typePage}
              />
            )}
            <div className='all-cards__cards__GroupsCard-main'>
              <FiltersSelect
                changeSelectFilter={changeSelectFilter}
                selectedFilter={selectedFilter}
                onClearFilter={clearFilterFunction}
              />
              <div>{renderMainContent()}</div>
              {findTotal > cards?.length && typeContent === 'groups' && (
                <Skeletons
                  page={page}
                  changeSelectFilter={changeSelectFilter}
                  setIsScroll={setIsScroll}
                  isLoading={isLoading}
                  total={total}
                />
              )}
            </div>
          </HStack>
        )}
      </div>
    );
  },
);
