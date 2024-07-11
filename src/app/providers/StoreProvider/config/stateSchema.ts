import { EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
  Store,
} from 'redux';
import { createReducerManager } from './reducerManager';
import { ActivityInterface } from '@/entities/Activity';
import { ICardInitialState } from '@/entities/AllCards';
import { AuthInterface } from '@/entities/Auth';
import { ICartInitialState } from '@/entities/Cart';
import { ICookiesState } from '@/entities/Cookies';
import { UserInfoSchema } from '@/entities/Headers';
import { IShipmentInboundState } from '@/entities/InboundShipment';
import { MyProfileInterface } from '@/entities/MyProfile';
import { INotificationsInitialState } from '@/entities/Notifications';
import { IShipmentOutboundState } from '@/entities/OutboundShipment';
import { PublicProfileInterface } from '@/entities/PublicProfile';
import { ISealedBoxInitialState } from '@/entities/SealedBoxes';
import { ShipmentAddresses } from '@/entities/ShipmentAddresses';
import { MagicLinkSchema } from '@/features/MagicLinkModal';
import { SendFormSchema } from '@/features/SendSolanaForm';
import { IBurnedInitialState } from '@/pages/BurnedCardsPage';
import { MPSealedBoxesSchema } from '@/pages/MarketPlaceSealedBoxPage';
import { ICardInitialStateMP } from '@/pages/Marketplace';
import { rtkApi } from '@/shared/api/rtkApi';
import { MySealedBoxesSchema } from '@/widgets/MySealedBoxes';

interface IProfiles {
  myProfile: MyProfileInterface;
  publicProfile: PublicProfileInterface;
  shipmentAddress: ShipmentAddresses;
  cookies: ICookiesState;
}

interface IAuth {
  authMagicLink: MagicLinkSchema;
  authWallet: AuthInterface;
}

interface IShipment {
  inboundShipment: IShipmentInboundState;
  outboundShipment: IShipmentOutboundState;
}

export interface StateSchema {
  profile: IProfiles;
  auth: IAuth;
  shipment: IShipment;
  cards: ICardInitialState;
  burned: IBurnedInitialState;
  cart: ICartInitialState;
  activity: ActivityInterface;
  notifications: INotificationsInitialState;
  marketplace: ICardInitialStateMP;
  sealedBox: ISealedBoxInitialState;
  userInfo: UserInfoSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async
  mySealedBoxes?: MySealedBoxesSchema;
  marketSealedBox?: MPSealedBoxesSchema;
  sendForm?: SendFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type TStore = {
  reducerManager: ReturnType<typeof createReducerManager>;
} & Store;
