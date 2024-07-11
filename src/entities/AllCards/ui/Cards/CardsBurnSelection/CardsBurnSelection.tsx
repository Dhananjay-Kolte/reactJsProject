import { FC, memo, useCallback, useEffect } from 'react';
import './cardsBurnSelection.scss';
import { ICardBurnSelectionProps } from './types';
import { changeUserCart, getAllCardInCart } from '@/entities/Cart';
import { FireSVG } from '@/shared/assets/svg/buttons';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';

export const CardsBurnSelection: FC<ICardBurnSelectionProps> = memo(
  ({
    selectedCards,
    setSelectedCards,
    isAllCardsSelecting,
    setIsAllCardsSelecting,
  }) => {
    const dispatch = useAppDispatch();
    const {
      cards: {
        allUserCards: { filterNFtCard },
      },
    } = useAppSelector(state => state);
    const { cartId } = useAppSelector(getAllCardInCart);
    const addToBurn = () => {
      if (selectedCards.length > 0) {
        dispatch(changeUserCart({ cardsId: selectedCards, cartId }));
        setSelectedCards([]);
        setIsAllCardsSelecting(false);
      }
    };

    const resetSelectedCards = () => {
      setSelectedCards([]);
      setIsAllCardsSelecting(false);
    };

    const selectAll = useCallback(() => {
      setIsAllCardsSelecting(true);
      const allUserCardsIDs: string[] = [];
      filterNFtCard.forEach(({ id }) => id && allUserCardsIDs.push(id));
      setSelectedCards(allUserCardsIDs);
    }, [filterNFtCard, setIsAllCardsSelecting, setSelectedCards]);

    useEffect(() => {
      if (isAllCardsSelecting)
        if (selectedCards.length < filterNFtCard.length) selectAll();
    }, [filterNFtCard.length, isAllCardsSelecting, selectAll, selectedCards]);

    return (
      <div className='cards-selection'>
        <div className='cards-selection__left-block'>
          <div className='cards-selection__left-block__selected'>
            <div className='cards-selection__left-block__selected__text'>
              Selected items
            </div>
            <div className='cards-selection__left-block__selected__count'>
              {selectedCards.length}
            </div>
          </div>
          <div className='cards-selection__left-block__buttons'>
            <Button
              typeButton='secondary'
              text='select all'
              size='small'
              onClick={selectAll}
            />
            <div
              className='cards-selection__left-block__buttons__text-button'
              onClick={resetSelectedCards}
            >
              CANCEL
            </div>
          </div>
        </div>
        <div className='cards-selection__right-block'>
          <Button
            typeButton='primary'
            text='Withdraw'
            img={FireSVG}
            onClick={addToBurn}
          />
        </div>
      </div>
    );
  },
);
