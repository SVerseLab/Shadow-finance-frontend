import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.shadowswap.xyz/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@shadowswap',
      },
      {
        label: t('CoreDao'),
        href: 'https://coredao.org/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Guides'),
        href: 'https://docs.shadowswap.xyz/get-started',
      },
      {
        label: t('Getting Started with Core'),
        href: 'https://core-documents.notion.site/User-Guide-for-Core-TestNet-c1e9162fe33a440daa5718ccad580eef',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/shadowswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.shadowswap.xyz',
      },
      {
        label: t('Core Network Docs'),
        href: 'https://docs.coredao.org/core-white-paper-v1.0.5/',
      },
      {
        label: t('Sverse Lab'),
        href: 'https://docs.shadowswap.xyz/hiring/join-the-shadow-devs',
      },
    ],
  },
]
