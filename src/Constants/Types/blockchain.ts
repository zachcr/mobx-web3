export type EIP712Message = {
  types: any
  primaryType: string
  domain: any
  message: any
}

export enum AuthType {
  WALLET_CONNECT = 'walletconnect',
  INJECTED = 'injected',
  FORTMATIC = 'fortmatic',
  COINBASE = 'custom-walletlink',
  MEW_CONNECT = 'mewconnect',
  BSC_WALLET = 'custom-bsc-wallet'
}

export enum ProviderName {
  MetaMask = 'MetaMask',
  WalletConnect = 'WalletConnect',
  Trust = 'Trust',
  Fortmatic = 'Fortmatic',
  'MEW wallet' = 'MEW wallet',
  Cipher = 'Cipher', // Crashes
  Coinbase = 'Coinbase', // Doesn't support
  Dapper = 'Dapper', // Doesn't support
  Web3 = 'Web3', // [e.g. Opera] Error
  BinanceChain = 'BinanceChain',
  Unknown = 'Unknown'
}

export enum ProviderType {
  injected = 'injected',
  qrcode = 'qrcode',
  web = 'web',
  unknown = 'unknown'
}

export enum ClientName {
  UNKNOWN = 'UNKNOWN',
  ART_WALLET = 'ART_WALLET',
  OPIUM_WALLET = 'OPIUM_WALLET',
  OFI_WALLET = 'OFI_WALLET'
}

export type PersistentSession = {
  providerName: ProviderName
  providerType: ProviderType
  address: string
}

export type TCustomMetamaskChain = {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
}

export enum ENetwork {
  ETHEREUM = 'ETHEREUM',
  BINANCE = 'BINANCE',
  MATIC = 'MATIC'
}

export type TNativeCurrencies = {
  [key in ENetwork]: {
    name: string,
    symbol: string,
    decimals: number   
  }
}
