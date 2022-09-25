import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. With Fast, Secure Network.'),
  bodyText: t('Trade any token on Core Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.shadowswap.xyz/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'ETH', alt: t('ETH token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'USD1', alt: t('USD1 token') },
    ],
  },
})

export const nftammSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Introducing A Decentralised NFT Marketplace on Core Network.'),
  bodyText: t(
    'ShadowSwap AMM NFT Marketplace allows users to trade NFTs in Liquidity Pool thereby Fostering More Defi to NFTs. Changing how users perceive NFTs and NFT Trading',
  ),
  reverse: false,
  primaryButton: {
    to: '/NotFound',
    text: t('Coming Soon'),
    external: false,
  },
  secondaryButton: {
    to: 'https://shadow-11.gitbook.io/shadowswap/products/amm-nft-marketplace',
    text: t('Learn More'),
    external: true,
  },
  images: {
    path: '/images/home/nftamm/',
    attributes: [{ src: 'NFT', alt: t('NFT Pic') }],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with your crypto.'),
  bodyText: t('ShadowSwap makes it easy to make your crypto work for you. Let your Shadows work for you.'),
  reverse: true,
  primaryButton: {
    to: '/NotFound',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.shadowswap.xyz/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [{ src: 'shadowearn', alt: t('Shadow with shdw token') }],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Cast Your Shadow on your Finances.'),
  bodyText: t(
    'Shadow token is at the heart of the ShadowSwap ecosystem. Buy it, win it, farm it, spend it, stake it, or even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xa48496B0a392007eA9E0354cc804D98444Ecc227',
    text: t('Buy SHDW'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.shadowswap.xyz/tokenomics/shadow',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'star-bottom-right', alt: t('Small 3d star') },
      { src: 'star-top-right', alt: t('Small 3d star') },
      { src: 'shdwcoin', alt: t('SHDW token') },
      { src: 'star-top-left', alt: t('Small 3d star') },
    ],
  },
})
