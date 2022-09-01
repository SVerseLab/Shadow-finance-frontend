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
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('CAKE token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with your crypto.'),
  bodyText: t('ShadowSwap makes it easy to make your crypto work for you. Let your Shadows work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
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
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('CAKE token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
