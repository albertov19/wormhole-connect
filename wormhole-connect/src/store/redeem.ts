import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TransferInfo } from 'utils/sdkv2';
import { TransferDestInfo } from 'routes';
import { DeliveryStatus } from 'utils/sdk';

export enum MessageType {
  BRIDGE = 1,
  RELAY = 3,
}

export interface RedeemState {
  txData?: TransferInfo;
  sendTx: string;
  redeemTx: string;
  transferComplete: boolean;
  isVaaEnqueued: boolean;
  isInvalidVaa: boolean;
  route?: string;
  transferDestInfo: TransferDestInfo | undefined;
  deliveryStatus: DeliveryStatus | undefined;
  isResumeTx: boolean;
  timestamp: number;
}

const initialState: RedeemState = {
  txData: undefined,
  sendTx: '',
  redeemTx: '',
  transferComplete: false,
  isVaaEnqueued: false,
  isInvalidVaa: false,
  route: undefined,
  transferDestInfo: undefined,
  deliveryStatus: undefined,
  isResumeTx: false,
  timestamp: 0,
};

export const redeemSlice = createSlice({
  name: 'redeem',
  initialState,
  reducers: {
    setTxDetails: (
      state: RedeemState,
      { payload }: PayloadAction<TransferInfo>,
    ) => {
      state.txData = payload;
    },
    setSendTx: (state: RedeemState, { payload }: PayloadAction<string>) => {
      state.sendTx = payload;
    },
    setRedeemTx: (state: RedeemState, { payload }) => {
      state.redeemTx = payload;
    },
    setRoute: (state: RedeemState, { payload }) => {
      state.route = payload;
    },
    setTransferComplete: (
      state: RedeemState,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.transferComplete = payload;
    },
    setIsVaaEnqueued: (
      state: RedeemState,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isVaaEnqueued = payload;
    },
    setTransferDestInfo: (
      state: RedeemState,
      { payload }: PayloadAction<TransferDestInfo | undefined>,
    ) => {
      state.transferDestInfo = payload;
    },
    clearRedeem: (state: RedeemState) => {
      Object.keys(state).forEach((key) => {
        // @ts-ignore
        state[key] = initialState[key];
      });
    },
    setDeliveryStatus: (
      state: RedeemState,
      { payload }: PayloadAction<DeliveryStatus>,
    ) => {
      state.deliveryStatus = payload;
    },
    setInvalidVaa: (
      state: RedeemState,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isInvalidVaa = payload;
    },
    setIsResumeTx: (
      state: RedeemState,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isResumeTx = payload;
    },
    setTimestamp: (state: RedeemState, { payload }: PayloadAction<number>) => {
      state.timestamp = payload;
    },
  },
});

export const {
  setTxDetails,
  setSendTx,
  setRedeemTx,
  setTransferComplete,
  setIsVaaEnqueued,
  setInvalidVaa,
  setTransferDestInfo,
  clearRedeem,
  setRoute,
  setDeliveryStatus,
  setIsResumeTx,
  setTimestamp,
} = redeemSlice.actions;

export default redeemSlice.reducer;
