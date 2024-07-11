import { ICardProps } from '../types';

export interface ICardHoverPanelProps
  extends Pick<
    ICardProps,
    | 'selectCard'
    | 'selectedCards'
    | 'cartCards'
    | 'showSocials'
    | 'shareSocial'
    | 'closeSocialsOnBlur'
  > {
  id: string;
}
