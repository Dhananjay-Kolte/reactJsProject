import { Dispatch, SetStateAction } from 'react';

export interface ICardBurnSelectionProps {
  selectedCards: [] | string[];
  setSelectedCards: Dispatch<React.SetStateAction<string[] | []>>;
  isAllCardsSelecting: boolean;
  setIsAllCardsSelecting: Dispatch<SetStateAction<boolean>>;
}
