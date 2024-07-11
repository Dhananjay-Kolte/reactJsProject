import { ICardProps } from '../types';

export type IBurnedCardHoverProps = Pick<
  ICardProps,
  'showSocials' | 'shareSocial'
> & {
  address: string;
};
