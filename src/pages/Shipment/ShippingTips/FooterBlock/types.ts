import { Dispatch, SetStateAction } from 'react';

export interface IFooterBlockProps {
  currentTip: number;
  setCurrentTip: Dispatch<SetStateAction<number>>;
  handleModalClose: () => void;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}
