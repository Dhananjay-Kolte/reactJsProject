import { FC, memo } from 'react';
import cls from './listingStatus.module.scss';
import { HStack } from '../../../Stack';
import { LightningSVG } from '@/shared/assets/svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IListingStatusProps {
  listing?: IListing | null;
  status: IStatusCards;
  withText: boolean;
  className?: string;
}

export const ListingStatus: FC<IListingStatusProps> = memo(props => {
  const { listing, status, withText, className } = props;

  const mods = {
    [cls['without-text']]: !withText,
  };

  return (
    listing &&
    status !== 'Burned' && (
      <div className={classNames(cls['listing-status'], {}, [className])}>
        <HStack
          justify='center'
          gap={0.125}
          className={classNames(cls.active, mods, [])}
        >
          <LightningSVG />
          {!!withText && <span>Listed</span>}
        </HStack>
      </div>
    )
  );
});
