import { FC, memo, MouseEvent } from 'react';
import './burnedCardHover.scss';
import { IBurnedCardHoverProps } from './types';
import HoverPanelShareSVG from '@/shared/assets/svg/All-cards/HoverPanelShareSVG';
import { getItemShare } from '@/shared/lib/helpers/getItemsMenu';
import { Tooltip } from '@/shared/ui/Popovers';
import { Status } from '@/shared/ui/Statuses';

const BurnedCardHoverUI: FC<IBurnedCardHoverProps> = ({
  showSocials,
  shareSocial,
  address,
}) => {
  const socials = getItemShare(
    `Check out this item on Collector ${`${window.location.origin}/assets/solana/${address}`} via @collector`,
    'hover-card',
    `${window.location.origin}/assets/solana/${address}`,
  );

  const selectionControls = (e: MouseEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <div className='card-panel-burned' onClick={selectionControls}>
      <div className='card-panel-burned__icons'>
        <Status status='Burned' />
        <Tooltip placement='bottom' titleText='Share'>
          <div
            className='card-panel-burned__icons__element'
            onClick={shareSocial}
          >
            <HoverPanelShareSVG />
          </div>
        </Tooltip>
      </div>
      {!!showSocials && (
        <div className='card-panel-burned__socials'>
          {!!socials &&
            socials.map(({ content, Icon, onClick }, index) => (
              <div
                key={`${content}-${index}`}
                className='card-panel-burned__socials__item'
                onClick={onClick}
              >
                {Icon}
                <div className='card-panel-burned__socials__item__name'>
                  {content}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
const BurnedCardHover = memo(BurnedCardHoverUI);
export default BurnedCardHover;
