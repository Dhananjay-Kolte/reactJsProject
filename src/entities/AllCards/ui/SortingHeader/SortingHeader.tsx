import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './sortingHeader.scss';
import { defaultSort, getSortItem, nameInValue, valueInName } from './helpers';
import { reloadAllCardsAction } from '../../model/actions/allCardsActions';
import { IFilterItemsProps } from '../FilterSide/components/types';
import { CardsView } from '@/features/CardsView';
import { OpenFilterSidebar } from '@/features/OpenFilterSidebar';
import { RefreshMetadata } from '@/features/RefreshMetadata';
import { Cross, SearchIconSVG } from '@/shared/assets/svg';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { SwitchButton, IconButton } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Inputs';
import { Select } from '@/shared/ui/Popovers';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

interface ISortingHeaderProps extends IFilterItemsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  typeContent: CardsView;
  setTypeContent: Dispatch<SetStateAction<CardsView>>;
  searchValue: string;
  setSearch: Dispatch<SetStateAction<string>>;
  wallet: string;
  pageValue: string;
  setPageValue: Dispatch<SetStateAction<string>>;
  stepValue: string;
}

const SortingHeaderUI: FC<ISortingHeaderProps> = ({
  selectedFilter,
  changeSelectFilter,
  open,
  setOpen,
  typeContent,
  setTypeContent,
  searchValue,
  setSearch,
  wallet,
  setPageValue,
  stepValue,
  typePage,
  pageValue,
}) => {
  const dispatch = useAppDispatch();
  const sortItems = useMemo(() => getSortItem(typePage), [typePage]);
  const [selectSort, setSelectSort] = useState<string>(defaultSort(typePage));
  const [hideOwnedLocal, setHideOwnedLocal] = useState(
    selectedFilter.hideOwned,
  );

  const currentMinWidthForSelect = useMemo(() => {
    if (typePage === 'allCards') return 19;
    if (typePage === 'burned') return 24.5;
    return 18.5;
  }, [typePage]);

  const addSort = useCallback(
    (value: string) => {
      if (typeof value === 'string') {
        setSelectSort(valueInName(value, typePage));
        changeSelectFilter('orderBy', nameInValue(value), 'resetPage');
      }
    },
    [changeSelectFilter, typePage],
  );

  const handleView = (typeView: CardsView) => {
    setTypeContent(typeView);
    changeSelectFilter('step', '8', 'resetPage');
  };

  const handleSwitcher = (event: ChangeEvent<HTMLInputElement>) =>
    changeSelectFilter('hideOwned', event.target.checked, 'resetPage');

  useEffect(() => {
    selectedFilter.orderBy
      ? setSelectSort(valueInName(selectedFilter.orderBy, typePage))
      : setSelectSort(defaultSort(typePage));
  }, [selectedFilter.orderBy, typePage]);

  return (
    <div className='sorting-header'>
      <OpenFilterSidebar open={open} onOpen={() => setOpen(!open)} />
      <div className='sorting-header__search'>
        <Input
          value={searchValue}
          type='search'
          placeholder='Search Cards by Name'
          endIcon={
            <IconButton
              circle
              size='32'
              aria-label='toggle password visibility'
              onClick={() =>
                searchValue !== ''
                  ? changeSelectFilter('search', '', 'resetPage')
                  : changeSelectFilter('search', searchValue, 'resetPage')
              }
            >
              {searchValue !== '' ? <Cross /> : <SearchIconSVG />}
            </IconButton>
          }
          onChange={setSearch}
        />
      </div>
      <div className='sorting-header__selectedSort'>
        <Select
          value={selectSort}
          items={sortItems}
          minWidth={'15rem'}
          onChange={addSort}
        />
      </div>
      <CardsView view={typeContent} onChangeView={handleView} />
      {typePage === 'marketplace' && (
        <div className='sorting-header__switcher'>
          <SwitchButton
            text='Hide Owned'
            value={hideOwnedLocal}
            setValue={setHideOwnedLocal}
            onChange={handleSwitcher}
          />
        </div>
      )}
    </div>
  );
};

const SortingHeader = memo(SortingHeaderUI);
export default SortingHeader;
