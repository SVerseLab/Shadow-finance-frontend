import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Blog",
        href: "https://medium.com/pancakeswap",
      },
      {
        label: "SHDW",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Sverse Lab",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/Shadowswap_xyz",
  },
  // {
  //   label: "Telegram",
  //   icon: TelegramIcon,
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/shadow",
  //     },
  //   ],
  // },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/shadowswap/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/AgZ9hxZdgc",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/@shadowswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
