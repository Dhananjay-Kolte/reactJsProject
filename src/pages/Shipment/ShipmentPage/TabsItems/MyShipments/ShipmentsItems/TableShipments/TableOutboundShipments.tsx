import { FC, useEffect, useState } from 'react';
import './tableOutboundShipments.scss';
import { CardModal } from './CardModal/CardModal';
import Pagination from './Pagination';
import TableContent from './TableContent';
import TableHeader from './TableHeader';
import { columnsTable } from './helpers';
import { IOutboundShipmentTableProps, ISortRows } from './types';
import {
  getCardAction,
  getAllCardsInShipmentAction,
} from '@/entities/AllCards';
import { useAppDispatch } from '@/shared/lib/hooks/redux';

const TableOutboundShipments: FC<IOutboundShipmentTableProps> = ({
  shipment,
  typeTiny,
}) => {
  const dispatch = useAppDispatch();

  const allCardsTemp = shipment.cards?.cards ? [...shipment.cards.cards] : [];

  const [valueSearch, setValueSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openModalCard, setOpenModalCard] = useState(false);
  const handleOpenModalCard = (idCard: string) => {
    dispatch(getCardAction(idCard));
    setOpenModalCard(true);
  };

  const [sort, setSort] = useState<ISortRows>({
    order: 'asc',
    orderBy: 'itemName',
  });

  useEffect(() => {
    dispatch(
      getAllCardsInShipmentAction({
        fields: { page: activePage, search: valueSearch, step: rowsPerPage },
        shipmentId: shipment.id,
        typeShipment: 'outbound',
        typeTiny,
      }),
    );
  }, [activePage, dispatch, rowsPerPage, shipment.id, typeTiny, valueSearch]);

  return (
    <div className='table-shipment'>
      <TableHeader
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
        setActivePage={setActivePage}
        totalCount={shipment.cards?.totalCount ? shipment.cards?.totalCount : 0}
      />
      <TableContent
        outbound
        columns={columnsTable}
        calculatedRows={allCardsTemp}
        setSort={setSort}
        rowsPerPage={rowsPerPage}
        handleOpenModalCard={handleOpenModalCard}
        count={shipment.cards?.totalCount ? shipment.cards?.totalCount : 0}
      />
      {!!shipment.cards && shipment.cards?.totalCount > 0 && (
        <Pagination
          activePage={activePage}
          count={shipment.cards?.findCount ? shipment.cards?.findCount : 0}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={shipment.cards?.findCount ? shipment.cards?.findCount : 0}
          setActivePage={setActivePage}
        />
      )}
      <CardModal
        typeOfModal='outbound'
        typeModal='shipment'
        open={openModalCard}
        setOpen={setOpenModalCard}
      />
    </div>
  );
};

export default TableOutboundShipments;
