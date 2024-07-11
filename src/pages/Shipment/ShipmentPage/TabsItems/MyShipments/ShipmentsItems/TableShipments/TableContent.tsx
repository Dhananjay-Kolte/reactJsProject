import { FC } from 'react';
import { handleSort, viewContentRow } from './helpers';
import { ITableContentProps } from './types';
import { SortIconSVG } from '@/shared/assets/svg/miniButtons';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { IconButton } from '@/shared/ui/Buttons';
import { Spinner } from '@/shared/ui/Loaders';

const TableContent: FC<ITableContentProps> = ({
  columns,
  calculatedRows,
  setSort,
  handleOpenModalCard,
  count,
  outbound,
}) => {
  const { isLoadingCards } = useAppSelector(state => state.cards);

  return (
    <div className='table-content-shipment'>
      <div className='table-content-shipment__th'>
        {columns.map(column => {
          const { accessor, label } = column;
          return (
            <div
              key={accessor}
              className={`table-content-shipment__th__${accessor}`}
            >
              <div>{label}</div>
              {accessor !== 'frontImage' && (
                <IconButton
                  size='16'
                  onClick={() => handleSort(accessor, setSort)}
                >
                  <SortIconSVG width='12' height='12' />
                </IconButton>
              )}
            </div>
          );
        })}
      </div>
      {isLoadingCards ? (
        <div className='table-content-shipment__loader'>
          <Spinner />
        </div>
      ) : (
        <div className='table-content-shipment__tb'>
          {count > 0 && calculatedRows.length > 0 ? (
            calculatedRows.map(row => (
              <div
                key={row.id}
                className='table-content-shipment__tb__row'
                onClick={() => handleOpenModalCard(row.id)}
              >
                {columns.map(column => (
                  <div
                    key={column.accessor}
                    className={`table-content-shipment__tb__row__${column.accessor}`}
                  >
                    {viewContentRow(column.accessor, row, outbound)}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className='table-content-shipment__tb__empty-table'>
              <p>Not found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TableContent;
