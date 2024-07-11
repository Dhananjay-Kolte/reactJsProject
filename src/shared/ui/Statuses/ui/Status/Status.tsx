import { FC, HTMLAttributes, memo, useMemo } from 'react';
import cls from './status.module.scss';
import { HStack } from '../../../Stack';
import { MintedStatusSVG } from '@/shared/assets/svg';
import AllCardsBurnIcon from '@/shared/assets/svg/All-cards/AllCardsBurnIcon';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface IStatusProps extends HTMLAttributes<HTMLDivElement> {
  status: IStatusCards | 'Default' | 'Burned';
  noText?: boolean;
}

export const Status: FC<IStatusProps> = memo(props => {
  const { status = 'Default', noText = false, ...otherProps } = props;

  const currentTitle = useMemo(() => {
    if (status === 'Transferred') return 'Finished';
    if (status === 'AwaitingSign') return 'AwaitingSign';
    if (status === 'Rejected') return 'Not Eligible';
    if (status === 'RequestedBack') return 'Requested Back';
    if (status === 'Burned') return 'Burned';
    if (status === 'Minted') return 'Verified';
    return 'Default';
  }, [status]);

  const mods = {
    [cls[status]]: true,
  };

  return (
    <HStack
      gap={0.25}
      className={classNames(cls.status, mods, [])}
      {...otherProps}
    >
      {status === 'Transferred' && <MintedStatusSVG />}
      {status === 'Burned' && <AllCardsBurnIcon width='16' height='16' />}
      {!noText && <span>{currentTitle}</span>}
    </HStack>
  );
});
