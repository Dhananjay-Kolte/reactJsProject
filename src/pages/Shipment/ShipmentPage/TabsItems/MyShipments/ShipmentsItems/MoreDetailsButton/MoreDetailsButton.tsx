import { FC } from 'react';
import './moreDetailsButton.scss';
import { IMoreDetailsButtonProps } from './types';
import { ExpandDownSVG, ExpandUpSVG } from '@/shared/assets/svg/miniButtons';
import { IconButton } from '@/shared/ui/Buttons';

const MoreDetailsButton: FC<IMoreDetailsButtonProps> = ({
  expand,
  setExpand,
}) => {
  const toggleExpand = () => setExpand(!expand);

  return (
    <div className='more-button' onClick={toggleExpand}>
      <p>more details</p>
      <IconButton>{expand ? <ExpandUpSVG /> : <ExpandDownSVG />}</IconButton>
    </div>
  );
};

export default MoreDetailsButton;
