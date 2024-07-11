import { FC } from 'react';
import { ITableHeaderProps } from './types';
import { Cross, SearchIconSVG } from '@/shared/assets/svg';
import { IconButton } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Inputs';

const TableHeader: FC<ITableHeaderProps> = ({
  valueSearch,
  setValueSearch,
  setActivePage,
  totalCount,
}) => {
  const changeActivePage = () => {
    setActivePage(1);
  };

  return (
    <div className='table-shipment__header'>
      <div className='table-shipment__header__list'>
        <h4>List of items</h4>
        <div className='table-shipment__header__list__circle'>
          <p>{totalCount}</p>
        </div>
      </div>
      <div className='table-shipment__enter'>
        <Input
          value={valueSearch}
          type='search'
          placeholder='Search Cards by Name'
          endIcon={
            <IconButton
              circle
              size='32'
              aria-label='toggle password visibility'
              onClick={() =>
                valueSearch !== '' ? setValueSearch('') : changeActivePage()
              }
            >
              {valueSearch !== '' ? <Cross /> : <SearchIconSVG />}
            </IconButton>
          }
          onChange={setValueSearch}
        />
      </div>
    </div>
  );
};

export default TableHeader;
