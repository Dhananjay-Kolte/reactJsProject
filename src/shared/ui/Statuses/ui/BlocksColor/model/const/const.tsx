import cls from '../../../../../../styles/selectColor.module.scss';
import { AllStatuses } from '../../../../../../types/ui';
import {
  FrozenStatusIconSVG,
  InvalidStatusIcon,
  UsdcSVG,
  DollarSVG,
} from '@/shared/assets/svg';
import AllCardsBurnIcon from '@/shared/assets/svg/All-cards/AllCardsBurnIcon';

export const selectBackgroundInCardCost = (status: AllStatuses) => {
  if (status === 'Minted') return cls.gray;
  if (status === 'Burned') return cls.red;
  if (status === 'Listed') return cls.green;
  if (status === 'Frozen') return cls['white-blue'];
  if (
    status === 'Received' ||
    status === 'Shipped' ||
    status === 'Processing' ||
    status === 'Valid' ||
    status === 'Delivered' ||
    status === 'Transferred' ||
    status === 'PaymentReceived' ||
    status === 'AwaitingSign'
  )
    return cls.blue;
  return cls.orange;
};

export const currentSVG = (status: AllStatuses) => {
  if (status === 'Burned')
    return (
      <div className='burned'>
        <AllCardsBurnIcon
          fill='black'
          type='alternative'
          height='28'
          width='28'
        />
      </div>
    );
  if (status === 'Frozen') return <FrozenStatusIconSVG />;
  if (status === 'Invalid') return <InvalidStatusIcon />;
  if (status === 'Listed')
    return <UsdcSVG type='alternative' fill='#3EC880' secondFill='#173628' />;
  return <DollarSVG />;
};

export const currentSubTitle = (status: AllStatuses) => {
  if (
    status === 'Valid' ||
    status === 'New' ||
    status === 'Canceled' ||
    status === 'Shipped' ||
    status === 'Received' ||
    status === 'Processing'
  )
    return 'Value of box';
  if (status === 'Invalid') return 'Please contact support';
  if (status === 'Frozen') return 'Not available for any action';
  if (status === 'Burned') return 'pNFT returned to the owner';
  if (status === 'Listed') return 'Asking price';
  return 'Insured value';
};
