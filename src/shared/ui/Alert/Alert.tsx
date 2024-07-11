import { FC, HTMLAttributes, memo, useMemo } from 'react';
import cls from './alert.module.scss';
import { HStack, VStack } from '../Stack';
import {
  SuccessCircleSVG,
  WarningTriangleSVG,
  ErrorCircleSVG,
  InfoCircleSVG,
} from '@/shared/assets/svg/AlertsIcons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TStatusAlert } from '@/shared/types/ui';

export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  size: 'small' | 'large';
  title?: string;
  text: string;
  status: TStatusAlert;
}

export const Alert: FC<IAlertProps> = memo(props => {
  const { className, title, text, status, size, ...otherProps } = props;

  const selectAlertIcon = useMemo(() => {
    if (status === 'success') return <SuccessCircleSVG />;
    if (status === 'warning') return <WarningTriangleSVG />;
    if (status === 'info') return <InfoCircleSVG />;
    return <ErrorCircleSVG />;
  }, [status]);

  const mods = {
    [cls[size]]: true,
    [cls[status]]: true,
  };

  return (
    <HStack
      gap={0.5}
      align='start'
      className={classNames(cls.alert, mods, [className])}
      {...otherProps}
    >
      {selectAlertIcon}
      <VStack gap={0.25}>
        {!!title && size === 'large' && <h3>{title}</h3>}
        <p>{text}</p>
      </VStack>
    </HStack>
  );
});
