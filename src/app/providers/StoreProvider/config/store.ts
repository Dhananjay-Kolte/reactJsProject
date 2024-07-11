import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  PreloadedState,
  Reducer,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';
import { createReducerManager } from './reducerManager';
import { saga } from './rootSaga';
import { StateSchema, ThunkExtraArg, TStore } from './stateSchema';
import { activityReducer } from '@/entities/Activity';
import { cardReducer } from '@/entities/AllCards';
import { authReducer } from '@/entities/Auth';
import { cartReducer } from '@/entities/Cart';
import { cookiesReducer } from '@/entities/Cookies';
import { userInfoReducer } from '@/entities/Headers';
import { InboundShipmentReducer } from '@/entities/InboundShipment';
import { myProfileReducer } from '@/entities/MyProfile';
import { notificationsReducer } from '@/entities/Notifications';
import { outboundShipmentReducer } from '@/entities/OutboundShipment';
import { publicProfileReducer } from '@/entities/PublicProfile';
import { sealedBoxReducer } from '@/entities/SealedBoxes';
import { shipmentAddressesReducer } from '@/entities/ShipmentAddresses';
import { magicLinkReducer } from '@/features/MagicLinkModal';
import { burnedCardReducer } from '@/pages/BurnedCardsPage';
import { marketplaceReducer } from '@/pages/Marketplace';
import app from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
  initialState?: PreloadedState<CombinedState<NoInfer<StateSchema>>>,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const sagaMiddleware = createSagaMiddleware();
  const isLocal =
    environment.APP_ENV === 'local' || environment.APP_ENV === 'dev';

  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    activity: activityReducer,
    auth: combineReducers({
      authMagicLink: magicLinkReducer,
      authWallet: authReducer,
    }),
    burned: burnedCardReducer,
    cards: cardReducer,
    cart: cartReducer,
    marketplace: marketplaceReducer,
    notifications: notificationsReducer,
    profile: combineReducers({
      cookies: cookiesReducer,
      myProfile: myProfileReducer,
      publicProfile: publicProfileReducer,
      shipmentAddress: shipmentAddressesReducer,
    }),
    sealedBox: sealedBoxReducer,
    shipment: combineReducers({
      inboundShipment: InboundShipmentReducer,
      outboundShipment: outboundShipmentReducer,
    }),
    userInfo: userInfoReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage: localStorage,
      whitelist: ['auth', 'marketplace', 'shipment'],
    },
    reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
  );
  const extraArg: ThunkExtraArg = { api: app };

  const store = configureStore({
    devTools: isLocal,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: !isLocal,
        serializableCheck: !isLocal,
        thunk: { extraArgument: extraArg },
      })
        .concat(rtkApi.middleware)
        .concat(sagaMiddleware),
    preloadedState: initialState,
    reducer: persistedReducer,
  }) as TStore;

  store.reducerManager = reducerManager;
  const persist = persistStore(store);
  sagaMiddleware.run(saga);

  return { persist, store };
}

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>;
