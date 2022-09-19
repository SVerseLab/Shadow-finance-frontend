import { Svg, SvgProps } from '@pancakeswap/uikit'

const GradientLogo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.7.6c-1.1 1.1-.8 9.7.4 13.3 1 2.9 1.9 3.4 7.1 4.3 1.6.3 1.6.7-.4 4.8-3.2 7-3.2 12.5 0 19.2l2.7 5.7 13.2.1h13.1l2.9-4.8c3.6-5.8 4-11.3 1.3-18.2-2.4-6.2-2.5-7-.2-6.8 5.5.4 7.2-2.1 7.2-10.7 0-5.8-1.3-7.8-3-4.6-1 2-1.1 2-3.1 0-1.8-1.8-2.9-2-6.3-1.5-5.8 1-18.6.7-20.7-.5-3-1.5-5.5-1-8.3 1.7C5.2 4.1 4 4.8 4 4.3 4 2.7 1.5-.1.7.6zM20 27.5c1.5 1.8.6 4.5-1.5 4.5-1.8 0-3-2.4-2.1-4.5.7-1.9 2-1.9 3.6 0zm12.8 1.7c-.4 3-4.8 3.9-4.8 1 0-1 .3-2.2.7-2.5.3-.4 1.5-.7 2.5-.7 1.4 0 1.9.6 1.6 2.2z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7645D9" />
          <stop offset="1" stopColor="#5121B1" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default GradientLogo
