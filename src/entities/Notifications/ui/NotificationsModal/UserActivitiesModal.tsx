import { FC, memo, useCallback, useMemo } from 'react';
import './userActivitiesModal.scss';
import { useNavigate } from 'react-router-dom';
// import { useFetchNotificationsQuery } from '../../api/getActivete';
import { getAllNotifications } from '../../model/selectors/getNotifications';
import { INotificationsModalProps } from '../../model/types/types';
import { UserActivityEvent } from '../UserEvent/UserActivityEvent';
import PinSVG from '@/shared/assets/svg/PinSVG';
import { getRouteNotifications } from '@/shared/const/router';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { sortByUserAction } from '@/shared/lib/notificationsHelpers/notificationsHelpers';
import { Modal } from '@/shared/ui/Modal';

export const UserActivitiesModal: FC<INotificationsModalProps> = memo(
  ({
    open,
    setOpenNotifications,
    inboundShipmentsActive,
    inboundShipmentsPast,
    outboundShipmentsActive,
    outboundShipmentsPast,
  }) => {
    const navigate = useNavigate();

    const allNotifications = useAppSelector(getAllNotifications);
    // const { data, isLoading } = useFetchNotificationsQuery({});

    const sortedByActionsArray = useMemo(() => {
      if (allNotifications)
        return [...allNotifications]?.sort(sortByUserAction);
      return [];
    }, [allNotifications]);

    const redirectToAllNotifications = useCallback(() => {
      setOpenNotifications(false);
      navigate(getRouteNotifications());
    }, [navigate, setOpenNotifications]);

    return (
      <Modal
        isOverlay={false}
        isOpen={open}
        blur={false}
        onClose={() => setOpenNotifications(false)}
      >
        <div className='user-activity-modal'>
          <div className='user-activity-modal__header'>
            <div className='user-activity-modal__header__title'>
              Notifications
            </div>
            <div
              className='user-activity-modal__header__text-button'
              onClick={redirectToAllNotifications}
            >
              view all
            </div>
          </div>
          <div className='user-activity-modal__content'>
            {sortedByActionsArray.length ? (
              <div>
                {sortedByActionsArray.some(
                  ({ action }: INotification) => action === true,
                ) && (
                  <div className='user-activity-modal__content__requires-header'>
                    <div className='user-activity-modal__content__requires-header__icon'>
                      <PinSVG />
                    </div>
                    <div className='user-activity-modal__content__requires-header__text'>
                      Requires your action
                    </div>
                  </div>
                )}
                {sortedByActionsArray?.map(activity => (
                  <UserActivityEvent
                    key={activity?.id}
                    activity={activity}
                    inboundShipmentsActive={inboundShipmentsActive}
                    inboundShipmentsPast={inboundShipmentsPast}
                    outboundShipmentsActive={outboundShipmentsActive}
                    outboundShipmentsPast={outboundShipmentsPast}
                    viewType='modal'
                    eventType={
                      activity.action === true ? 'required' : 'default'
                    }
                  />
                ))}
              </div>
            ) : (
              <div className='user-activity-modal__content__empty'>
                No activity yet!
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
  },
);
