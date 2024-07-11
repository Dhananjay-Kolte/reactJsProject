import { TTypeModalInMint } from '@/entities/InboundShipment';
import {
  FailedCrossSVG,
  SuccessMintedSVG,
  SuccessSVG,
  WarningOktagonSVG,
} from '@/shared/assets/svg/VerifyCardStatusIcon';

export const getItem = (typeModalInMint: TTypeModalInMint) => {
  if (typeModalInMint === 'success')
    return {
      image: <SuccessMintedSVG fill='#20E39D' />,
      text: 'You can now unlock the full potential of your collectibles without having to ship or dodge fraud! Share your cards and show off your collection knowing that they’re held safely and securely in our vault.',
      title: 'Your items successfully added to your Collection',
    };
  if (typeModalInMint === 'error')
    return {
      image: <WarningOktagonSVG />,
      text: 'Please try to mint your pNFTs again',
      title: 'Something went wrong...',
    };
  return {
    image: '',
    text: 'Please check the data again',
    title: 'Your pNFTs were partly minted!',
  };
};

export const getItemPartly = (successCount: number, errorCount: number) => [
  {
    count: successCount,
    image: <SuccessSVG />,
    title: 'Successfully minted cards',
  },
  {
    count: errorCount,
    image: <FailedCrossSVG />,
    title: 'Unsuccessfully minted cards',
  },
];
