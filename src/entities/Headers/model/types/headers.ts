export interface Balance {
  SOL: string;
  USDC: string;
}

export interface UserInfo {
  appleId?: string | null;
  bio?: string | null;
  createdAt: string;
  facebookId?: string | null;
  googleId?: string | null;
  name: string;
  personalSite?: string | null;
  photo: string | null;
  twitterUsername?: string | null;
  wallet: string;
  activities: number;
  listings: number;
  offersMade: number;
  offersReceived: number;
  balance: Balance;
}

export interface UserInfoSchema {
  isLoading: boolean;
  error?: string;
  data?: UserInfo;
}
