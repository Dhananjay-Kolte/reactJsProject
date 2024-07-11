import { Dispatch, SetStateAction } from 'react';

export interface ITransferModalCardsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onMint: () => void;
}

export interface IContentItemsProps
  extends Pick<ITransferModalCardsProps, 'onMint'> {
  handleModalClose: () => void;
  success?: boolean;
}
