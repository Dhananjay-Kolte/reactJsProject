import {
  FC,
  useState,
  MouseEvent,
  memo,
  useCallback,
  MutableRefObject,
  useRef,
  useEffect,
} from 'react';
import './card.scss';
import { Link } from 'react-router-dom';
import { getNFTCardAction } from '../../../model/actions/allCardsActions';
import BurnedCardHover from '../BurnedCardHover/BurnedCardHover';
import BuyNowHover from '../BuyNowHover/BuyNowHover';
import CardHoverPanel from '../CardHoverPanel/CardHoverPanel';
import { selectPrice, roundNumber, getModalInfoCard } from '../helpers';
import { ICardProps } from '../types';
import { getAuthData, getIsAuth } from '@/entities/Auth';
import { MagicLinkModal } from '@/features/MagicLinkModal';
import { IModalIsOpen } from '@/pages/NFTCard';
import { SuccessMintedSVG } from '@/shared/assets/svg/VerifyCardStatusIcon';
import { getRouteNFTCard } from '@/shared/const/router';
import { getCurrentSizeImageInTable } from '@/shared/lib/helpers/getCurrentSizeImageInTable/getCurrentSizeImageInTable';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import useHover from '@/shared/lib/hooks/useHover/useHover';
import { AppImage } from '@/shared/ui/AppImage';
import { ListingStatus } from '@/shared/ui/Statuses';
import { BuynowModal } from '@/widgets/Listing';

export const Card: FC<ICardProps> = memo(
  ({ card, selectCard, selectedCards, cartCards, typePage }) => {
    const dispatch = useAppDispatch();
    const modalInfoCard = getModalInfoCard(card);
    const [openModal, setOpenModal] = useState(false);
    const { id: profileId, wallet: currentUserWallet } =
      useAppSelector(getAuthData);
    const isAuth = useAppSelector(getIsAuth);
    const {
      images,
      itemName,
      category,
      orientation,
      nftAddress,
      id,
      listing,
      status,
    } = card;
    const cardRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
    const hovered = useHover(cardRef);
    const onClose = () => {
      setOpenModal(false);
    };
    const onOpen = () => {
      setOpenModal(true);
    };
    const [dividedModalsState, setDividedModalsState] = useState({
      buyNow: {
        isOpen: false,
      },
    });

    const changeModalState = useCallback(
      (modalName: string, value: IModalIsOpen) => {
        setDividedModalsState({
          ...dividedModalsState,
          [modalName]: value,
        });
      },
      [dividedModalsState],
    );

    const getSamAuthorVerification = useCallback(
      () => (card.owner && card.owner.id ? card.owner.id !== profileId : false),
      [card.owner, profileId],
    );

    const samAuthorVerification = getSamAuthorVerification();

    const [showSocials, setShowSocials] = useState<boolean>(hovered);
    const { height, width } = getCurrentSizeImageInTable(orientation, 'xl');

    const flagMarketplaceAndAuthor =
      typePage === 'marketplace' && samAuthorVerification && listing;

    const currentListingBlockchainStatus = status === 'Burned' ? null : listing;
    const shareSocial = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        setShowSocials(!showSocials);
        e.preventDefault();
      },
      [showSocials],
    );

    useEffect(() => {
      if (showSocials && !hovered) setShowSocials(false);
    }, [hovered, showSocials]);

    const onBuyNow = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (isAuth) changeModalState('buyNow', { isOpen: true });
        else onOpen();
      },
      [changeModalState, isAuth],
    );

    const getCard = useCallback(
      (props: { cardAddress: string; withLoading: boolean }) =>
        dispatch(getNFTCardAction(props)),
      [dispatch],
    );

    return (
      <>
        <Link to={getRouteNFTCard(nftAddress)} className='link-card'>
          <div ref={cardRef} className='card'>
            {typePage === 'allCards' && (
              <CardHoverPanel
                id={id}
                selectCard={selectCard}
                selectedCards={selectedCards}
                cartCards={cartCards}
                showSocials={showSocials}
                shareSocial={shareSocial}
              />
            )}
            {typePage === 'burned' && (
              <BurnedCardHover
                showSocials={showSocials}
                shareSocial={shareSocial}
                address={nftAddress}
              />
            )}
            <div className='card__owner'>
              {!samAuthorVerification && typePage === 'marketplace' && (
                <div className='card__owner__active'>
                  <SuccessMintedSVG width='10px' height='10px' />
                  <span>Owned</span>
                </div>
              )}
            </div>
            <div className='card__img images'>
              <AppImage
                src={images ? images.frontS : ''}
                width={width}
                height={height}
                alt=''
                className='nft-image'
              />
            </div>
            <div
              className={`card__details ${
                flagMarketplaceAndAuthor ? 'marketHover' : ''
              }`}
            >
              <ListingStatus withText listing={listing} status={status} />
              <div className='card__details__name'>{itemName}</div>
              {!!hovered && !!flagMarketplaceAndAuthor && (
                <BuyNowHover
                  card={card}
                  typePage={typePage}
                  onClick={onBuyNow}
                />
              )}
              <div
                className='card__details__insurance-value'
                style={{
                  visibility:
                    hovered && flagMarketplaceAndAuthor ? 'hidden' : undefined,
                }}
              >
                <div className='card__details__insurance-value__category'>
                  {category}
                </div>
                <div className='card__details__insurance-value__insurance'>
                  {!!typePage &&
                    selectPrice(typePage, currentListingBlockchainStatus)}
                  {!!typePage && roundNumber(typePage, card)}
                </div>
              </div>
            </div>
          </div>
        </Link>
        <BuynowModal
          getDataCard={getCard}
          open={dividedModalsState.buyNow.isOpen}
          setOpen={changeModalState}
          cardData={modalInfoCard}
          currentUserWallet={currentUserWallet}
        />
        {!!openModal && <MagicLinkModal open={openModal} onClose={onClose} />}
      </>
    );
  },
);
