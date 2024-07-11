import { FC, memo, MouseEvent, useCallback } from 'react';
import { ICardHoverPanelProps } from './types';
import { changeUserCart, getAllCardInCart } from '@/entities/Cart';
import HoverCardPanelBurnSVG from '@/shared/assets/svg/All-cards/HoverCardPanelBurnSVG';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Checkbox } from '@/shared/ui/Buttons';
import { Tooltip } from '@/shared/ui/Popovers';

const CardHoverPanelUI: FC<ICardHoverPanelProps> = ({
  id,
  selectCard,
  selectedCards,
  cartCards,
}) => {
  const dispatch = useAppDispatch();
  const { cartId } = useAppSelector(getAllCardInCart);

  const selectionControls = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      selectCard && id && selectCard(e, id);
    },
    [id, selectCard],
  );

  const isCardInBurnCart = cartCards?.some((item: ICard) => item.id === id);

  const burnDirect = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      isCardInBurnCart
        ? dispatch(changeUserCart({ cardsId: [id || ''], cartId: null }))
        : dispatch(changeUserCart({ cardsId: [id || ''], cartId }));
    },
    [cartId, dispatch, id, isCardInBurnCart],
  );
  const panelRender = useCallback(() => {
    if (cartCards && cartCards.length)
      if (isCardInBurnCart)
        return (
          <div className='card-panel burned' onClick={burnDirect}>
            <div className='card-panel__icons__element'>
              <HoverCardPanelBurnSVG width='18' height='21' />
            </div>
          </div>
        );

    if (!selectedCards?.length)
      return (
        <div className='card-panel'>
          <div className='card-panel__checkbox'>
            <Checkbox
              name={id}
              id={id}
              onChange={(e: any) => selectionControls(e)}
            />
          </div>
          <div className='card-panel__icons'>
            <Tooltip placement='bottom' titleText='Withdraw'>
              <div className='card-panel__icons__element' onClick={burnDirect}>
                <HoverCardPanelBurnSVG width='18' height='21' />
              </div>
            </Tooltip>
          </div>
        </div>
      );

    return (
      <div className='card-panel checked'>
        <div className='card-panel__checkbox'>
          <Checkbox
            id={id}
            name={id}
            checked={selectedCards.some(
              (collectorIDCard: string) => collectorIDCard === id,
            )}
            onChange={(e: any) => selectionControls(e)}
          />
        </div>
      </div>
    );
  }, [
    burnDirect,
    cartCards,
    id,
    isCardInBurnCart,
    selectedCards,
    selectionControls,
  ]);

  return panelRender();
};
const CardHoverPanel = memo(CardHoverPanelUI);
export default CardHoverPanel;
