import { FC, memo, useCallback, useMemo } from 'react';
import cls from './cardMainInfo.module.scss';
import { ISetIsModalFunc } from '../../model/types/types';
import { reloadCardAction } from '@/entities/AllCards';
import { getAuthData } from '@/entities/Auth';
import { changeUserCart, getAllCardInCart } from '@/entities/Cart';
import { DotsSVG, RefreshSVG, ShareSVG } from '@/shared/assets/svg/miniButtons';
import { getRoutePublicAccount } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getItemShare,
  getItemTreeDots,
} from '@/shared/lib/helpers/getItemsMenu';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { limitWordCharacters } from '@/shared/lib/limitWordCharacters/limitWordCharacters';
import { IconButton } from '@/shared/ui/Buttons';
import { Dropdown, Tooltip } from '@/shared/ui/Popovers';
import { HStack, VStack } from '@/shared/ui/Stack';

export const CardMainInfo: FC<ISetIsModalFunc> = memo(props => {
  const { setIsModalOpen } = props;

  const dispatch = useAppDispatch();

  const { NFTCard } = useAppSelector(state => state.cards.NFTCard);
  const { cartId, cards } = useAppSelector(getAllCardInCart);
  const { wallet: currentUserWallet } = useAppSelector(getAuthData);

  const isPublicPage = useMemo(
    () => currentUserWallet !== NFTCard.author?.wallet,
    [NFTCard.author?.wallet, currentUserWallet],
  );
  const isBurnedStatus = useMemo(
    () => NFTCard.status === 'Burned',
    [NFTCard.status],
  );
  const isMintedStatus = useMemo(
    () => NFTCard.status === 'Minted',
    [NFTCard.status],
  );

  const isOnwerAvailble = useMemo(
    () => NFTCard.author?.name || NFTCard.author?.wallet,
    [NFTCard.author?.name, NFTCard.author?.wallet],
  );

  const burnDirect = useCallback(() => {
    const isFound = cards.find((item: ICard) => item.id === NFTCard.id);
    dispatch(
      changeUserCart({
        cardsId: [NFTCard.id],
        cartId: isFound ? null : cartId,
      }),
    );
  }, [NFTCard.id, cards, cartId, dispatch]);

  const reloadDataCard = useCallback(
    () => dispatch(reloadCardAction({ cardAddress: NFTCard.nftAddress || '' })),
    [NFTCard.nftAddress, dispatch],
  );

  const selectNameLink = useMemo(() => {
    const link = !isPublicPage
      ? 'You'
      : NFTCard.author?.name ||
        (NFTCard.author?.wallet &&
          limitWordCharacters(NFTCard.author?.wallet, 4, 'centerDots')) ||
        null;
    if (isMintedStatus) return 'Collector';
    return link || 'N/A';
  }, [
    NFTCard.author?.name,
    NFTCard.author?.wallet,
    isMintedStatus,
    isPublicPage,
  ]);

  const itemsForShare = useMemo(
    () =>
      getItemShare(
        `Check out this item on Collector ${window.location.href} via @collector`,
        'view-card',
        `${window.location.href}`,
      ),
    [],
  );
  const itemsForTreeDots = useMemo(
    () =>
      getItemTreeDots(
        burnDirect,
        () => setIsModalOpen('transferCard', { isOpen: true }),
        NFTCard.id,
      ),
    [NFTCard.id, burnDirect, setIsModalOpen],
  );

  const classNameLink = classNames(
    cls.link,
    {
      [cls.blue]: isOnwerAvailble || NFTCard.status === 'Minted',
      [cls.cursor]: isOnwerAvailble,
    },
    [],
  );
  const currentLink = useMemo(
    () =>
      isOnwerAvailble ? (
        <a
          href={getRoutePublicAccount(NFTCard.author?.wallet || '')}
          className={classNameLink}
        >
          {selectNameLink}
        </a>
      ) : (
        <div className={classNameLink}>{selectNameLink}</div>
      ),
    [isOnwerAvailble, NFTCard.author?.wallet, classNameLink, selectNameLink],
  );

  return (
    <VStack justify='between' gap={0.5} className={cls['card-main-info']}>
      <HStack max justify='between'>
        <h5>{NFTCard.category}</h5>
        <HStack gap={0.5}>
          <Tooltip titleText='Refresh Metadata' placement='bottom'>
            <IconButton onClick={reloadDataCard}>
              <RefreshSVG />
            </IconButton>
          </Tooltip>
          <Dropdown
            minWidth={11}
            items={itemsForShare}
            trigger={
              <IconButton>
                <ShareSVG />
              </IconButton>
            }
          />
          {!isPublicPage && !isBurnedStatus && (
            <Dropdown
              minWidth={17.5}
              items={itemsForTreeDots}
              trigger={
                <IconButton>
                  <DotsSVG />
                </IconButton>
              }
            />
          )}
        </HStack>
      </HStack>
      <h1>
        {!!NFTCard.itemName &&
          limitWordCharacters(NFTCard.itemName, 127, 'endDots')}
      </h1>
      <HStack gap={1.5}>
        <HStack gap={0.375} className={cls['texts-owned']}>
          <h3>Owned by</h3>
          {currentLink}
        </HStack>
        <HStack gap={0.375} className={cls.texts}>
          <h3>Year</h3>
          <h4>{NFTCard.year}</h4>
        </HStack>
        <HStack gap={0.375} className={cls.texts}>
          <h3>Autographed</h3>
          <h4>{NFTCard.autographed ? 'Yes' : 'No'}</h4>
        </HStack>
      </HStack>
    </VStack>
  );
});
