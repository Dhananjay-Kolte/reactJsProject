import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const HoverPanelCardArchive: FC<ISvgProps> = ({
  width = '22',
  height = '16',
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 22 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V4.25C0.5 4.64782 0.658035 5.02936 0.93934 5.31066C1.22064 5.59196 1.60218 5.75 2 5.75V14C2 14.3978 2.15804 14.7794 2.43934 15.0607C2.72064 15.342 3.10218 15.5 3.5 15.5H18.5C18.8978 15.5 19.2794 15.342 19.5607 15.0607C19.842 14.7794 20 14.3978 20 14V5.75C20.3978 5.75 20.7794 5.59196 21.0607 5.31066C21.342 5.02936 21.5 4.64782 21.5 4.25V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM13.25 9.5H8.75C8.55109 9.5 8.36032 9.42098 8.21967 9.28033C8.07902 9.13968 8 8.94891 8 8.75C8 8.55109 8.07902 8.36032 8.21967 8.21967C8.36032 8.07902 8.55109 8 8.75 8H13.25C13.4489 8 13.6397 8.07902 13.7803 8.21967C13.921 8.36032 14 8.55109 14 8.75C14 8.94891 13.921 9.13968 13.7803 9.28033C13.6397 9.42098 13.4489 9.5 13.25 9.5ZM20 4.25H2V2H20V4.25Z'
      fill='#121212'
    />
  </svg>
);
const HoverPanelCardArchiveSVG = memo(HoverPanelCardArchive);
export default HoverPanelCardArchiveSVG;