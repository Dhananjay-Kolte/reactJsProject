import { FC, memo } from 'react';

const NoDataPublicPageUI: FC = () => (
  <div className='all-cards__cards__empty'>
    <span>No items to display</span>
  </div>
);

const NoDataPublicPage = memo(NoDataPublicPageUI);
export default NoDataPublicPage;
