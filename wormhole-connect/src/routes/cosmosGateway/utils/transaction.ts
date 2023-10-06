import { logs as cosmosLogs, IndexedTx } from '@cosmjs/stargate';
import {
  ChainId,
  ChainName,
  searchCosmosLogs,
} from '@wormhole-foundation/wormhole-connect-sdk';
import { getCosmWasmClient } from '../utils';
import { IBCTransferInfo } from '../types';

export function getIBCTransferInfoFromLogs(tx: IndexedTx): IBCTransferInfo {
  const logs = cosmosLogs.parseRawLog(tx.rawLog);
  const packetSeq = searchCosmosLogs('packet_sequence', logs);
  const packetTimeout = searchCosmosLogs('packet_timeout_timestamp', logs);
  const packetSrcChannel = searchCosmosLogs('packet_src_channel', logs);
  const packetDstChannel = searchCosmosLogs('packet_dst_channel', logs);
  if (!packetSeq || !packetTimeout || !packetSrcChannel || !packetDstChannel) {
    throw new Error('Missing packet information in transaction logs');
  }

  return {
    sequence: packetSeq,
    timeout: packetTimeout,
    srcChannel: packetSrcChannel,
    dstChannel: packetDstChannel,
  };
}

export async function findDestinationIBCTransferTx(
  destChain: ChainName | ChainId,
  ibcInfo: IBCTransferInfo,
): Promise<IndexedTx | undefined> {
  const wormchainClient = await getCosmWasmClient(destChain);
  const destTx = await wormchainClient.searchTx([
    { key: 'recv_packet.packet_sequence', value: ibcInfo.sequence },
    { key: 'recv_packet.packet_timeout_timestamp', value: ibcInfo.timeout },
    { key: 'recv_packet.packet_src_channel', value: ibcInfo.srcChannel },
    { key: 'recv_packet.packet_dst_channel', value: ibcInfo.dstChannel },
  ]);
  if (destTx.length === 0) {
    return undefined;
  }
  if (destTx.length > 1) {
    throw new Error(
      `Multiple transactions found for the same packet on chain ${destChain}`,
    );
  }
  return destTx[0];
}
