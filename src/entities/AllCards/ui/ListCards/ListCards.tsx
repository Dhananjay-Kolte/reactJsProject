import {
  Dispatch,
  FC,
  memo,
  MouseEvent,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import cls from './listCards.module.scss';
import { getNFTCardAction } from '../../model/actions/allCardsActions';
import { ISelectFilters } from '../../model/types/allCards';
import { getCurrentImage } from '../Cards/helpers';
import { getAuthData, getIsAuth } from '@/entities/Auth';
import { changeUserCart, getAllCardInCart } from '@/entities/Cart';
import { MagicLinkModal } from '@/features/MagicLinkModal';
import { IModalIsOpen } from '@/pages/NFTCard';
import { BuyPublicSVG, LightningSVG } from '@/shared/assets/svg';
import HoverCardPanelBurnSVG from '@/shared/assets/svg/All-cards/HoverCardPanelBurnSVG';
import { SuccessMintedSVG } from '@/shared/assets/svg/VerifyCardStatusIcon';
import { getRouteNFTCard } from '@/shared/const/router';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';
import { getCurrentSizeImageInTable } from '@/shared/lib/helpers/getCurrentSizeImageInTable/getCurrentSizeImageInTable';
import { useAppSelector, useAppDispatch } from '@/shared/lib/hooks/redux';
import { useLazyLoadingObserver } from '@/shared/lib/hooks/useLazyLoadingObserver';
import { Checkbox } from '@/shared/ui/Buttons';
import { Tooltip } from '@/shared/ui/Popovers';
import { HStack } from '@/shared/ui/Stack';
import { Status } from '@/shared/ui/Statuses';
import { Table, IColumnTable } from '@/shared/ui/Table';
import { BuynowModal } from '@/widgets/Listing';

interface ITableContentProps {
  filteredCards: ICard[];
  typePage: TypesPage;
  selectedCards?: string[] | [];
  selectCard?: (
    e: MouseEvent<HTMLButtonElement>,
    collectorIDProp: string,
  ) => void;
  page: string;
  changeSelectFilter: (
    param: keyof ISelectFilters | 'search' | 'step' | 'page',
    value: string | boolean | string[] | undefined,
    resetPage?: 'resetPage' | undefined,
  ) => void;
  setIsScroll: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  total: number;
  findTotal: number;
}

const ListCardsUI: FC<ITableContentProps> = ({
  filteredCards,
  selectedCards,
  selectCard,
  typePage,
  page,
  changeSelectFilter,
  setIsScroll,
  isLoading,
  total,
  findTotal,
}) => {
  const dispatch = useAppDispatch();

  const { currentRef } = useLazyLoadingObserver(
    page,
    setIsScroll,
    changeSelectFilter,
    isLoading,
    total,
  );

  const { id: profileId, wallet: currentUserWallet } =
    useAppSelector(getAuthData);
  const isAuth = useAppSelector(getIsAuth);
  const { cartId, cards: cartCards } = useAppSelector(getAllCardInCart);
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  const [dividedModalsState, setDividedModalsState] = useState({
    buyNow: { isOpen: false },
  });

  const changeModalState = (modalName: string, value: IModalIsOpen) => {
    setDividedModalsState({
      ...dividedModalsState,
      [modalName]: value,
    });
  };

  const [selectedCard, setSelectedCard] = useState<ICard>();

  const cardData = useMemo(
    () =>
      selectedCard && {
        autographed: selectedCard.autographed,
        cardId: selectedCard.id,
        category: selectedCard.category,
        frontImage: selectedCard.images ? selectedCard.images.frontS : '',
        grade: selectedCard.grade,
        gradingCompany: selectedCard.gradingCompany,
        insuredValue: selectedCard.insuredValue,
        listing: selectedCard.listing,
        name: selectedCard.itemName,
        ownerName:
          selectedCard.owner && selectedCard.owner.name
            ? selectedCard.owner.name
            : '',
        ownerWallet:
          selectedCard.owner && selectedCard.owner.wallet
            ? selectedCard.owner.wallet
            : '',
        status: selectedCard.status,
        tokenId: selectedCard.nftAddress,
        year: selectedCard.year,
      },
    [selectedCard],
  );

  const buyNowClick = useCallback(
    (event: MouseEvent<HTMLDivElement>, card: ICard) => {
      event.preventDefault();
      if (isAuth) {
        setDividedModalsState({ buyNow: { isOpen: true } });
        setSelectedCard(card);
      } else onOpen();
    },
    [isAuth],
  );

  const burnDirect = useCallback(
    (event: MouseEvent<HTMLDivElement>, cardId: string) => {
      event.preventDefault();
      dispatch(
        changeUserCart({
          cardsId: [cardId],
          cartId: cartCards.some(item => item.id === cardId) ? null : cartId,
        }),
      );
    },
    [cartCards, cartId, dispatch],
  );

  const selectionControls = useCallback(
    (e: MouseEvent<HTMLDivElement>, row: ICard) => {
      e.preventDefault();
      selectCard && row.id && selectCard(e as any, row.id);
    },
    [selectCard],
  );

  const getCard = useCallback(
    (props: { cardAddress: string; withLoading: boolean }) =>
      dispatch(getNFTCardAction(props)),
    [dispatch],
  );

  const getSamAuthorVerification = (card: ICard, currentProfileId: string) => {
    if (card.owner && card.owner.id) return card.owner.id !== currentProfileId;

    return false;
  };

  const selectIcon = useCallback(
    (
      row: ICard,
      idProfile: string,
      onClick: (event: MouseEvent<HTMLDivElement>, card: ICard) => void,
    ) =>
      getSamAuthorVerification(row, idProfile) ? (
        <HStack className={cls.buy} onClick={event => onClick(event, row)}>
          <BuyPublicSVG />
        </HStack>
      ) : (
        <HStack align='center' gap={0.125} className={cls.active}>
          <SuccessMintedSVG width='10px' height='10px' />
          <span>Owned</span>
        </HStack>
      ),
    [],
  );

  const getRouteRedirectToCard = (row: ICard) =>
    getRouteNFTCard(row.nftAddress);

  const columns: IColumnTable<ICard>[] = useMemo(
    () => [
      ...(typePage === 'allCards'
        ? [
            {
              field: 'checkbox',
              headerName: '',
              render: (row: ICard) => (
                <HStack
                  align='center'
                  onClick={event => selectionControls(event, row)}
                >
                  <Checkbox
                    disabled={cartCards.some(item => item.id === row.id)}
                    id={row.id}
                    checked={
                      cartCards.some(item => item.id === row.id)
                        ? true
                        : selectedCards &&
                          selectedCards.some(
                            (collectorIDCard: string) =>
                              collectorIDCard === row.id,
                          )
                    }
                    onChange={(e: any) => {
                      e.preventDefault();
                      selectCard && row.id && selectCard(e, row.id);
                    }}
                  />
                </HStack>
              ),
              width: '2.5rem',
            },
          ]
        : []),
      {
        field: 'frontImage',
        headerName: 'Image',
        render: (row: ICard) => {
          const { images, listing, orientation } = row;
          const { width, height } = getCurrentSizeImageInTable(orientation);

          return (
            <HStack align='center' justify='center' className={cls.frontImage}>
              <img
                src={images ? images.frontS : ''}
                alt='card'
                width={width}
                height={height}
                loading='lazy'
              />
              {!!listing && (
                <HStack align='center' justify='center' className={cls.listing}>
                  <LightningSVG />
                </HStack>
              )}
            </HStack>
          );
        },
        style: { marginRight: '1.5rem' },
        width: '3.5rem',
      },
      {
        field: 'itemName',
        fullWidth: true,
        headerName: 'Name',
        style: { marginRight: '3rem' },
      },
      {
        field: 'category',
        headerName: 'Category',
        style: { marginRight: '3rem' },
        width: '6rem',
      },
      {
        field: 'gradeNum',
        headerName: 'Grade',
        justify: 'center',
        style: { marginRight: '2.5rem' },
        width: '3rem',
      },
      ...(typePage !== 'burned' && typePage !== 'marketplace'
        ? ([
            {
              field: 'insuredValue',
              headerName: 'Insured Value',
              justify: 'end',
              render: (row: ICard) => (
                <p>{`$ ${convertNumberInK(row.insuredValue)}`}</p>
              ),
              style: { marginRight: '3rem' },
              width: '6.125rem',
            },
          ] as IColumnTable<ICard>[])
        : []),
      ...(typePage !== 'burned'
        ? ([
            {
              field: 'listing',
              headerName: 'Asking Price',
              justify: 'end',
              render: (row: ICard) => (
                <HStack gap={0.25}>
                  {!!row.listing && getCurrentImage(row.listing.currency)}
                  <p>
                    {row.listing
                      ? convertNumberInK(row.listing.price)
                      : '------'}
                  </p>
                </HStack>
              ),
              width: '6rem',
            },
          ] as IColumnTable<ICard>[])
        : []),
      ...(typePage === 'allCards' || typePage === 'marketplace'
        ? ([
            {
              field: 'more',
              headerName: '',
              justify: 'end',
              render: (row: ICard) => (
                <>
                  {typePage === 'allCards' && (
                    <HStack
                      justify='end'
                      align='center'
                      className={cls.more}
                      onClick={event => burnDirect(event, row.id ? row.id : '')}
                    >
                      <Tooltip placement='bottom' titleText='Withdraw'>
                        <HoverCardPanelBurnSVG
                          fill={
                            cartCards.some(item => item.id === row.id)
                              ? '#FF7C01'
                              : ''
                          }
                        />
                      </Tooltip>
                    </HStack>
                  )}
                  {typePage === 'marketplace' &&
                    !!row.listing &&
                    selectIcon(row, profileId, buyNowClick)}
                </>
              ),
              style: { marginLeft: '3rem' },
              width: '4.5rem',
            },
          ] as IColumnTable<ICard>[])
        : []),
      ...(typePage === 'burned'
        ? [
            {
              field: 'status',
              headerName: 'Status',
              render: (row: ICard) => <Status status='Burned' />,
              width: '5.75rem',
            },
          ]
        : []),
    ],
    [
      burnDirect,
      buyNowClick,
      cartCards,
      profileId,
      selectCard,
      selectIcon,
      selectedCards,
      selectionControls,
      typePage,
    ],
  );

  return (
    <>
      <Table
        rows={filteredCards}
        findTotal={findTotal}
        rowLink={getRouteRedirectToCard}
        columns={columns}
        refLoader={currentRef}
      />
      {!!selectedCard && !!cardData && (
        <BuynowModal
          getDataCard={getCard}
          open={dividedModalsState.buyNow.isOpen}
          setOpen={changeModalState}
          cardData={cardData}
          currentUserWallet={currentUserWallet}
        />
      )}
      {!!openModal && <MagicLinkModal open={openModal} onClose={onClose} />}
    </>
  );
};

const ListCards = memo(ListCardsUI);
export default ListCards;
