// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kitty Inu DAO - Governance docs',
  tagline: 'Kitty Inu DAO Governance',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs-kittyinudao.eth.limo',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // q: why is it configured this way?
          // a: we originally tried to use "docs only mode" by setting the `routeBasePath` to `/`, but this prevents the landing page from displaying the`/gentle-intro-dao-governance` slug, which is important for SEO.
          //    this doc elaborates: https://docusaurus.io/docs/docs-introduction#docs-only-mode
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Kitty-Inu-DAO/Governance-Docs/edit/main/',
        },
        blog: false,
        // theme: {
        //   customCss: require.resolve('./src/css/custom.less'),
        // },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kitty Inu DAO - Governance docs',
        logo: {
          alt: 'Kitty Inu DAO',
          src: 'img/kitty_logo.jpg',
          href: 'introduction/introduction_kitty_inu',
        },
        items: [
          {
            href: 'https://github.com/Kitty-Inu-DAO/Governance-Docs/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'kitty-inu-dao.eth.limo/',
            label: 'Main Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: 'introduction/introduction_kitty_inu',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/kittyinudao',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kittyinutoken',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kitty Inu DAO.`,
      },
      announcementBar: {
        id: "banner",
        content: `Kitty Inu has migrated to a new contract address at <a rel="noopener noreferrer" href='https://etherscan.io/token/0x61a35258107563f6b6f102ae25490901c8760b12/'>0x61a35258107563f6b6f102ae25490901c8760b12</a>. V2 tokens were airdropped to wallets holding V1 on May 20, 2023`,
        backgroundColor: '#d61b61',
        textColor: 'white',
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
