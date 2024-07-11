import { memo } from 'react';
import { SmileyXEyes } from '@/shared/assets/svg';

const NoDataWithFilterUI = () => (
  <div className='all-cards__cards__empty'>
    <SmileyXEyes />
    <span>No matches found for your request!</span>
  </div>
);

const NoDataWithFilter = memo(NoDataWithFilterUI);
export default NoDataWithFilter;
