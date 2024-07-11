import { MouseEvent, memo } from 'react';
import cls from './buyNow.module.scss';
import { LightningSVG } from '@/shared/assets/svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';
import { getCurrentImage } from '@/shared/lib/helpers/getCurrentImage';
import { HStack } from '@/shared/ui/Stack';

export interface BuyNowHoversProps {
  className?: string;
  price?: string | number | null;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
export const BuyNowHovered = memo((props: BuyNowHoversProps) => {
  const { className, onClick, price } = props;
  return (
    <div
      className={classNames(cls.BuyNowHovered, {}, [className])}
      onClick={onClick}
    >
      <HStack gap={0.5} justify='center' align='center' className={cls.btn}>
        <LightningSVG width='16px' height='16px' fill='#2EF098' />
        <p>Buy now</p>
      </HStack>
      <HStack gap={0.25} align='center' className={cls.insurance}>
        {!!price && getCurrentImage('USDC')}
        {!!price && convertNumberInK(price, 'roundUp')}
      </HStack>
    </div>
  );
});
