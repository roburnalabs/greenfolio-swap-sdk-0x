import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUM = 1,
  MAINNET = 56,
  TESTNET = 97,
  POLYGON = 137,
  ROBURNA = 156,
  ROBURNA_TESTNET = 157,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS = '0xA2162dd03fDE5A2917D40D70ff716badc6E6092a'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS, // mainnet
  [ChainId.TESTNET]: '0x56a81157Ec5E7Ef8302D0D7661a20b241284a00b', // testnet
  [ChainId.ETHEREUM]: '0x56a81157Ec5E7Ef8302D0D7661a20b241284a00b', //
  [ChainId.POLYGON]: '0x56a81157Ec5E7Ef8302D0D7661a20b241284a00b', //
  [ChainId.ROBURNA]: '0x56a81157Ec5E7Ef8302D0D7661a20b241284a00b', //
  [ChainId.ROBURNA_TESTNET]: '0x56a81157Ec5E7Ef8302D0D7661a20b241284a00b', //
}

export const INIT_CODE_HASH = '0x25fc9abd249367c2b1a83eb77cb521484b8ecf6e0b2205a97a888eef6c2fd0a1'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0x25fc9abd249367c2b1a83eb77cb521484b8ecf6e0b2205a97a888eef6c2fd0a1', // testnet
  [ChainId.ETHEREUM]: '0x25fc9abd249367c2b1a83eb77cb521484b8ecf6e0b2205a97a888eef6c2fd0a1', //
  [ChainId.POLYGON]: '0x25fc9abd249367c2b1a83eb77cb521484b8ecf6e0b2205a97a888eef6c2fd0a1', //
  [ChainId.ROBURNA]: '0x25fc9abd249367c2b1a83eb77cb521484b8ecf6e0b2205a97a888eef6c2fd0a1', //
  [ChainId.ROBURNA_TESTNET]: '0x25fc9abd249367c2b1a83eb77cb521484b8ecf6e0b2205a97a888eef6c2fd0a1', //
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9970)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
