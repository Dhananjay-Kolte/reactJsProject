import { FC } from 'react';
import './cookiesAccept.scss';
import { setCookiesAcceptanceAction } from '../../model/actions/actions';
import { CookieSVG } from '@/shared/assets/svg';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';

export const CookiesAccept: FC = () => {
  const dispatch = useAppDispatch();

  const setCookiesAccepted = () =>
    dispatch(setCookiesAcceptanceAction({ cookies: true }));

  return (
    <div className='cookies-container'>
      <div className='cookies-container__content'>
        <div className='cookies-container__content__icon'>
          <CookieSVG />
        </div>
        <div className='cookies-container__content__text'>
          <div className='cookies-container__content__text__title'>
            Our cookie policy
          </div>
          <div className='cookies-container__content__text__ordinary'>
            We use cookies to ensure that we give you the best experience on our
            website. We also use cookies to ensure we show you advertising that
            is relevant to you.
          </div>
        </div>
        <div className='cookies-container__content__button'>
          <Button
            typeButton='primary'
            text='Got it!'
            size='small'
            onClick={setCookiesAccepted}
          />
        </div>
      </div>
    </div>
  );
};
