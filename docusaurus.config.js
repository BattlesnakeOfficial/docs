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
          sidebarPath: require.resolve('./src/sidebars.js'),
          breadcrumbs: false,
          editUrl: 'https://github.com/BattlesnakeOfficial/docs/edit/main',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          blogTitle: 'Battlesnake Blog',
          routeBasePath: 'blog',
          blogSidebarTitle: 'All Posts',
          remarkPlugins: [require('remark-math')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: require('./src/redirects.js')
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
      announcementBar: require('./src/announcement.js'),
      navbar: {
        logo: {
          alt: 'Battlesnake',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'main',
            label: 'Docs',
          }, {
            label: 'Quickstart',
            to: 'quickstart',
            activeBasePath: '/dev/null'  // Disable
          },
          {
            label: 'Starter Projects',
            to: 'starter-projects',
            activeBasePath: '/dev/null'  // Disable
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
            href: 'https://github.com/BattlesnakeOfficial/docs',
            position: 'right',
            className: 'navbar-item-icon navbar-item-github',
          },
          {
            href: 'https://play.battlesnake.com/discord',
            className: 'navbar-item-icon navbar-item-discord',
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
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/'
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
                label: 'Discord',
                href: 'https://play.battlesnake.com/discord',
              },
              {
                label: 'Discussion Forum',
                href: 'https://github.com/orgs/BattlesnakeOfficial/discussions',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/BattlesnakeOfficial',
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
