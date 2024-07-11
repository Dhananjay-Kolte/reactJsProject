import { memo, ReactNode } from 'react';
import cls from './CollapseDetails.module.scss';
import { classNames } from '../../../lib/classNames/classNames';
import { IconButton } from '../../Buttons';
import { HStack, VStack } from '../../Stack';
import { CollapseUi } from '../CollapseUi/CollapseUi';
import { BottomArrowSVG, TopArrowSVG } from '@/shared/assets/svg/miniButtons';

export interface CollapseDetailsProps {
  className?: string;
  handleClick: () => void;
  open: boolean;
  children: ReactNode;
  title: string;
  collapsClass?: string;
}

const CollapseDetailsUI = (props: CollapseDetailsProps) => {
  const { className, handleClick, open, children, title, collapsClass } = props;
  return (
    <VStack max className={classNames(cls.CollapseDetails, {}, [className])}>
      <HStack
        max
        justify='between'
        align='center'
        className={classNames(cls.header, { [cls.open]: open })}
        onClick={handleClick}
      >
        <span className={cls.title}>{title}</span>
        <IconButton>{open ? <TopArrowSVG /> : <BottomArrowSVG />}</IconButton>
      </HStack>
      <CollapseUi open={open} className={classNames('', {}, [collapsClass])}>
        <div className={classNames(cls.InfoData)}>{children}</div>
      </CollapseUi>
      <div />
    </VStack>
  );
};

export const CollapseDetail = memo(CollapseDetailsUI);
