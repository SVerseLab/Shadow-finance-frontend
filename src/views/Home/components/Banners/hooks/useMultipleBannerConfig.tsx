import { ReactElement, useMemo } from 'react'
import shuffle from 'lodash/shuffle'
import CompetitionBanner from '../CompetitionBanner'
import FarmListingBanner from '../FarmListingBanner'
import ListingBanner from '../ListingBanner'
import PerpetualBanner from '../PerpetualBanner'
import useIsRenderLotteryBanner from './useIsRenderLotteryBanner'
import useIsRenderCompetitionBanner from './useIsRenderCompetitionBanner'

interface IBannerConfig {
  shouldRender: boolean
  banner: ReactElement
}

/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */
export const useMultipleBannerConfig = () => {
  const isRenderLotteryBanner = useIsRenderLotteryBanner()
  const isRenderCompetitionBanner = useIsRenderCompetitionBanner()

  return useMemo(() => {
    const NO_SHUFFLE_BANNERS: IBannerConfig[] = [
      {
        shouldRender: true,
        banner: <FarmListingBanner />,
      },
    ]

    const SHUFFLE_BANNERS: IBannerConfig[] = [
      {
        shouldRender: isRenderCompetitionBanner,
        banner: <CompetitionBanner />,
      },
      {
        shouldRender: isRenderLotteryBanner,
        banner: <ListingBanner />,
      },
      {
        shouldRender: true,
        banner: <PerpetualBanner />,
      },
    ]
    return [...NO_SHUFFLE_BANNERS, ...shuffle(SHUFFLE_BANNERS)]
      .filter((bannerConfig: IBannerConfig) => bannerConfig.shouldRender)
      .map((bannerConfig: IBannerConfig) => bannerConfig.banner)
  }, [isRenderLotteryBanner, isRenderCompetitionBanner])
}
