import { UsdtSVG, UsdcSVG } from '@/shared/assets/svg';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';

export const getCurrentImage = (currency: 'USDC' | 'USDT') =>
  currency === 'USDT' ? (
    <UsdtSVG />
  ) : (
    <UsdcSVG fill='#3875C9' secondFill='#FFFFFF' />
  );

export const selectPrice = (typePage: TypesPage, listing: IListing | null) => {
  if (
    typePage === 'allCards' ||
    typePage === 'profile' ||
    typePage === 'burned'
  )
    return listing ? getCurrentImage(listing.currency) : <span>$</span>;

  return listing && getCurrentImage(listing.currency);
};

export const roundNumber = (typePage: TypesPage, card: ICard) => {
  if (typePage === 'marketplace')
    return card.listing ? convertNumberInK(card.listing.price) : '';

  return card.listing
    ? convertNumberInK(card.listing.price)
    : convertNumberInK(card.insuredValue);
};

export const getModalInfoCard = (card: ICard) => ({
  autographed: card.autographed,
  cardId: card.id,
  category: card.category,
  frontImage: card.images ? card.images.frontM : '',
  grade: card.grade,
  gradingCompany: card.gradingCompany,
  insuredValue: card.insuredValue,
  listing: card.listing,
  name: card.itemName,
  ownerName: card.owner && card.owner.name ? card.owner.name : '',
  ownerWallet: card.owner && card.owner.wallet ? card.owner.wallet : '',
  status: card.status,
  tokenId: card.nftAddress,
  year: card.year,
});
