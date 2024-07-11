import { FC, useState, memo, MouseEvent, useMemo } from 'react';
import cls from './allCardsPage.module.scss';
import { getTotalAllCoastAllCardsPage } from '../model/selectors/getAllCardsPage/getAllCardsPage';
import { AllCards, CardsBurnSelection } from '@/entities/AllCards';
import { getAuthData } from '@/entities/Auth';
import { getAllCardInCart } from '@/entities/Cart';
import { TabsMyCollections } from '@/features/TitleTabsAllCards';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { Page } from '@/widgets/Page';

const AllCardsPageUI: FC<{ burned?: boolean }> = ({ burned }) => {
  const totalCostAllCards = useAppSelector(getTotalAllCoastAllCardsPage);
  const { wallet: publicWallet } = useAppSelector(getAuthData);
  const { cards: userCardsInCart } = useAppSelector(getAllCardInCart);

  const [selectedCards, setSelectedCards] = useState<string[] | []>([]);
  const [isAllCardsSelecting, setIsAllCardsSelecting] =
    useState<boolean>(false);

  const selectCard = useMemo(
    () => (e: MouseEvent<HTMLButtonElement>, collectorIDProp: string) => {
      setIsAllCardsSelecting(false);
      if (selectedCards.some((id: string) => id === collectorIDProp)) {
        const filteredArr = selectedCards.filter(
          (id: string) => id !== collectorIDProp,
        );
        setSelectedCards(filteredArr);
      } else setSelectedCards([...selectedCards, collectorIDProp]);
    },
    [selectedCards],
  );

  return (
    <Page className={cls['allCards-page']}>
      <TabsMyCollections title='My cards' total={totalCostAllCards || '0'} />
      <AllCards
        publicWallet={publicWallet || ''}
        typePage='allCards'
        selectedCards={selectedCards}
        cartCards={userCardsInCart}
        selectCard={selectCard}
      />
      {!!selectedCards.length && (
        <CardsBurnSelection
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          isAllCardsSelecting={isAllCardsSelecting}
          setIsAllCardsSelecting={setIsAllCardsSelecting}
        />
      )}
    </Page>
  );
};
const AllCardsPage = memo(AllCardsPageUI);
export default AllCardsPage;
