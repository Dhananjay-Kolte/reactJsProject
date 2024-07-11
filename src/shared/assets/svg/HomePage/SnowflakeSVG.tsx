import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Snowflake: FC<ISvgProps> = ({
  width = '64',
  height = '64',
  fill = '#5BEAFF',
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M36.5543 23.2092L52.0758 9.34828L57.172 15.054L41.6505 28.9149L62.4278 30.0898L61.9937 37.7279L41.2186 36.5566L55.0797 52.0782L49.3732 57.1743L35.5116 41.6531L34.3352 62.4274L26.6993 61.9958L27.8709 41.2213L12.3498 55.0827L7.25324 49.3755L22.7743 35.5141L2 34.3375L2.42921 26.6991L23.2061 27.8734L9.34446 12.3522L15.0516 7.25564L28.9127 22.7773L30.0873 2L37.7279 2.43186L36.5543 23.2092Z'
      fill={fill}
    />
  </svg>
);
const SnowflakeSVG = memo(Snowflake);
export default SnowflakeSVG;
