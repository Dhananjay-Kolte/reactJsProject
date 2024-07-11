import { FC, memo } from 'react';
import '../groupsCards.scss';
import { ISkeletonProps } from './types';
import { useLazyLoadingObserver } from '@/shared/lib/hooks/useLazyLoadingObserver';
import { Spinner } from '@/shared/ui/Loaders';

const SkeletonsUI: FC<ISkeletonProps> = ({
  page,
  changeSelectFilter,
  setIsScroll,
  isLoading,
  total,
}) => {
  const { currentRef } = useLazyLoadingObserver(
    page,
    setIsScroll,
    changeSelectFilter,
    isLoading,
    total,
  );

  return (
    <div className='loadingCards'>
      <div ref={currentRef} className='list-table__tb__loader'>
        <Spinner size='3rem' />
      </div>
    </div>
  );
};
const Skeletons = memo(SkeletonsUI);
export default Skeletons;
