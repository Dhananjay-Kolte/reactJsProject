import { FC, memo, useCallback, useMemo } from 'react';
import './userActivityEvent.scss';
import { useNavigate } from 'react-router-dom';
import {
  NFTOrAccountEvents,
  toNFTRedirect,
  toProfileRedirect,
  toInboundShipmentRedirect,
  toOutboundShipmentRedirect,
} from './helpers/notificationFilteringCategories';
import {
  redirectToShipment,
  redirectToNFTOrAccount,
} from './helpers/selectRedirectFromNotifs';
import {
  notificationDescription,
  notificationDescriptionWithProps,
  notificationTitle,
  selectUserNotificationContent,
} from './helpers/selectUserNotificationContent';
import { markAsReadNotificationAction } from '../../model/actions/actions';
import {
  IRedirectNotification,
  IUserEventListProps,
} from '../../model/types/types';
import {
  getRouteNFTCard,
  getRoutePublicAccount,
  getRouteShipmentInbound,
  getRouteShipmentOutbound,
} from '@/shared/const/router';
import { dateToValidForm } from '@/shared/lib/helpers/beutifyDates';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Tooltip } from '@/shared/ui/Popovers';

export const UserActivityEvent: FC<IUserEventListProps> = memo(
  ({
    activity,
    viewType,
    eventType,
    inboundShipmentsActive,
    inboundShipmentsPast,
    outboundShipmentsActive,
    outboundShipmentsPast,
  }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentNetwork = environment.NETWORK;
    const {
      action,
      category,
      type,
      read,
      id,
      createdAt,
      event,
      shipmentId,
      nftQty,
      nftName,
      wallet,
      email,
      amount,
      receiverName,
      trackingId,
      txId,
      nftAddress,
    } = activity || {};

    const tooltipText = read === false ? 'Mark as Read' : 'Mark as Unread';

    const isActionRequired = action === true;

    const isNFTEvent = useMemo(
      () => toNFTRedirect.some(item => item === event),
      [event],
    );
    const isProfileEvent = useMemo(
      () => toProfileRedirect.some(item => item === event),
      [event],
    );
    const isShipmentEvent = useMemo(
      () =>
        toOutboundShipmentRedirect.some(item => item === event) ||
        toInboundShipmentRedirect.some(item => item === event),
      [event],
    );

    const markAsRead = () => {
      dispatch(markAsReadNotificationAction([{ id, read: !read }]));
    };

    const redirectToEvent = useCallback(() => {
      if (event === 'paymentFailed') {
        if (!read) dispatch(markAsReadNotificationAction([{ id, read: true }]));

        return window.open(
          `https://solana.fm/tx/${txId}?cluster=${
            currentNetwork === 'devnet' ? 'devnet' : 'mainnet'
          }`,
          '_blank',
        );
      }
      if (isNFTEvent) {
        const { link } = redirectToNFTOrAccount(
          event as string,
        ) as IRedirectNotification;
        if (link) {
          if (!read)
            dispatch(markAsReadNotificationAction([{ id, read: true }]));
          window.location.href = getRouteNFTCard(nftAddress!);
        }
      }
      if (isProfileEvent) {
        const { link } = redirectToNFTOrAccount(
          event as string,
        ) as IRedirectNotification;
        if (link) {
          if (!read)
            dispatch(markAsReadNotificationAction([{ id, read: true }]));
          window.location.href = getRoutePublicAccount(wallet!);
        }
      }
      if (isShipmentEvent) {
        const { link, param, typeShipment } = redirectToShipment(
          shipmentId,
          event as string,
          inboundShipmentsActive,
          inboundShipmentsPast,
          outboundShipmentsActive,
          outboundShipmentsPast,
        ) as IRedirectNotification;

        if (!!link && !!param && !!typeShipment) {
          if (!read)
            dispatch(markAsReadNotificationAction([{ id, read: true }]));

          if (shipmentId) {
            if (link === '/shipments/burned')
              return navigate(getRouteShipmentOutbound(), {
                state: param && {
                  activeOrPastRedirect: param,
                  shipmentId,
                  typeShipment,
                },
              });

            return navigate(getRouteShipmentInbound(), {
              state: param && {
                activeOrPastRedirect: param,
                shipmentId,
                typeShipment,
              },
            });
          }
        }
      }
    }, [
      currentNetwork,
      dispatch,
      event,
      id,
      inboundShipmentsActive,
      inboundShipmentsPast,
      isNFTEvent,
      isProfileEvent,
      isShipmentEvent,
      navigate,
      nftAddress,
      outboundShipmentsActive,
      outboundShipmentsPast,
      read,
      shipmentId,
      txId,
      wallet,
    ]);

    const selectTitle = () => {
      if (event)
        return NFTOrAccountEvents.some(item => item === event)
          ? notificationTitle.titleWithNFTOrAccount(
              event,
              nftQty as number,
              nftName as string,
              wallet as string,
              email as string,
              txId as string,
              amount as string | null,
              receiverName as string | null,
            )
          : notificationTitle.titleWithShipment(
              event,
              shipmentId as string,
              nftQty as number,
              trackingId as string,
            );

      return '';
    };
    return viewType === 'dashboard' ? (
      <div className={`user-activity-event-dashboard ${eventType}`}>
        <div className='user-activity-event-dashboard__left-block'>
          <Tooltip
            placement='bottom'
            titleText={tooltipText}
            disableHover={isActionRequired}
            classNameTooltip='height_popover'
          >
            <div
              className={`user-activity-event-dashboard__left-block__icon ${eventType} ${
                read ? 'readed' : 'unreaded'
              }`}
              onClick={() => !isActionRequired && markAsRead()}
            >
              {selectUserNotificationContent.iconAction(category)}
            </div>
          </Tooltip>
          <div
            className='user-activity-event-dashboard__left-block__text-block'
            onClick={redirectToEvent}
          >
            <div className='user-activity-event-dashboard__left-block__text-block__title'>
              {selectTitle()}
            </div>
            <div className='user-activity-event-dashboard__left-block__text-block__ordinary'>
              {(event &&
                (event === 'outboundShipmentCreated' ||
                event === 'offerAccepted' ||
                event === 'offerReceived' ||
                event === 'offerCreated' ||
                event === 'cardSold'
                  ? notificationDescriptionWithProps(
                      event,
                      nftQty as number,
                      amount as string,
                      nftName as string,
                    )
                  : notificationDescription(event))) ||
                ''}
            </div>
          </div>
        </div>
        <div className='user-activity-event-dashboard__date'>
          <div className='user-activity-event-dashboard__date__text'>
            {dateToValidForm(createdAt)}
          </div>
          <div className='user-activity-event-dashboard__date__icon'>
            {selectUserNotificationContent.iconStatus(type, event, action)}
          </div>
        </div>
      </div>
    ) : (
      <div className={`user-activity-event-modal ${eventType}`}>
        <Tooltip
          placement='bottom'
          titleText={tooltipText}
          disableHover={isActionRequired}
          classNameTooltip='height_popover'
        >
          <div
            className={`user-activity-event-modal__left-block ${eventType} ${
              read ? 'readed' : 'unreaded'
            }`}
            onClick={() => !isActionRequired && markAsRead()}
          >
            {selectUserNotificationContent.iconAction(category)}
          </div>
        </Tooltip>
        <div className='user-activity-event-modal__right-block'>
          <div
            className='user-activity-event-modal__right-block__title'
            onClick={redirectToEvent}
          >
            {selectTitle()}
          </div>
          <div className='user-activity-event-modal__right-block__ordinary'>
            {(event &&
              (event === 'outboundShipmentCreated' ||
              event === 'offerAccepted' ||
              event === 'offerReceived' ||
              event === 'offerCreated' ||
              event === 'cardSold'
                ? notificationDescriptionWithProps(
                    event,
                    nftQty as number,
                    amount as string,
                    nftName as string,
                  )
                : notificationDescription(event))) ||
              ''}
          </div>
          <div className='user-activity-event-modal__right-block__date'>
            <div className='user-activity-event-modal__right-block__date__icon'>
              {selectUserNotificationContent.iconStatus(type, event, action)}
            </div>
            <div className='user-activity-event-modal__right-block__date__text'>
              {dateToValidForm(createdAt)}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

// import { FC, memo, useCallback, useMemo } from 'react';
// import './userActivityEvent.scss';
// import { useNavigate } from 'react-router-dom';
// import {
//   NFTOrAccountEvents,
//   toNFTRedirect,
//   toProfileRedirect,
//   toInboundShipmentRedirect,
//   toOutboundShipmentRedirect,
// } from './helpers/notificationFilteringCategories';
// import {
//   redirectToShipment,
//   redirectToNFTOrAccount,
// } from './helpers/selectRedirectFromNotifs';
// import {
//   notificationDescription,
//   notificationDescriptionWithProps,
//   notificationTitle,
//   selectUserNotificationContent,
// } from './helpers/selectUserNotificationContent';
// import cls from './userActivityEvent.module.scss';
// import { markAsReadNotificationAction } from '../../model/actions/actions';
// import {
//   IRedirectNotification,
//   IUserEventListProps,
// } from '../../model/types/types';
// import {
//   getRouteNFTCard,
//   getRoutePublicAccount,
//   getRouteShipmentInbound,
//   getRouteShipmentOutbound,
// } from '@/shared/const/router';
// import { classNames } from '@/shared/lib/classNames/classNames';
// import { dateToValidForm } from '@/shared/lib/helpers/beutifyDates';
// import { useAppDispatch } from '@/shared/lib/hooks/redux';
// import { Tooltip } from '@/shared/ui/Popovers';

// export const UserActivityEvent: FC<IUserEventListProps> = memo(
//   ({
//     activity,
//     viewType,
//     eventType,
//     inboundShipmentsActive,
//     inboundShipmentsPast,
//     outboundShipmentsActive,
//     outboundShipmentsPast,
//   }) => {
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
//     const currentNetwork = environment.NETWORK;
//     const {
//       action,
//       category,
//       type,
//       read,
//       id,
//       createdAt,
//       event,
//       shipmentId,
//       nftQty,
//       nftName,
//       wallet,
//       email,
//       amount,
//       receiverName,
//       trackingId,
//       txId,
//       nftAddress,
//     } = activity || {};

//     const tooltipText = read === false ? 'Mark as Read' : 'Mark as Unread';

//     const isActionRequired = action === true;

//     const isNFTEvent = useMemo(
//       () => toNFTRedirect.some(item => item === event),
//       [event],
//     );
//     const isProfileEvent = useMemo(
//       () => toProfileRedirect.some(item => item === event),
//       [event],
//     );
//     const isShipmentEvent = useMemo(
//       () =>
//         toOutboundShipmentRedirect.some(item => item === event) ||
//         toInboundShipmentRedirect.some(item => item === event),
//       [event],
//     );

//     const markAsRead = () => {
//       dispatch(markAsReadNotificationAction([{ id, read: !read }]));
//     };

//     const redirectToEvent = useCallback(() => {
//       if (event === 'paymentFailed') {
//         if (!read) dispatch(markAsReadNotificationAction([{ id, read: true }]));

//         return window.open(
//           `https://solana.fm/tx/${txId}?cluster=${
//             currentNetwork === 'devnet' ? 'devnet' : 'mainnet'
//           }`,
//           '_blank',
//         );
//       }
//       if (isNFTEvent) {
//         const { link } = redirectToNFTOrAccount(
//           event as string,
//         ) as IRedirectNotification;
//         if (link) {
//           if (!read)
//             dispatch(markAsReadNotificationAction([{ id, read: true }]));
//           window.location.href = getRouteNFTCard(nftAddress!);
//         }
//       }
//       if (isProfileEvent) {
//         const { link } = redirectToNFTOrAccount(
//           event as string,
//         ) as IRedirectNotification;
//         if (link) {
//           if (!read)
//             dispatch(markAsReadNotificationAction([{ id, read: true }]));
//           window.location.href = getRoutePublicAccount(wallet!);
//         }
//       }
//       if (isShipmentEvent) {
//         const { link, param, typeShipment } = redirectToShipment(
//           shipmentId,
//           event as string,
//           inboundShipmentsActive,
//           inboundShipmentsPast,
//           outboundShipmentsActive,
//           outboundShipmentsPast,
//         ) as IRedirectNotification;

//         if (!!link && !!param && !!typeShipment) {
//           if (!read)
//             dispatch(markAsReadNotificationAction([{ id, read: true }]));

//           if (shipmentId) {
//             if (link === '/shipments/burned')
//               return navigate(getRouteShipmentOutbound(), {
//                 state: param && {
//                   activeOrPastRedirect: param,
//                   shipmentId,
//                   typeShipment,
//                 },
//               });

//             return navigate(getRouteShipmentInbound(), {
//               state: param && {
//                 activeOrPastRedirect: param,
//                 shipmentId,
//                 typeShipment,
//               },
//             });
//           }
//         }
//       }
//     }, [
//       currentNetwork,
//       dispatch,
//       event,
//       id,
//       inboundShipmentsActive,
//       inboundShipmentsPast,
//       isNFTEvent,
//       isProfileEvent,
//       isShipmentEvent,
//       navigate,
//       nftAddress,
//       outboundShipmentsActive,
//       outboundShipmentsPast,
//       read,
//       shipmentId,
//       txId,
//       wallet,
//     ]);

//     const selectTitle = () => {
//       if (event)
//         return NFTOrAccountEvents.some(item => item === event)
//           ? notificationTitle.titleWithNFTOrAccount(
//               event,
//               nftQty as number,
//               nftName as string,
//               wallet as string,
//               email as string,
//               txId as string,
//               amount as string | null,
//               receiverName as string | null,
//             )
//           : notificationTitle.titleWithShipment(
//               event,
//               shipmentId as string,
//               nftQty as number,
//               trackingId as string,
//             );

//       return '';
//     };
//     return viewType === 'dashboard' ? (
//       <div
//         className={classNames(cls['user-activity-event-dashboard'], {}, [
//           // cls[`${eventType}`],
//         ])}
//       >
//         <div className={cls['left-block']}>
//           <Tooltip
//             placement='bottom'
//             titleText={tooltipText}
//             disableHover={isActionRequired}
//             classNameTooltip={cls.height_popover}
//           >
//             <div
//               className={classNames(
//                 cls.icon,
//                 { [cls.read]: read, [cls.notRead]: !read },
//                 [cls[`${eventType}`]],
//               )}
//               onClick={() => !isActionRequired && markAsRead()}
//             >
//               {selectUserNotificationContent.iconAction(category)}
//             </div>
//           </Tooltip>
//           <div className={cls['text-block']} onClick={redirectToEvent}>
//             <div className={cls.title}>{selectTitle()}</div>
//             <div className={cls.ordinary}>
//               {(event &&
//                 (event === 'outboundShipmentCreated' ||
//                 event === 'offerAccepted' ||
//                 event === 'offerReceived' ||
//                 event === 'offerCreated' ||
//                 event === 'cardSold'
//                   ? notificationDescriptionWithProps(
//                       event,
//                       nftQty as number,
//                       amount as string,
//                       nftName as string,
//                     )
//                   : notificationDescription(event))) ||
//                 ''}
//             </div>
//           </div>
//         </div>
//         <div className={cls.date}>
//           <div className={cls.text}>{dateToValidForm(createdAt)}</div>
//           <div>
//             {selectUserNotificationContent.iconStatus(type, event, action)}
//           </div>
//         </div>
//       </div>
//     ) : (
//       <div
//         className={classNames(cls['user-activity-event-modal'], {}, [
//           // cls[`${eventType}`],
//         ])}
//       >
//         <Tooltip
//           placement='bottom'
//           titleText={tooltipText}
//           disableHover={isActionRequired}
//           classNameTooltip={cls.height_popover}
//         >
//           <div
//             className={classNames(
//               cls.leftBlock,
//               { [cls.read]: read, [cls.notRead]: !read },
//               [cls[`${eventType}`]],
//             )}
//             onClick={() => !isActionRequired && markAsRead()}
//           >
//             {selectUserNotificationContent.iconAction(category)}
//           </div>
//         </Tooltip>
//         <div className={cls.rightBlock}>
//           <div className={cls.titleModal} onClick={redirectToEvent}>
//             {selectTitle()}
//           </div>
//           <div className={cls.ordinaryModal}>
//             {(event &&
//               (event === 'outboundShipmentCreated' ||
//               event === 'offerAccepted' ||
//               event === 'offerReceived' ||
//               event === 'offerCreated' ||
//               event === 'cardSold'
//                 ? notificationDescriptionWithProps(
//                     event,
//                     nftQty as number,
//                     amount as string,
//                     nftName as string,
//                   )
//                 : notificationDescription(event))) ||
//               ''}
//           </div>
//           <div className={cls.dateModal}>
//             <div>
//               {selectUserNotificationContent.iconStatus(type, event, action)}
//             </div>
//             <div className={cls.textModal}>{dateToValidForm(createdAt)}</div>
//           </div>
//         </div>
//       </div>
//     );
//   },
// );
