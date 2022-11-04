import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  // TrophyIcon,
  // TrophyFillIcon,
  // NftIcon,
  // NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
// import { nftsBaseUrl } from 'views/Nft/market/constants'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const filterItemBySupportChainId = (item, chainId) => {
  return !chainId || !item.supportChainIds ? true : item.supportChainIds?.includes(chainId)
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        {
          label: t('Gnosis Safe'),
          href: 'https://safe.test.btcs.network/app',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Bridge'),
          href: 'https://shadowswap.xyz/404',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].filter((item) => filterItemBySupportChainId(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      supportChainIds: [ChainId.BSC, ChainId.BSC_TESTNET],
      status: { text: t('Mainnet'), color: 'warning' },
      disabled: true,
      items: [
        {
          label: t('Farms'),
          href: '/farms',
          disabled: true,
          status: { text: t('Mainnet'), color: 'warning' },
        },
        {
          label: t('Pools'),
          href: '/pools',
          disabled: true,
          status: { text: t('Mainnet'), color: 'warning' },
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    // {
    //   label: t('Win'),
    //   href: '/prediction',
    //   icon: TrophyIcon,
    //   fillIcon: TrophyFillIcon,
    //   supportChainIds: [ChainId.BSC],
    //   items: [
    //     {
    //       label: t('Trading Competition'),
    //       href: '/competition',
    //       hideSubNav: true,
    //     },
    //     {
    //       label: t('Prediction (BETA)'),
    //       href: '/prediction',
    //     },
    //     {
    //       label: t('Lottery'),
    //       href: '/lottery',
    //     },
    //     {
    //       label: t('Pottery (BETA)'),
    //       href: '/pottery',
    //     },
    //   ],
    // },
    // {
    //   label: t('NFT'),
    //   href: `${nftsBaseUrl}`,
    //   icon: NftIcon,
    //   fillIcon: NftFillIcon,
    //   supportChainIds: [ChainId.BSC],
    //   items: [
    //     {
    //       label: t('Overview'),
    //       href: `${nftsBaseUrl}`,
    //     },
    //     {
    //       label: t('Collections'),
    //       href: `${nftsBaseUrl}/collections`,
    //     },
    //     {
    //       label: t('Activity'),
    //       href: `${nftsBaseUrl}/activity`,
    //     },
    //   ],
    // },
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      supportChainIds: [ChainId.BSC, ChainId.BSC_TESTNET],
      items: [
        {
          label: t('Info'),
          href: '/info',
          disabled: true,
          status: { text: t('Mainnet'), color: 'warning' },
        },
        {
          label: t('IDO'),
          href: '/ifo',
          disabled: true,
          status: { text: t('Mainnet'), color: 'warning' },
        },
        {
          label: t('Voting'),
          href: '/voting',
          disabled: true,
          status: { text: t('Mainnet'), color: 'warning' },
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://medium.com/shadowswap',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: 'https://shadow-11.gitbook.io/shadowswap/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].filter((item) => filterItemBySupportChainId(item, chainId))

export default config
