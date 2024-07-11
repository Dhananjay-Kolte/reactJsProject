import { FC, memo, useCallback, useState } from 'react';
import { IListingButtonsProps } from '../../../model/types/types';
import cls from '../cardDetails.module.scss';
import { getIsAuth } from '@/entities/Auth';
import { getMyProfile } from '@/entities/MyProfile';
import { MagicLinkModal } from '@/features/MagicLinkModal';
import { SaleSVG, PencilSVG } from '@/shared/assets/svg';
import LabelBlackSVG from '@/shared/assets/svg/LabelBlackSVG';
import { CloseDarkSVG } from '@/shared/assets/svg/buttons';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { HStack } from '@/shared/ui/Stack';
import { BlockCosts, BlockStatus } from '@/shared/ui/Statuses/ui/BlocksColor';

const ListingButtonsUI: FC<IListingButtonsProps> = ({
  moreDetails,
  handleOpenModalBuynow,
  handleOpenModalListCard,
  handleOpenMakeOffer,
  handleOpenModalCancelOffer,
}) => {
  const { id: myProfileId } = useAppSelector(getMyProfile);
  const { ownerId } = useAppSelector(state => state.cards.NFTCard.NFTCard);
  const isCardYours = myProfileId === ownerId;

  const { insuredValue, status, listing, nftStatus } = moreDetails;
  const cardInvalid = status === 'Burned';
  const currentCardStatus = !!listing && !cardInvalid ? 'Listed' : status;
  const [openModal, setOpenModal] = useState(false);

  const isAuth = useAppSelector(getIsAuth);
  const onClose = () => {
    setOpenModal(false);
  };
  const onOpen = () => {
    setOpenModal(true);
  };

  const isStatusForListing = () =>
    !(status === 'Invalid' || status === 'Frozen' || status === 'Minted');

  const withoutListingStatus = () =>
    status === 'Burned' || status === 'Frozen' || status === 'Minted';

  const isCardCostsShown =
    isCardYours ||
    (isStatusForListing() && !!listing) ||
    (!isAuth && !!listing) ||
    (withoutListingStatus() && !listing);

  const listCard = (typeModal: string) => {
    if (
      typeModal === 'update-listing' &&
      handleOpenModalListCard &&
      listing?.id
    )
      handleOpenModalListCard(listing.id, typeModal);

    if (typeModal === 'listing' && handleOpenModalListCard)
      handleOpenModalListCard(null, typeModal);
  };

  const buyNow = () => {
    if (isAuth) handleOpenModalBuynow && handleOpenModalBuynow();
    else onOpen();
  };

  const makeOffer = (typeModal: string) => {
    if (isAuth) handleOpenMakeOffer && handleOpenMakeOffer(null, typeModal);
    else onOpen();
  };

  const cancelListing = () => {
    if (handleOpenModalCancelOffer && listing?.id)
      handleOpenModalCancelOffer(listing.id, 'listing');
  };

  const alternativeSaleSVG = useCallback(
    () => <SaleSVG width='14' height='15' type='alternative' />,
    [],
  );
  const alternativePencilSVG = useCallback(
    () => <PencilSVG width='14' height='15' type='alternative' />,
    [],
  );

  const validatedContent = () => {
    if (isCardYours) {
      if (listing !== null) {
        if (status === 'Burned')
          return (
            <Button
              typeButton='white'
              text='Cancel listing'
              size='small'
              style={{ height: '40px', width: '208px' }}
              img={CloseDarkSVG}
              onClick={cancelListing}
            />
          );

        return (
          <HStack max gap={1}>
            <Button
              typeButton='secondary'
              text='Change price'
              size='small'
              style={{ height: '40px', width: '208px' }}
              img={alternativePencilSVG}
              imgLocation='left'
              onClick={() => listCard('update-listing')}
            />
            <Button
              typeButton='white'
              text='Cancel listing'
              size='small'
              style={{ height: '40px', width: '208px' }}
              img={CloseDarkSVG}
              onClick={cancelListing}
            />
          </HStack>
        );
      }
      if (status !== 'Burned')
        return (
          <Button
            typeButton='white'
            text='List card'
            size='small'
            style={{ height: '40px', width: '208px' }}
            img={LabelBlackSVG}
            disabled={!!listing}
            onClick={() => listCard('listing')}
          />
        );
    }
    if (!isCardYours && status !== 'Burned')
      return (
        <HStack max gap={1}>
          {!!listing && (
            <Button
              typeButton='secondary'
              text='Buy now'
              size='small'
              style={{ height: '40px', width: '208px' }}
              img={alternativeSaleSVG}
              onClick={buyNow}
            />
          )}
          <Button
            typeButton='white'
            text='Make an offer'
            size='small'
            style={{ height: '40px', width: '208px' }}
            img={LabelBlackSVG}
            onClick={() => makeOffer('make-offer')}
          />
        </HStack>
      );

    return null;
  };

  const getValueBox = () =>
    listing !== null ? listing.price : `${insuredValue}`;

  const viewContent = () => {
    if (isCardCostsShown)
      return nftStatus !== 'Valid' ? (
        <BlockStatus status={nftStatus} />
      ) : (
        <BlockCosts
          tooltip
          amount='1'
          value2={getValueBox()}
          status={currentCardStatus}
        />
      );

    return nftStatus !== 'Valid' ? <BlockStatus status={nftStatus} /> : null;
  };

  return (
    <HStack
      max
      align='center'
      gap={1}
      className={cls['card-cost-listing-buttons']}
      justify={isCardCostsShown || nftStatus !== 'Valid' ? 'between' : 'end'}
    >
      {viewContent()}
      {isStatusForListing() && <HStack>{validatedContent()}</HStack>}
      {!!openModal && <MagicLinkModal open={openModal} onClose={onClose} />}
    </HStack>
  );
};
const ListingButtons = memo(ListingButtonsUI);
export default ListingButtons;
