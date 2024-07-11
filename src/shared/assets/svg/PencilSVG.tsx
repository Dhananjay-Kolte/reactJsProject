import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Pencil: FC<ISvgProps> = ({ width = '24', height = '24', type }) =>
  type === 'alternative' ? (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 3.09001L9.23 0.315006C9.13923 0.218393 9.03016 0.140791 8.90913 0.0867136C8.7881 0.032636 8.65752 0.00316206 8.525 5.81465e-06C8.38989 -0.00443931 8.25535 0.0194038 8.13 0.0700058C8.00536 0.123604 7.89176 0.199899 7.795 0.295006L6.145 1.94001L0.295 7.79501C0.199023 7.88615 0.123964 7.99704 0.075 8.12001C0.0254735 8.24057 -4.28711e-06 8.36966 5.41084e-10 8.50001L5.41084e-10 11.295C0.0011164 11.5598 0.107206 11.8133 0.295 12C0.481675 12.1878 0.735212 12.2939 1 12.295H3.795C4.05979 12.2939 4.31332 12.1878 4.5 12L12 4.50001C12.1863 4.31264 12.2908 4.05919 12.2908 3.79501C12.2908 3.53082 12.1863 3.27737 12 3.09001ZM10 5.09001L7.205 2.29501L8.5 1.00001L11.295 3.79501L10 5.09001Z'
        fill='white'
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.9694 8.69202C18.901 8.52061 18.7976 8.36541 18.6656 8.2364L15.5325 5.10327C15.4002 4.97391 15.2459 4.86915 15.0769 4.7939C14.7272 4.65073 14.3353 4.65073 13.9856 4.7939C13.8175 4.86785 13.6649 4.97281 13.5356 5.10327L5.09813 13.5408C4.97024 13.672 4.869 13.8267 4.8 13.9964C4.72603 14.1649 4.68772 14.3468 4.6875 14.5308V17.6751C4.68898 18.0477 4.83761 18.4045 5.10102 18.6679C5.36442 18.9313 5.72125 19.0799 6.09375 19.0814H9.23812C9.60939 19.0806 9.96527 18.933 10.2281 18.6708L18.6656 10.2333C18.7982 10.1014 18.9033 9.94467 18.975 9.77202C19.0491 9.60066 19.0874 9.41592 19.0874 9.22921C19.0874 9.04249 19.0491 8.85776 18.975 8.6864L18.9694 8.69202ZM9.12 17.3939H6.375V14.6489L12.2812 8.74265L15.0262 11.4876L9.12 17.3939ZM16.2188 10.312L13.4738 7.55015L14.5312 6.49265L17.2762 9.23765L16.2188 10.312Z'
        fill='#939393'
      />
    </svg>
  );
const PencilSVG = memo(Pencil);
export default PencilSVG;