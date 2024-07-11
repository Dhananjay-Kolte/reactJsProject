export {
  setCardsOutboundShipmentsActiveSlice,
  setCardsOutboundShipmentsPastSlice,
} from './model/slice/slice';
export {
  getOutboundShipment,
  getOutboundShipmentIsLoading,
  getOutboundShipmentById,
  getCreateOutboundShipment,
  getAllActiveOutboundShipments,
  getAllPastOutboundShipments,
} from './model/selectors/getOutboundShipment';
export { getAllOutboundShipmentsAction } from './model/actions/actions';
export {
  watcherCreateOutboundShipment,
  watcherGetOutboundShipmentId,
  watcherGetAllOutboundShipments,
} from './model/saga/saga';
export {
  outboundShipmentReducer,
  setClearShipmentsSlice,
} from './model/slice/slice';
export type { IShipmentOutboundState } from './model/slice/slice';
export type {
  IFieldsCreateOutboundShipment,
  IUpdateOutboundShipment,
  IOutboundShipmentTinyRadio,
} from './model/actions/actions';
