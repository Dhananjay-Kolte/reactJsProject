import { FC } from 'react';
import { IPaginationShipmentTable } from './types';
import { LeftSliderSVG, RightSliderSVG } from '@/shared/assets/svg/miniButtons';
import { IconButton } from '@/shared/ui/Buttons';
import { Select } from '@/shared/ui/Popovers';

const Pagination: FC<IPaginationShipmentTable> = ({
  activePage,
  count,
  rowsPerPage,
  setRowsPerPage,
  totalPages,
  setActivePage,
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  const handleChange = (value: string) => {
    setRowsPerPage(+value);
    setActivePage(1);
  };
  return (
    <div className='table-shipment__pagination'>
      <div className='table-shipment__pagination__block left'>
        <p>Rows per page:</p>
        <Select
          size='small'
          minWidth='3.5'
          value={`${rowsPerPage}`}
          className='table-shipment__pagination__block__popover'
          classNameInput='table-shipment__pagination__block__select'
          items={[
            { content: '10', value: '10' },
            { content: '20', value: '20' },
            { content: '50', value: '50' },
          ]}
          onChange={handleChange}
        />
      </div>
      <div className='table-shipment__pagination__block right'>
        <div className='table-shipment__pagination__block__items'>
          <p>
            {beginning === end
              ? end
              : `${beginning} - ${end >= count ? count : end}`}
          </p>
          <p>of {count} items</p>
        </div>
        <div className='table-shipment__pagination__block arrow'>
          <IconButton
            disabled={activePage === 1}
            onClick={() => setActivePage(activePage - 1)}
          >
            <LeftSliderSVG />
          </IconButton>
          <IconButton
            disabled={activePage === totalPages || end >= count}
            onClick={() => setActivePage(activePage + 1)}
          >
            <RightSliderSVG />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
