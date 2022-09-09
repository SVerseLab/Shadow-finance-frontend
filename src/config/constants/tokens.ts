import { ChainId, Token, WtCORE } from '@pancakeswap/sdk'

const CAKE_MAINNET = new Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

const SHDW_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xa48496B0a392007eA9E0354cc804D98444Ecc227',
  18,
  'SHDW',
  'ShadowSwap Token',
  'https://shadowswap.xyz/',
)

const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

const CUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: CUSD_TESTNET,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: SHDW_TESTNET,
}

const BUSD_MAINNET = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xD874e58641862aFA37d5d1169D86C4fca465f3B2',
  18,
  'sUSDC',
  'CORE USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.BSC]: BUSD_MAINNET,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
}

export const bscTokens = {
  wbnb: WtCORE[ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'BNB',
    'BNB',
    'https://www.binance.com/',
  ),
  cake: CAKE_MAINNET,
  gmi: new Token(ChainId.BSC, '0x93D8d25E3C9A847a5Da79F79ecaC89461FEcA846', 18, 'GMI', 'Gamifi', 'https://gamifi.gg/'),
  tlos: new Token(
    ChainId.BSC,
    '0xb6C53431608E626AC81a9776ac3e999c5556717c',
    18,
    'TLOS',
    'Telos',
    'https://www.telos.net/',
  ),
  beta: new Token(
    ChainId.BSC,
    '0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28',
    18,
    'BETA',
    'Beta Finance',
    'https://betafinance.org',
  ),
  nft: new Token(ChainId.BSC, '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D', 6, 'NFT', 'APENFT', 'https://apenft.org'),
  stephero: new Token(
    ChainId.BSC,
    '0xE8176d414560cFE1Bf82Fd73B986823B89E4F545',
    18,
    'HERO',
    'StepHero',
    'https://stephero.io/',
  ),
  busd: BUSD_MAINNET,
  dai: new Token(
    ChainId.BSC,
    '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  usdt: new Token(
    ChainId.BSC,
    '0x55d398326f99059fF775485246999027B3197955',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  btcb: new Token(
    ChainId.BSC,
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    18,
    'BTCB',
    'Binance BTC',
    'https://bitcoin.org/',
  ),
  eth: new Token(
    ChainId.BSC,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'ETH',
    'Binance-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
  usdc: new Token(
    ChainId.BSC,
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    18,
    'USDC',
    'Binance-Peg USD Coin',
    'https://www.centre.io/usdc',
  ),

  syrup: new Token(
    ChainId.BSC,
    '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
}

export const bscTestnetTokens = {
  wbnb: WtCORE[ChainId.BSC_TESTNET],
  shdw: SHDW_TESTNET,
  usdc: USDC_TESTNET,
  syrup: new Token(
    ChainId.BSC_TESTNET,
    '0xb4e4127551265ff0f3b6C98e591520E6eEff3F39',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  bake: new Token(
    ChainId.BSC_TESTNET,
    '0xE513121F9908ecB99AC8ef58897f4fF61AFEb4f3',
    18,
    'sETH',
    'sEthereum Token',
    'https://www.bakeryswap.org/',
  ),
  sBTC: new Token(
    ChainId.BSC_TESTNET,
    '0x7028CEF69C028122400D5D0240227DcEA1750848',
    18,
    'sBTC',
    'Core BTC Token',
    'https://www.BTC.org/',
  ),
  sDai: new Token(
    ChainId.BSC_TESTNET,
    '0xD35899389E5B0ec6E9262E012aC64dD02d2203C2',
    18,
    'sDai',
    'sDai Token',
    'https://www.sDai.org/',
  ),
  sUSDT: new Token(
    ChainId.BSC_TESTNET,
    '0x3786495F5d8a83B7bacD78E2A0c61ca20722Cce3',
    6,
    'sUSDT',
    'sUSDT Token',
    'https://www.sUSDT.org/',
  ),
  WtCORE: new Token(
    ChainId.BSC_TESTNET,
    '0xf6077b8DAcEc85be11d8D2dA04e1705668985Bcf',
    18,
    'WtCORE',
    'WtCORE Token',
    'https://www.coredao.org/',
  ),
}
