import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { CardActivities } from './CardActivities/CardActivities';
import { CardDetails } from './CardDetails/CardDetails';
import { CardMainInfo } from './CardMainInfo/CardMainInfo';
import { Offers } from './Offers/Offers';
import cls from './nFTCardPage.module.scss';
import {
  IDivededModalsState,
  IIsExpanded,
  IModalIsOpen,
  IModalIsOpenWithType,
  IOfferToModalProps,
} from '../model/types/types';
import { IActivitiesFilter } from '@/entities/Activity';
import { clearNFTCardAction, getNFTCardAction } from '@/entities/AllCards';
import { getAuthData } from '@/entities/Auth';
import { HightRes } from '@/features/HightResModal';
import { getNFTCardOffers } from '@/pages/Marketplace';
import { getRouteNFTCard } from '@/shared/const/router';
import { useAppSelector, useAppDispatch } from '@/shared/lib/hooks/redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loaders';
import { RotateCard } from '@/shared/ui/RotateCard/RotateCard';
import { VStack } from '@/shared/ui/Stack';
import {
  BuynowModal,
  TransferModal,
  CancelOfferOrListing,
  ListCardModal,
  AcceptOfferModal,
  MakeOfferModal,
} from '@/widgets/Listing';
import { Page } from '@/widgets/Page';

const NFTCardPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { cardAddress } = useParams<{ cardAddress: string }>();

  const {
    cards: {
      isLoadingCards,
      NFTCard: { isError, NFTCard },
    },
    activity: { cardActivities },
    marketplace: { offers },
  } = useAppSelector(state => state);
  const { wallet: currentUserWallet, id: currentUserId } =
    useAppSelector(getAuthData);
  console.log("currentWalllerAddress-->",currentUserWallet);
  const {
    itemName,
    insuredValue,
    images,
    nftAddress,
    id,
    status,
    orientation,
    author,
  } = NFTCard;

  const authorWallet = author ? author.wallet : '';
  const isPublic = currentUserWallet !== authorWallet;
  const NFTOffers = offers?.NFTOffers;
  const cardStatus = status;

  const NFTCardDataSeparated = useMemo(
    () => ({
      autographed: NFTCard.autographed,
      cardAddress,
      cardId: NFTCard.id,
      category: NFTCard.category,
      frontImage: NFTCard.images ? NFTCard.images.frontS : '',
      grade: NFTCard.grade,
      gradingCompany: NFTCard.gradingCompany,
      insuredValue: NFTCard.insuredValue,
      listing: NFTCard.listing,
      name: NFTCard.itemName,
      ownerName: NFTCard.author?.name || '',
      ownerWallet: NFTCard.author?.wallet || '',
      status: NFTCard.status,
      tokenId: NFTCard.nftAddress,
      year: NFTCard.year,
    }),
    [NFTCard, cardAddress],
  );

  const [isMount, setIsMount] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<IActivitiesFilter>({
    statuses: [],
    value: 'Last 60 days',
  });

  const [expand, setExpand] = useState<IIsExpanded>({
    activity: true,
    details: false,
    offers: true,
  });

  const updateExpand = useCallback((somekey: string, value: boolean) => {
    setExpand &&
      setExpand((prev: IIsExpanded) => ({
        ...prev,
        [somekey]: value,
      }));
  }, []);

  const [dividedModalsState, setDividedModalsState] =
    useState<IDivededModalsState>({
      acceptOffer: { isOpen: false },
      buyNow: { isOpen: false },
      cancelOffer: { isOpen: false, typeModal: '' },
      listCard: { isOpen: false, typeModal: '' },
      makeOffer: { isOpen: false, typeModal: '' },
      transferCard: { isOpen: false },
    });

  const changeModalState = useCallback(
    (modalName: string, value: IModalIsOpen | IModalIsOpenWithType) => {
      setDividedModalsState({
        ...dividedModalsState,
        [modalName]: value,
      });
    },
    [dividedModalsState],
  );

  const [offerOrListingId, setOfferOrListingId] = useState('');
  const [currentOffer, setCurrentOffer] = useState<IOfferToModalProps>({
    from: '',
    offerId: '',
    price: '',
    to: '',
  });

  const handleOpenModalBuynow = useCallback(() => {
    setDividedModalsState({
      ...dividedModalsState,
      buyNow: {
        isOpen: true,
      },
    });
  }, [dividedModalsState]);

  const handleOpenModalCancelOffer = useCallback(
    (offerId: string, typeModal: string) => {
      setOfferOrListingId(offerId);
      if (typeModal === 'offer')
        setDividedModalsState({
          ...dividedModalsState,
          cancelOffer: { isOpen: true, typeModal },
        });

      if (typeModal === 'listing')
        setDividedModalsState({
          ...dividedModalsState,
          cancelOffer: { isOpen: true, typeModal },
        });
    },
    [dividedModalsState],
  );

  const handleOpenModalListCard = useCallback(
    (listingId: string | null, typeModal: string) => {
      listingId !== null && setOfferOrListingId(listingId);
      if (typeModal === 'update-listing')
        setDividedModalsState({
          ...dividedModalsState,
          listCard: { isOpen: true, typeModal },
        });

      if (typeModal === 'listing')
        setDividedModalsState({
          ...dividedModalsState,
          listCard: { isOpen: true, typeModal },
        });
    },
    [dividedModalsState],
  );

  const handleOpenAcceptOffer = useCallback(
    (offer: IOffer) => {
      const { price, buyer, id: offerId } = offer;
      if (currentUserWallet) {
        setCurrentOffer({
          from: buyer.wallet || '',
          offerId,
          price,
          to: currentUserWallet,
        });
        setDividedModalsState({
          ...dividedModalsState,
          acceptOffer: {
            isOpen: true,
          },
        });
      }
    },
    [currentUserWallet, dividedModalsState],
  );

  const handleOpenMakeOffer = useCallback(
    (offer: IOffer | null, typeModal: string) => {
      if (typeModal === 'make-offer')
        setDividedModalsState({
          ...dividedModalsState,
          makeOffer: { isOpen: true, typeModal },
        });
      else if (!!offer && !!currentUserWallet) {
        const { price, buyer, id: offerId } = offer;
        setCurrentOffer({
          from: buyer.wallet || '',
          offerId,
          price,
          to: currentUserWallet,
        });
        setDividedModalsState({
          ...dividedModalsState,
          makeOffer: { isOpen: true, typeModal },
        });
      }
    },
    [currentUserWallet, dividedModalsState],
  );

  useInitialEffect(() => {
    setIsMount(true);
  });

  const getNFTCard = useCallback(
    (withLoading: boolean) => {
      dispatch(clearNFTCardAction());
      if (cardAddress)
        dispatch(
          getNFTCardAction({
            cardAddress: cardAddress || '',
            withLoading,
          }),
        );
    },
    [dispatch, cardAddress],
  );

  const getOffers = useCallback(() => {
    if (nftAddress) dispatch(getNFTCardOffers(nftAddress));
  }, [dispatch, nftAddress]);

  useEffect(() => {
    getOffers();
  }, [getOffers]);

  useEffect(() => {
    if (!isError) getNFTCard(true);
  }, [getNFTCard, isError, currentUserWallet]);

  useEffect(() => {
    if ((!isLoadingCards && isError) || !cardAddress) navigate('/not_found');
  }, [isError, navigate, isLoadingCards, dispatch, cardAddress]);

  const getCard = useCallback(
    (props: { cardAddress: string; withLoading: boolean }) =>
      dispatch(getNFTCardAction(props)),
    [dispatch],
  );

  useEffect(() => {
    if (cardAddress === id) window.location.href = getRouteNFTCard(nftAddress);
  }, [cardAddress, id, navigate, nftAddress]);

  if (!nftAddress || !cardAddress) return <Loader />;
  return (
    <Page className={cls['nft-card-page']}>
      <Helmet>
        <title>
          Your Digital Bridge for Real-World Collectibles
        </title>
        <meta name='description' content={itemName} />
        <meta name='og:site_name' content='Collector Crypt' />
        <meta property='og:title' content={itemName} />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content={images?.frontS || images?.front || ''}
        />
        <meta property='og:image:height' content='1200' />
        <meta property='og:image:width' content='630' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={itemName} />
        <meta name='twitter:title' content={itemName} />
        <meta
          name='twitter:image'
          content={images?.frontS || images?.front || ''}
        />
      </Helmet>
      <div className={cls.picture}>
        <div className={cls.HeightRes}>
          <HightRes
            backImage={images?.back}
            frontImage={images?.front}
            cardName={itemName}
          />
        </div>
        <RotateCard
          orientation={orientation}
          status=''
          frontImage={images ? images.frontM : ''}
          backImage={images ? images.backM : ''}
          alt=''
        />
      </div>
      <VStack max className={cls.details}>
        <CardMainInfo setIsModalOpen={changeModalState} />
        <CardDetails
          isExpanded={expand}
          updateExpand={updateExpand}
          handleOpenModalBuynow={handleOpenModalBuynow}
          handleOpenModalListCard={handleOpenModalListCard}
          handleOpenMakeOffer={handleOpenMakeOffer}
          handleOpenModalCancelOffer={handleOpenModalCancelOffer}
        />
        <Offers
          isExpanded={expand}
          updateExpand={updateExpand}
          offers={NFTOffers}
          isPublic={isPublic}
          currentUserWallet={currentUserWallet}
          handleOpenModalCancelOffers={handleOpenModalCancelOffer}
          handleOpenAcceptOffer={handleOpenAcceptOffer}
          handleOpenMakeOffer={handleOpenMakeOffer}
          cardStatus={cardStatus}
        />
        <CardActivities
          id={id}
          nftAddress={nftAddress}
          selectedFilter={selectedFilter}
          isExpanded={expand}
          updateExpand={updateExpand}
          setSelectedFilter={setSelectedFilter}
          activities={cardActivities}
        />
      </VStack>
      {!!nftAddress && !!dividedModalsState.transferCard.isOpen && (
        <TransferModal
          insuredValue={insuredValue}
          tokenID={nftAddress}
          name={itemName}
          aversImage={images ? images.frontS : ''}
          open={dividedModalsState.transferCard.isOpen}
          setOpen={changeModalState}
          id={nftAddress}
          orientation={orientation}
          getNFTCard={getNFTCard}
        />
      )}
      {!!dividedModalsState.buyNow.isOpen && (
        <BuynowModal
          getDataCard={getCard}
          open={dividedModalsState.buyNow.isOpen}
          setOpen={changeModalState}
          cardData={NFTCardDataSeparated}
          currentUserWallet={currentUserWallet}
        />
      )}
      {!!dividedModalsState.cancelOffer.isOpen && (
        <CancelOfferOrListing
          getDataCard={getCard}
          open={dividedModalsState.cancelOffer.isOpen}
          setOpen={changeModalState}
          subjectId={offerOrListingId}
          getOffers={getOffers}
          cardData={NFTCardDataSeparated}
          typeModal={dividedModalsState.cancelOffer.typeModal}
          currentUserWallet={currentUserWallet}
        />
      )}
      {!!dividedModalsState.listCard.isOpen && (
        <ListCardModal
          getDataCard={getCard}
          open={dividedModalsState.listCard.isOpen}
          setOpen={changeModalState}
          cardData={NFTCardDataSeparated}
          subjectId={offerOrListingId}
          typeModal={dividedModalsState.listCard.typeModal}
          currentUserWallet={currentUserWallet}
          modalFromPage='NFT-Page'
        />
      )}
      {!!dividedModalsState.acceptOffer.isOpen && (
        <AcceptOfferModal
          getDataCard={getCard}
          open={dividedModalsState.acceptOffer.isOpen}
          setOpen={changeModalState}
          cardData={NFTCardDataSeparated}
          offer={currentOffer}
          getOffers={getOffers}
          userWallet={currentUserWallet}
        />
      )}
      {!!dividedModalsState.makeOffer.isOpen && (
        <MakeOfferModal
          getDataCard={getCard}
          open={dividedModalsState.makeOffer.isOpen}
          setOpen={changeModalState}
          setCurrentOffer={setCurrentOffer}
          cardData={NFTCardDataSeparated}
          offer={currentOffer}
          typeModal={dividedModalsState.makeOffer.typeModal}
        />
      )}
    </Page>
  );
};

export default NFTCardPage;
