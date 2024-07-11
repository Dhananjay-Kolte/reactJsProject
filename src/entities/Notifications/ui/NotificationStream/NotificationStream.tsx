import { ReadableStreamDefaultReadDoneResult } from 'stream/web';
import { ReactNode, useCallback, useEffect, useState } from 'react';
// import { getNotificationsAction } from '../../model/actions/actions';
import { useFetchTestsMutation } from '../../api/getActivete';
import {
  setAllNotificationsSlice,
  setResetNotificationsSlice,
} from '../../model/slice/notifications';
import { getIsAuth } from '@/entities/Auth';
import { NotificationStreamContext } from '@/shared/lib/context/NotificationStreamContext';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';

interface NotificationsProps {
  children: ReactNode;
}

export const NotificationStream = ({ children }: NotificationsProps) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getIsAuth);
  const isLogin = !!localStorage.getItem('isAuth');
  const reqLimit = 0;
  let reqMade = 0;

  const api = environment.API_URL;

  const [isStreaming, setIsStreaming] = useState(false);
  const [getTest, { data, isSuccess }] = useFetchTestsMutation();
  useEffect(() => {
    if (isLogin && isAuth && !data) getTest();

    if (isSuccess) dispatch(setAllNotificationsSlice(data || []));
  }, [data, dispatch, getTest, isAuth, isLogin, isSuccess]);

  const notificationsStream = useCallback(async () => {
    if (!isStreaming && isLogin && isAuth && reqMade <= reqLimit) {
      setIsStreaming(true);
      try {
        reqMade++;
        const stream = await fetch(`${api}notifications/subscribe`, {
          credentials: 'include',
          headers: {
            'Access-Control-Allow-Origin': api || '',
            Connection: 'keep-alive',
            allowHTTP1ForStreamingUpload: 'true',
            mode: 'cors',
          },
        }).catch(error => {
          console.error(error.response, 'stream-error');
          return setIsStreaming(false);
        });
        const streamReader = stream?.body
          ?.pipeThrough(new TextDecoderStream())
          .getReader();

        while (stream) {
          const { value, done } =
            // eslint-disable-next-line no-await-in-loop
            (await streamReader?.read()) as ReadableStreamDefaultReadDoneResult;
          if (done) {
            setIsStreaming(false);
            break;
          }
          if ((JSON.stringify(value)?.length > 10) as boolean) {
            if (isLogin && isAuth && isStreaming) getTest();

            dispatch(setAllNotificationsSlice(data || []));
          }
        }
      } catch (e) {
        console.log('Subscribe stream axios error:', e);
        setIsStreaming(false);
      }
    }
  }, [isStreaming, reqMade, api, isLogin, isAuth, getTest, dispatch, data]);

  useEffect(() => {
    if (!isAuth && !isLogin) setIsStreaming(false);
  }, [isAuth, isLogin]);

  if (isLogin && isAuth) notificationsStream();

  useEffect(
    () => () => {
      localStorage.clear();
      setIsStreaming(false);
      setResetNotificationsSlice();
    },
    [dispatch],
  );

  return (
    <NotificationStreamContext.Provider value=''>
      {children}
    </NotificationStreamContext.Provider>
  );
};
