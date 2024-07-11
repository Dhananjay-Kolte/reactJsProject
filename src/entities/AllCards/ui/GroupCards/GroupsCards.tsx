import { FC, memo } from 'react';
import './groupsCards.scss';
import { IRowsProps } from './types';
import { Card } from '../Cards/Card/Card';

const GroupsCardsUI: FC<IRowsProps> = ({
  cards,
  selectedCards,
  selectCard,
  cartCards,
  typePage,
}) => (
  <div className='groups-all-card'>
    {cards.map(
      (item, index) =>
        item && (
          <Card
            key={item.nftAddress + index}
            card={item}
            selectCard={selectCard}
            selectedCards={selectedCards}
            cartCards={cartCards}
            typePage={typePage}
          />
        ),
    )}
  </div>
);

const GroupsCards = memo(GroupsCardsUI);
export default GroupsCards;
