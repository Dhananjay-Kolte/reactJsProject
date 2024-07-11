import { FC } from 'react';
import './footerBlock.scss';
import { IFooterBlockProps } from './types';
import { Checkbox, Button } from '@/shared/ui/Buttons';

const FooterBlock: FC<IFooterBlockProps> = ({
  currentTip,
  setCurrentTip,
  handleModalClose,
  checked,
  setChecked,
}) => {
  const handleCheck = () => setChecked(!checked);

  const increaseCurrent = () => {
    if (currentTip < 4) setCurrentTip(currentTip + 1);
    if (currentTip === 4) handleModalClose();
  };

  const decreaseCurrent = () => {
    if (currentTip > 1) setCurrentTip(currentTip - 1);
  };

  return (
    <div className='footer-container-tips'>
      <div className='footer-container-tips__check'>
        <Checkbox
          checked={checked}
          id='footer-container-tips'
          onChange={handleCheck}
        >
          {'Don’t show me again'}
        </Checkbox>
      </div>
      <div className='footer-container-tips__right'>
        <Button
          typeButton='secondary'
          text='Back'
          disabled={currentTip === 1}
          size='small'
          onClick={decreaseCurrent}
        />
        <Button
          typeButton='primary'
          text={currentTip === 4 ? 'Done' : 'Next'}
          size='small'
          onClick={increaseCurrent}
        />
      </div>
    </div>
  );
};

export default FooterBlock;
