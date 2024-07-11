export interface AuthSchema {
  isLoading: boolean;
  data?: any;
  error?: string;
}

export interface IUserSignature {
  userActive: boolean;
  message: string;
}

export interface IUserLogin {
  email: string;
  id: string;
  bio?: string;
  name?: string;
  site?: string;
  twitter?: string;
  wallet?: string;
}

export interface IWalletLogin {
  wallet: string;
  reload?: boolean;
  email?: string;
  isMagicLink?: boolean;
}

export interface IFieldPublicKey {
  length: number;
  negative: number;
  red: null;
  words: number[];
}

export interface IFieldFeedbackAction extends Partial<IMessage> {
  name?: string;
  email: string;
}
