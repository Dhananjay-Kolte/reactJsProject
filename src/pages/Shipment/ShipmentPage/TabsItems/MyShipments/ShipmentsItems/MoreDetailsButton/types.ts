import { Dispatch, SetStateAction } from 'react';

export interface IMoreDetailsButtonProps {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}
