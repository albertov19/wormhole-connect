import { CONFIG } from '@wormhole-foundation/wormhole-connect-sdk';
import { ChainsConfig, Icon } from '../types';

const { chains } = CONFIG.MAINNET;

export const MAINNET_CHAINS: ChainsConfig = {
  ethereum: {
    ...chains.ethereum!,
    displayName: 'Ethereum',
    explorerUrl: 'https://etherscan.io/',
    explorerName: 'Etherscan',
    gasToken: 'ETH',
    chainId: 1,
    icon: Icon.ETH,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  bsc: {
    ...chains.bsc!,
    displayName: 'BSC',
    explorerUrl: 'https://bscscan.com/',
    explorerName: 'BscScan',
    gasToken: 'BNB',
    chainId: 56,
    icon: Icon.BSC,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  polygon: {
    ...chains.polygon!,
    displayName: 'Polygon',
    explorerUrl: 'https://polygonscan.com/',
    explorerName: 'PolygonScan',
    gasToken: 'MATIC',
    chainId: 137,
    icon: Icon.POLYGON,
    automaticRelayer: true,
    maxBlockSearch: 1000,
  },
  avalanche: {
    ...chains.avalanche!,
    displayName: 'Avalanche',
    explorerUrl: 'https://snowtrace.io/',
    explorerName: 'Snowtrace',
    gasToken: 'AVAX',
    chainId: 43114,
    icon: Icon.AVAX,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  fantom: {
    ...chains.fantom!,
    displayName: 'Fantom',
    explorerUrl: 'https://ftmscan.com/',
    explorerName: 'FTMscan',
    gasToken: 'FTM',
    chainId: 250,
    icon: Icon.FANTOM,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  celo: {
    ...chains.celo!,
    displayName: 'Celo',
    explorerUrl: 'https://explorer.celo.org/mainnet/',
    explorerName: 'Celo Explorer',
    gasToken: 'CELO',
    chainId: 42220,
    icon: Icon.CELO,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  moonbeam: {
    ...chains.moonbeam!,
    displayName: 'Moonbeam',
    explorerUrl: 'https://moonscan.io/',
    explorerName: 'Moonscan',
    gasToken: 'GLMR',
    chainId: 1284,
    icon: Icon.GLMR,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  solana: {
    ...chains.solana!,
    displayName: 'Solana',
    explorerUrl: 'https://explorer.solana.com/',
    explorerName: 'Solana Explorer',
    gasToken: 'SOL',
    chainId: 0,
    icon: Icon.SOLANA,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  sui: {
    ...chains.sui!,
    displayName: 'Sui',
    explorerUrl: 'https://explorer.sui.io/',
    explorerName: 'Sui Explorer',
    gasToken: 'SUI',
    chainId: 0,
    icon: Icon.SUI,
    automaticRelayer: true,
    maxBlockSearch: 0,
  },
  aptos: {
    ...chains.aptos!,
    displayName: 'Aptos',
    explorerUrl: 'https://explorer.aptoslabs.com/',
    explorerName: 'Aptos Explorer',
    gasToken: 'APT',
    chainId: 0,
    icon: Icon.APT,
    automaticRelayer: false,
    maxBlockSearch: 0,
  },
  base: {
    ...chains.base!,
    displayName: 'Base',
    explorerUrl: 'https://basescan.org/',
    explorerName: 'BaseScan',
    gasToken: 'ETHbase',
    chainId: 8453,
    icon: Icon.BASE,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  osmosis: {
    ...chains.osmosis!,
    displayName: 'Osmosis',
    explorerUrl: 'https://mintscan.io/osmosis/',
    explorerName: 'MintScan',
    gasToken: 'OSMO',
    chainId: 'osmosis-1',
    icon: Icon.OSMO,
    automaticRelayer: false,
    maxBlockSearch: 0,
  },
  wormchain: {
    ...chains.wormchain!,
    displayName: 'Wormchain',
    explorerUrl: '',
    explorerName: '',
    gasToken: 'WORM',
    chainId: '',
    icon: Icon.OSMO,
    automaticRelayer: false,
    maxBlockSearch: 0,
  },
  arbitrum: {
    ...chains.arbitrum!,
    displayName: 'Arbitrum',
    explorerUrl: 'https://arbiscan.io/',
    explorerName: 'Arbitrum Explorer',
    gasToken: 'ETHarbitrum',
    chainId: 42161,
    icon: Icon.ARBITRUM,
    maxBlockSearch: 2000,
  },
  optimism: {
    ...chains.optimism!,
    displayName: 'Optimism',
    explorerUrl: 'https://optimistic.etherscan.io/',
    explorerName: 'Optimistic Etherscan',
    gasToken: 'ETHoptimism',
    chainId: 10,
    icon: Icon.OPTIMISM,
    maxBlockSearch: 2000,
  },
};
