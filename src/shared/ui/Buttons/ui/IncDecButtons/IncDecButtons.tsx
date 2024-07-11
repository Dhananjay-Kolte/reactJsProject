import { FC, memo, Dispatch, SetStateAction } from 'react';
import cls from './IncDecButtons.module.scss';
import { PTag } from '../../../Ptags/Ptags';
import { HStack } from '../../../Stack';
import { IconButton } from '../IconButton/IconButton';
import { MinusSVG, PlusSVG } from '@/shared/assets/svg/buttons';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IncDecButtonsProps {
  className?: string;
  maximumValue: number;
  minimumValue: number;
  quantity: number;
  updateQuantity: Dispatch<SetStateAction<number>>;
}

export const IncDecButtons: FC<IncDecButtonsProps> = memo(
  (props: IncDecButtonsProps) => {
    const { className, updateQuantity, maximumValue, minimumValue } = props;
    let { quantity } = props;

    const isIncDisabled = quantity === minimumValue;
    const isDecDisabled = quantity === maximumValue;

    const incrementValue = () => {
      updateQuantity(++quantity);
    };

    const decrementValue = () => {
      updateQuantity(--quantity);
    };

    return (
      <HStack
        justify='between'
        align='center'
        className={classNames(cls.IncDecButtonsWrapper, {}, [className])}
      >
        <IconButton
          size='32'
          type='button'
          className={cls.buttonItem}
          disabled={isIncDisabled}
          onClick={decrementValue}
        >
          <MinusSVG />
        </IconButton>
        <PTag tag='value'>{quantity}</PTag>
        <IconButton
          size='32'
          className={cls.buttonItem}
          disabled={isDecDisabled}
          onClick={incrementValue}
        >
          <PlusSVG />
        </IconButton>
      </HStack>
    );
  },
);
