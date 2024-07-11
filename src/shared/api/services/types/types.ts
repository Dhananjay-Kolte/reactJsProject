export interface ICardIdProp {
  cardId?: string;
  nftAddress?:string
}

export interface ICreateListingOrOfferTx extends ICardIdProp {
  currency: ICurrency;
  price: number;
}

export interface ICreateCancelListingTx {
  tokenMint : string;
  seller?:String;
  coin:String
  listingId?: string;
}
export interface ICreateUpdateListingTx extends ICreateCancelListingTx {
  price?: number;
  newPrice?:number;
  currency?: ICurrency;
  seller?: String;
}

export interface ICreateCancelOrAcceptOfferTx {
  offerId?: string;
  nftAddress?:string;
  buyer?:string;
  coin?:string;
  itemName?:string;
  price?:number | string;
}

export interface ICreateUpdateOfferTx extends ICreateCancelOrAcceptOfferTx {
  price: number;
  currency?: ICurrency;
}

export interface IGetListingFees {
  nftAddress: string;
  currency: string;
  price: number;
}

export interface ITX {
  tx: string;
}
export interface ISealedBoxTX {
  ctxId: string;
  tx: string;
}

export interface ICreateListBoxTx {
  chunkId: string;
  price: number;
  qty: number;
  currency: ICurrency;
}
export interface ICreateUpdateListBoxTx extends ICreateCancelListingTx {
  price: number;
  qty: number;
  currency: ICurrency;
}
