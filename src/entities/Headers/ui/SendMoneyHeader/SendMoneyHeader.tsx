import { Dispatch, SetStateAction, memo } from 'react';
import cls from './SendMoneyHeader.module.scss';
import BackIcon from '@/shared/assets/svg/HeaderPopover/backIcon.svg';
import CloseIcon from '@/shared/assets/svg/HeaderPopover/close.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface SendMoneyHeaderProps {
  className?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOpenModal: () => void;
  title: string;
}
export const SendMoneyHeader = memo((props: SendMoneyHeaderProps) => {
  const { className, setOpenModal, setOpen, title } = props;
  return (
    <VStack
      max
      className={classNames(cls.SendMoneyHeader, {}, [className])}
      align='center'
    >
      <HStack max justify='between'>
        <BackIcon className={cls.icons} onClick={() => setOpen(false)} />
        <CloseIcon className={cls.icons} onClick={setOpenModal} />
      </HStack>
      <div className={cls.title}>{title}</div>
    </VStack>
  );
});
