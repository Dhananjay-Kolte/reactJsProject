import { FC, memo, MouseEvent } from 'react';
import { roundNumber, selectPrice } from '../helpers';
import { LightningSVG } from '@/shared/assets/svg';
import '../Card/card.scss';

interface IBuyNowHoverProps {
  card: ICard;
  typePage?: TypesPage;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const BuyNowHoverUI: FC<IBuyNowHoverProps> = ({ card, typePage, onClick }) => (
  <div className='buy-now' onClick={onClick}>
    <div className='buy-now__button'>
      <LightningSVG width='16px' height='16px' fill='#2EF098' />
      <p>Buy now</p>
    </div>
    <div className='buy-now__insurance__wrapper'>
      {!!typePage && selectPrice(typePage, card.listing)}
      {!!typePage && roundNumber(typePage, card)}
    </div>
  </div>
);
const BuyNowHover = memo(BuyNowHoverUI);
export default BuyNowHover;
