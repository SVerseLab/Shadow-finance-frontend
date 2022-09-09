import { Token, ChainId } from '@pancakeswap/sdk'
// import { bscTokens } from './tokens'
import { CAKE_BNB_LP_MAINNET } from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.BSC, CAKE_BNB_LP_MAINNET, 18, 'CAKE-BNB LP')

const ifos: Ifo[] = [
  // {
  //   id: 'peel',
  //   address: '0x35Bb6Dd4E8C63491057c32621c8cDdE43BabE201',
  //   isActive: true,
  //   name: 'Meta Apes ($PEEL)',
  //   poolBasic: {
  //     saleAmount: '10,000,000 PEEL',
  //     raiseAmount: '$400,000',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.2,
  //   },
  //   poolUnlimited: {
  //     saleAmount: '40,000,000 PEEL',
  //     raiseAmount: '$1,600,000',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.8,
  //   },
  //   currency: bscTokens.cake,
  //   token: bscTokens.peel,
  //   releaseBlockNumber: 19964276,
  //   campaignId: '511300000',
  //   articleUrl:
  //     'https://pancakeswap.finance/voting/proposal/bafkreibomj5nilvyckdro7ztmm62syt55dcfnonxs63ji6hm2ijq35lru4',
  //   tokenOfferingPrice: 0.04,
  //   version: 3.2,
  //   twitterUrl: 'https://twitter.com/MetaApesGame',
  //   description:
  //     'Meta Apes is a free-to-play, play-and-earn massively multiplayer online (MMO) strategy game designed for mobile and the first game to launch on the BNB Sidechain with their own dedicated chain, Ape Chain.',
  //   vestingTitle: 'Utilize $PEEL for gas and governance in the Meta Apes ecosystem!',
  // },
  // {
  //   id: 'trivia',
  //   address: '0x23C520d8227524E2cDD00360358864fF3fFC36b4',
  //   isActive: false,
  //   name: 'TRIVIA',
  //   poolBasic: {
  //     saleAmount: '10,000,000 TRIVIA',
  //     raiseAmount: '$350,000',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.2,
  //   },
  //   poolUnlimited: {
  //     saleAmount: '40,000,000 TRIVIA',
  //     raiseAmount: '$1,400,000',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.8,
  //   },
  //   currency: bscTokens.cake,
  //   token: bscTokens.trivia,
  //   releaseBlockNumber: 19273145,
  //   campaignId: '511200000',
  //   articleUrl:
  //     'https://pancakeswap.finance/voting/proposal/bafkreihrc2d55vrowbn2oajzs77ffv73g4hzch2e7wulnuccmbwl5u4hvq',
  //   tokenOfferingPrice: 0.035,
  //   version: 3.2,
  //   telegramUrl: 'https://t.me/TriviansGlobal',
  //   twitterUrl: 'https://twitter.com/PlayTrivians',
  //   description:
  //     'Trivian is a trivia gaming platform with different game modes such as multiplayer mode, single player mode, 1v1 games, instant play, scheduled tournaments, and live shows … all while earning TRIVIA tokens!',
  //   vestingTitle: 'Earn $TRIVIA For Each Question You Answer Correctly',
  // },
]

export default ifos
