import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig} from "dotenv";

dotenvconfig();

const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: process.env.DEPLOYMENT_URL ?? "https://ognjenmanojlovic.github.io",
  baseUrl: process.env.BASE_URL ?? "/",

  organizationName: process.env.GITHUB_ORG,
  projectName: process.env.GITHUB_PROJECT,
  deploymentBranch: process.env.DEPLOYMENT_BRANCH,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ognjenmanojlovic/my-blog-template.git',
        },
        blog: blogEnabled
          ? {
              showReadingTime: true,
              feedOptions: {
                type: ['rss', 'atom'],
                xslt: true,
              },
              editUrl:
                'https://github.com/ognjenmanojlovic/my-blog-template.git',
              onInlineTags: 'warn',
              onInlineAuthors: 'warn',
              onUntruncatedBlogPosts: 'warn',
            }
          : false,
        theme: {
          customCss: [
            './src/css/custom.css',
            require.resolve('@fortawesome/fontawesome-free/css/all.min.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/ognjenmanojlovic/my-blog-template.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Meine Socials',
          items: [
            {
              html: `
                <a href="https://www.linkedin.com/in/ognjen-manojlovic-299a2b2a0" target="_blank" rel="noopener noreferrer" class="footer-link linkedin">
                  <i class="fab fa-linkedin fa-lg"></i> LinkedIn
                </a>
              `,
            },
            {
              html: `
                <a href="https://discord.com/users/ognjen04890" target="_blank" rel="noopener noreferrer" class="footer-link discord">
                  <i class="fab fa-discord fa-lg"></i> Discord
                </a>
              `,
            },
            {
              html: `
                <a href="https://instagram.com/0gisha" target="_blank" rel="noopener noreferrer" class="footer-link instagram">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              `,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `
                <a href="https://github.com/ognjenmanojlovic" target="_blank" rel="noopener noreferrer" class="footer-link github">
                  <i class="fab fa-github fa-lg"></i> GitHub
                </a>
              `,
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sven Patrick Meier (spmse). Built with Docusaurus and 💚.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

console.log('BLOG_ENABLED:', blogEnabled);
if (blogEnabled) {
  (config.themeConfig.navbar as any).items.push({
    to: '/blog',
    label: 'Blog',
    position: 'left',
  });
}

export default config;
