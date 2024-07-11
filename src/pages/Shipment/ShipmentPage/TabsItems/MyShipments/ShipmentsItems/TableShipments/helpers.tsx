import { IShipmentColumn, ISortRows, TAccessor } from './types';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';
import { getCurrentSizeImageInTable } from '@/shared/lib/helpers/getCurrentSizeImageInTable/getCurrentSizeImageInTable';
import { Status } from '@/shared/ui/Statuses';

export const filterRows = (rows: ICard[], filters: string) => {
  if (filters === '') return rows;
  return rows.filter(row =>
    row.itemName.toLowerCase().includes(filters.toLowerCase()),
  );
};

export const sortRows = (filteredRows: ICard[], sort: ISortRows) =>
  filteredRows.sort((a, b) => {
    const { order, orderBy } = sort;

    return order === 'asc'
      ? a[orderBy].localeCompare(b[orderBy], 'en', { numeric: false })
      : b[orderBy].localeCompare(a[orderBy], 'en', { numeric: false });
  });

export const handleSort = (
  accessor: TAccessor,
  setSort: (value: React.SetStateAction<ISortRows>) => void,
) => {
  setSort(prevSort => ({
    order:
      prevSort.order === 'asc' && prevSort.orderBy === accessor
        ? 'desc'
        : 'asc',
    orderBy: accessor,
  }));
};

export const paginateRows = (
  sortedRows: ICard[],
  activePage: number,
  rowsPerPage: number,
) =>
  [...sortedRows].slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage,
  );

export const columnsTable: IShipmentColumn[] = [
  { accessor: 'frontImage', label: 'IMAGE' },
  { accessor: 'itemName', label: 'NAME' },
  { accessor: 'category', label: 'CATEGORY' },
  { accessor: 'insuredValue', label: 'VALUE' },
  { accessor: 'id', label: 'Number' },
  { accessor: 'status', label: 'STATUS' },
];

export const viewContentRow = (
  accessor: TAccessor,
  row: ICard,
  burn = false,
) => {
  const { id, itemName, insuredValue, status, category, images, orientation } =
    row;
  const errorStatus = status === 'Rejected' || status === 'RequestedBack';
  const colorError = errorStatus ? '#FF9900' : '#dfe0e1';

  const { height, width } = getCurrentSizeImageInTable(orientation);

  if (accessor === 'id') return <p style={{ color: colorError }}>{id}</p>;
  if (accessor === 'itemName')
    return <p style={{ color: colorError }}>{itemName}</p>;
  if (accessor === 'insuredValue')
    return (
      <p style={{ color: colorError }}>{`$ ${convertNumberInK(
        insuredValue,
      )}`}</p>
    );
  if (accessor === 'status')
    return <Status status={burn ? 'Burned' : (status as IStatusCards)} />;
  if (accessor === 'category')
    return <p style={{ color: colorError }}>{category}</p>;
  return (
    <div
      className='table-content-shipment__tb__row__frontImage__wrapper'
      style={{
        border: errorStatus ? '1px solid #FF9900' : '',
        borderRadius: errorStatus ? '0.5rem' : '',
      }}
    >
      <img
        src={images ? images.frontS : ''}
        alt='card'
        width={width}
        height={height}
        loading='lazy'
      />
    </div>
  );
};
