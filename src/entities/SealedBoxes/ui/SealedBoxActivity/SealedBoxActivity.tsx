import { memo, useState } from 'react';
import cls from './SealedBoxActivity.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CollapseDetail } from '@/shared/ui/Collapse';

export interface SealedBoxActivityProps {
  className?: string;
}
export const SealedBoxActivity = memo((props: SealedBoxActivityProps) => {
  const { className } = props;
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classNames(cls.SealedBoxActivity, {}, [className])}>
      <CollapseDetail handleClick={handleClick} open={open} title='Activity'>
        test
      </CollapseDetail>
    </div>
  );
});
