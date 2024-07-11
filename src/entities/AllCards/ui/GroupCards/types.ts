import { MouseEvent } from 'react';

export interface IRowsProps {
  cards: ICard[];
  isScroll: boolean;
  selectedCards?: string[] | [];
  selectCard?: (e: MouseEvent<HTMLButtonElement>, id: string) => void;
  cartCards?: ICard[] | [];
  typePage: TypesPage;
}
