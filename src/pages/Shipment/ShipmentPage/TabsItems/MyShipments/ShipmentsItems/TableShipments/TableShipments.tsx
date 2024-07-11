import { FC, useEffect, useMemo, useState } from 'react';
import './tableShipments.scss';
import { CardModal } from './CardModal/CardModal';
import Pagination from './Pagination';
import TableContent from './TableContent';
import TransferModalCards from './TransferModalCards/TransferModalCards';
import { columnsTable, paginateRows, sortRows } from './helpers';
import { IShipmentTableProps, ISortRows } from './types';
import {
  getCardAction,
  getAllCardsInShipmentAction,
} from '@/entities/AllCards';
import {
  getInfoMintInboundShipments,
  mintedInboundShipmentAction,
} from '@/entities/InboundShipment';
import { Cross, SearchIconSVG } from '@/shared/assets/svg';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { IconButton } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Inputs';

const TableShipments: FC<IShipmentTableProps> = ({ shipment, typeTiny }) => {
  const dispatch = useAppDispatch();
  const { transferShipmentsIds } = useAppSelector(getInfoMintInboundShipments);

  const [valueSearch, setValueSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openModalCard, setOpenModalCard] = useState(false);
  const handleOpenModalCard = (idCard: string) => {
    dispatch(getCardAction(idCard));
    setOpenModalCard(true);
  };

  const [openModalMint, setOpenModalMint] = useState(false);

  const [sort, setSort] = useState<ISortRows>({
    order: 'asc',
    orderBy: 'itemName',
  });
  const sortedRows = useMemo(() => {
    const allCards = shipment.cards?.cards ? [...shipment.cards.cards] : [];
    return sortRows(allCards, sort);
  }, [shipment.cards?.cards, sort]);
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const flagInPast =
    shipment.status === 'FullyMinted' ||
    transferShipmentsIds.includes(shipment.id);

  const changeActivePage = () => {
    setActivePage(1);
  };

  const mintCards = () => {
    dispatch(mintedInboundShipmentAction(shipment.id));
  };

  useEffect(() => {
    dispatch(
      getAllCardsInShipmentAction({
        fields: { page: 0, search: valueSearch, step: 0 },
        shipmentId: shipment.id,
        typeShipment: 'inbound',
        typeTiny,
      }),
    );
  }, [dispatch, shipment.id, typeTiny, valueSearch]);

  return (
    <div className='table-shipment'>
      <div className='table-shipment__header'>
        <div className='table-shipment__header__list'>
          <h4>List of items</h4>
          <div className='table-shipment__header__list__circle'>
            <p>{shipment.cards?.findCount}</p>
          </div>
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
      <TableContent
        columns={columnsTable}
        calculatedRows={calculatedRows}
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
      <TransferModalCards
        open={openModalMint}
        setOpen={setOpenModalMint}
        onMint={mintCards}
      />
    </div>
  );
};

export default TableShipments;
