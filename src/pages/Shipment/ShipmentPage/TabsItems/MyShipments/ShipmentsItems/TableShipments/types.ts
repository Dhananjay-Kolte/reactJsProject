import { Dispatch, SetStateAction } from 'react';
import { IInboundShipmentTinyRadio } from '@/entities/InboundShipment';
import { IOutboundShipmentTinyRadio } from '@/entities/OutboundShipment';

export interface IShipmentRowsData {
  id: string;
  frontImage: string;
  itemName: string;
  insuredValue: string;
  status: string;
  category: string;
}

export type TAccessor =
  | 'id'
  | 'frontImage'
  | 'itemName'
  | 'insuredValue'
  | 'status'
  | 'category';

export interface ISortRows {
  order: 'desc' | 'asc';
  orderBy: TAccessor;
}
export interface IShipmentColumn {
  accessor: TAccessor;
  label: string;
}

export interface IShipmentTableProps {
  shipment: IShipmentInbound;
  typeTiny: IInboundShipmentTinyRadio;
}

export interface IOutboundShipmentTableProps {
  shipment: IShipmentOutbound;
  typeTiny: IOutboundShipmentTinyRadio;
}

export interface ITableHeaderProps {
  valueSearch: string;
  totalCount: number;
  setValueSearch: Dispatch<SetStateAction<string>>;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export interface IPaginationShipmentTable {
  activePage: number;
  count: number;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export interface ITableContentProps {
  columns: IShipmentColumn[];
  calculatedRows: ICard[];
  setSort: Dispatch<SetStateAction<ISortRows>>;
  rowsPerPage: number;
  handleOpenModalCard: (idCard: string) => void;
  count: number;
  outbound?: boolean;
}
