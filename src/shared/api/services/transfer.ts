import { post } from '../index';
import urls from '../urls';

interface IGetTransferInstructionsProps {
  nftAddress: string;
  wallet?: string;
  email?: string;
}

interface IApproveTransactionProps extends IGetTransferInstructionsProps {
  transaction: string;
}

export const getTransferInstructionsRequest = (
  payload: IGetTransferInstructionsProps,
) => post(urls.cards.transferNFTCard, payload);

export const sendInvitationRequest = (payload: { email: string }) =>
  post(urls.profile.sendInvitation, payload);

export const approveTransactionRequest = (payload: IApproveTransactionProps) =>
  post(urls.cards.approveNFTTransfer, payload);
