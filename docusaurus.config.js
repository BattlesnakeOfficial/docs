// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Battlesnake',
  tagline: 'A multiplayer programming game where your code is the controller.',
  url: 'https://docs.battlesnake.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BattlesnakeOfficial', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
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
          breadcrumbs: false,
          editUrl: 'https://github.com/BattlesnakeOfficial/docs/edit/main',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          blogTitle: 'Battlesnake Blog',
          routeBasePath: 'blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-ZLKCHQQP4Q',
          anonymizeIP: true
        }
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: require('./redirects.js')
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'MWV3QIWAYI',
        apiKey: '0e16ab11aafbcc953a3f72215140716c',
        indexName: 'battlesnake',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
      announcementBar: {
        id: 'announcement-bar-4',  // Increment on new announcement
        content: '⭐️ Whats New at Battlesnake in 2023? <a href="https://blog.battlesnake.com/whats-new-at-battlesnake-in-2023/" target="_blank" rel="noopener noreferrer">Find out here.</a> 💜',
        backgroundColor: '#3e338f',
        textColor: '#ffffff',
        isCloseable: true
      },
      navbar: {
        logo: {
          alt: 'Battlesnake',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            label: 'Quickstart',
          },
          {
            type: 'doc',
            docId: 'starter-projects',
            label: 'Starter Projects'
          },
          {
            type: 'docSidebar',
            sidebarId: 'guides',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            label: 'API',
          },
          {
            to: 'blog',
            label: 'Blog'
          },
          {
            type: 'docSidebar',
            sidebarId: 'community',
            label: 'Community',
          },
          {
            href: 'https://github.com/BattlesnakeOfficial/docs',
            position: 'right',
            className: 'navbar-item-icon navbar-item-github',
          },
          {
            href: 'https://play.battlesnake.com/discord',
            className: 'navbar-item-icon navbar-item-discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/playbattlesnake',
            className: 'navbar-item-icon navbar-item-twitter',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Started',
            items: [
              {
                label: 'Quickstart',
                to: 'quickstart'
              },
              {
                label: 'Starter Projects',
                to: 'starter-projects'
              },
              {
                label: 'Developer FAQ',
                to: 'guides/faq'
              },

            ]
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: 'guides'
              },

              {
                label: 'API Reference',
                to: 'api'
              },
              {
                label: 'Move Request',
                to: 'api/example-move'
              }
            ]
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
                label: 'Our Mission',
                href: 'https://play.battlesnake.com/mission',
              },
              {
                label: 'Player Feedback',
                href: 'https://play.battlesnake.com/feedback',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Battlesnake Inc.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
