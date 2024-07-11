import { FC, memo, useCallback, useMemo } from 'react';
import ListingButtons from './BlockItems/ListingButtons';
import { MoreDetails } from './BlockItems/MoreDetails';
import cls from './cardDetails.module.scss';
import { ICardDetailsProps } from '../../model/types/types';
import { BottomArrowSVG, TopArrowSVG } from '@/shared/assets/svg/miniButtons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { IconButton } from '@/shared/ui/Buttons';
import { HStack, VStack } from '@/shared/ui/Stack';

export const CardDetails: FC<ICardDetailsProps> = memo(props => {
  const {
    isExpanded,
    updateExpand,
    handleOpenModalBuynow,
    handleOpenModalListCard,
    handleOpenMakeOffer,
    handleOpenModalCancelOffer,
  } = props;

  const { NFTCard } = useAppSelector(state => state.cards.NFTCard);

  const moreDetails = useMemo(
    () => ({
      authenticated: NFTCard.authenticated,
      blockchain: NFTCard.blockchain || '',
      category: NFTCard.category,
      centering: NFTCard.centering,
      contractAddress: NFTCard.contractAddress || '',
      corners: NFTCard.corners,
      edges: NFTCard.edges,
      grade: NFTCard.grade,
      gradeId: NFTCard.gradingID,
      gradeNum: NFTCard.gradeNum,
      gradingCompany: NFTCard.gradingCompany || '',
      insuredValue: NFTCard.insuredValue,
      listing: NFTCard.listing,
      location: NFTCard.location,
      nftAddress: NFTCard.nftAddress,
      nftStatus: NFTCard.nftStatus,
      ownerName: NFTCard.author?.name || '',
      ownerWallet: NFTCard.author?.wallet || '',
      qualifiers: NFTCard.qualifiers,
      status: NFTCard.status,
      surface: NFTCard.surface,
      vault: NFTCard.vault,
      vaultId: NFTCard.vaultId,
    }),
    [NFTCard],
  );

  const handleExpand = useCallback(
    () => updateExpand && updateExpand('details', !isExpanded?.details),
    [isExpanded?.details, updateExpand],
  );

  const currentIcon = useMemo(
    () => (isExpanded?.details ? <TopArrowSVG /> : <BottomArrowSVG />),
    [isExpanded?.details],
  );

  return (
    <HStack max gap={1} className={cls['nft-card-details']}>
      <VStack max>
        <ListingButtons
          moreDetails={moreDetails}
          handleOpenModalBuynow={handleOpenModalBuynow}
          handleOpenModalListCard={handleOpenModalListCard}
          handleOpenMakeOffer={handleOpenMakeOffer}
          handleOpenModalCancelOffer={handleOpenModalCancelOffer}
        />
        <HStack
          max
          justify='between'
          className={classNames(
            cls.more,
            { [cls.expanded]: isExpanded?.details },
            [],
          )}
          onClick={handleExpand}
        >
          <h3>More Details</h3>
          <IconButton>{currentIcon}</IconButton>
        </HStack>
        {!!isExpanded?.details && <MoreDetails moreDetails={moreDetails} />}
      </VStack>
    </HStack>
  );
});
