import { FC, memo, useMemo } from 'react';
import cls from './statusShipments.module.scss';
import { HStack } from '../../../Stack';
import HashTagSVG from '@/shared/assets/svg/HashTagSVG';
import {
  ArrowDownLeftSVG,
  ArrowUpRightSVG,
} from '@/shared/assets/svg/HeaderPopover';
import CloseDarkSVG from '@/shared/assets/svg/buttons/CloseDarkSVG';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IStatusShipmentsProps {
  number: string;
  status: IStatusShipmentInbound | IStatusShipmentOutbound;
}

export const StatusShipments: FC<IStatusShipmentsProps> = memo(props => {
  const { status, number } = props;

  const selectShipmentTitle = useMemo(() => {
    if (status === 'New') return 'Waiting for Tracking #';
    if (status === 'Shipped') return 'In Transit';
    if (status === 'Received') return 'Received';
    if (status === 'Processing') return 'Processing';
    if (status === 'PaymentPending') return 'Payment Pending';
    if (status === 'PaymentReceived') return 'Payment Received';
    if (status === 'PartlyMinted' || status === 'FullyMinted')
      return 'Completed';
    return 'Canceled';
  }, [status]);

  const selectIcon = useMemo(() => {
    if (status === 'Canceled') return <CloseDarkSVG type='alternative' />;
    if (
      status === 'Pending' ||
      status === 'PaymentPending' ||
      status === 'Delivered' ||
      status === 'Processing' ||
      status === 'Shipped' ||
      status === 'PaymentReceived' ||
      status === 'Received' ||
      status === ''
    )
      return <ArrowDownLeftSVG />;
    return <ArrowUpRightSVG />;
  }, [status]);

  const mods = {
    [cls[status]]: true,
  };

  return (
    <HStack className={cls['status-shipments']}>
      <HStack className={classNames(cls.left, mods, [])}>
        {selectIcon}
        <p>{selectShipmentTitle}</p>
      </HStack>
      <HStack className={cls.right}>
        <HashTagSVG />
        <p>{number}</p>
      </HStack>
    </HStack>
  );
});
