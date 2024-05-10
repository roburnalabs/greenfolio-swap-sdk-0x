import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    ETHEREUM = 1,
    MAINNET = 56,
    TESTNET = 97,
    POLYGON = 137,
    ROBURNA = 156,
    ROBURNA_TESTNET = 157
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xA2162dd03fDE5A2917D40D70ff716badc6E6092a";
export declare const FACTORY_ADDRESS_MAP: {
    56: string;
    97: string;
    1: string;
    137: string;
    156: string;
    157: string;
};
export declare const INIT_CODE_HASH = "0x25fc9abd249367c2b1a83eb77cb521484b8ecf6e0b2205a97a888eef6c2fd0a1";
export declare const INIT_CODE_HASH_MAP: {
    56: string;
    97: string;
    1: string;
    137: string;
    156: string;
    157: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
