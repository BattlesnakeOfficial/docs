// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Battlesnake Docs',
  tagline: 'A multiplayer programming game where your code is the controller.',
  url: 'https://BattlesnakeOfficial.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BattlesnakeOfficial', // Usually your GitHub org/user name.
  projectName: 'docs-new', // Usually your repo name.
  trailingSlash: false,


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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement-bar-2',  // Increment on new announcement
        content: '⭐️ Enjoying Battlesnake? Follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/playbattlesnake">Twitter</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/BattlesnakeOfficial">Twitch</a> 💜',
        backgroundColor: '#3e338f',
        textColor: '#ffffff',
        isCloseable: true
      },
      navbar: {
        logo: {
          alt: 'Battlesnake Docs',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quick-start',
            label: 'Quick Start'
          },
          {
            type: 'doc',
            docId: 'starter-templates',
            label: 'Starter Templates'
          },
          {
            type: 'doc',
            docId: 'api/overview',
            label: 'API Reference',
          },
          {
            type: 'doc',
            docId: 'guides/overview',
            label: 'Guides'
          },
          {
            type: 'doc',
            docId: 'faq',
            label: 'FAQ'
          },
          {
            href: 'https://github.com/BattlesnakeOfficial/docs-new',
            position: 'right',
            className: 'navbar-item-github',
          },
          {
            href: 'https://play.battlesnake.com/discord',
            className: 'navbar-item-discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/playbattlesnake',
            className: 'navbar-item-twitter',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: 'quick-start'
              },
              {
                label: 'Starter Templates',
                to: 'starter-templates'
              },
              {
                label: 'API Reference',
                to: 'api/overview'
              },
              {
                label: 'Guides',
                to: 'guides/overview'
              },
              {
                label: 'FAQ',
                to: 'faq'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BattlesnakeOfficial',
              },
              {
                label: 'Discord',
                href: 'https://play.battlesnake.com/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/playbattlesnake',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/battlesnake'
              },
              {
                label: 'Twitch',
                href: 'https://twitch.tv/BattlesnakeOfficial'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.battlesnake.com',
              },
              {
                label: 'Feedback',
                href: 'https://play.battlesnake.com/feedback',
              },
              {
                label: 'Our Mission',
                href: 'https://play.battlesnake.com/mission',
              },
              {
                label: 'Diversity',
                href: 'https://docs.battlesnake.com/policies/diversity',
              },
              {
                label: 'Code of Conduct',
                href: 'https://play.battlesnake.com/conduct',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Battlesnake Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
