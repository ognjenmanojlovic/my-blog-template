import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-blog-template/__docusaurus/debug',
    component: ComponentCreator('/my-blog-template/__docusaurus/debug', '31d'),
    exact: true
  },
  {
    path: '/my-blog-template/__docusaurus/debug/config',
    component: ComponentCreator('/my-blog-template/__docusaurus/debug/config', '57c'),
    exact: true
  },
  {
    path: '/my-blog-template/__docusaurus/debug/content',
    component: ComponentCreator('/my-blog-template/__docusaurus/debug/content', '198'),
    exact: true
  },
  {
    path: '/my-blog-template/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-blog-template/__docusaurus/debug/globalData', 'd67'),
    exact: true
  },
  {
    path: '/my-blog-template/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-blog-template/__docusaurus/debug/metadata', '7f4'),
    exact: true
  },
  {
    path: '/my-blog-template/__docusaurus/debug/registry',
    component: ComponentCreator('/my-blog-template/__docusaurus/debug/registry', '999'),
    exact: true
  },
  {
    path: '/my-blog-template/__docusaurus/debug/routes',
    component: ComponentCreator('/my-blog-template/__docusaurus/debug/routes', 'b79'),
    exact: true
  },
  {
    path: '/my-blog-template/blog',
    component: ComponentCreator('/my-blog-template/blog', 'cf7'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/archive',
    component: ComponentCreator('/my-blog-template/blog/archive', 'b0c'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/authors',
    component: ComponentCreator('/my-blog-template/blog/authors', '943'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/my-blog-template/blog/authors/all-sebastien-lorber-articles', '8e7'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/authors/yangshun',
    component: ComponentCreator('/my-blog-template/blog/authors/yangshun', '7d3'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/first-blog-post',
    component: ComponentCreator('/my-blog-template/blog/first-blog-post', 'dd9'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/long-blog-post',
    component: ComponentCreator('/my-blog-template/blog/long-blog-post', 'c62'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/mdx-blog-post',
    component: ComponentCreator('/my-blog-template/blog/mdx-blog-post', '3ba'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/tags',
    component: ComponentCreator('/my-blog-template/blog/tags', '0d4'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/tags/docusaurus',
    component: ComponentCreator('/my-blog-template/blog/tags/docusaurus', '04e'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/tags/facebook',
    component: ComponentCreator('/my-blog-template/blog/tags/facebook', 'bb1'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/tags/hello',
    component: ComponentCreator('/my-blog-template/blog/tags/hello', 'd73'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/tags/hola',
    component: ComponentCreator('/my-blog-template/blog/tags/hola', '12a'),
    exact: true
  },
  {
    path: '/my-blog-template/blog/welcome',
    component: ComponentCreator('/my-blog-template/blog/welcome', '712'),
    exact: true
  },
  {
    path: '/my-blog-template/markdown-page',
    component: ComponentCreator('/my-blog-template/markdown-page', '504'),
    exact: true
  },
  {
    path: '/my-blog-template/docs',
    component: ComponentCreator('/my-blog-template/docs', '503'),
    routes: [
      {
        path: '/my-blog-template/docs',
        component: ComponentCreator('/my-blog-template/docs', '604'),
        routes: [
          {
            path: '/my-blog-template/docs',
            component: ComponentCreator('/my-blog-template/docs', '115'),
            routes: [
              {
                path: '/my-blog-template/docs/category/docusaurus---basics',
                component: ComponentCreator('/my-blog-template/docs/category/docusaurus---basics', 'ccf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/category/docusaurus---extras',
                component: ComponentCreator('/my-blog-template/docs/category/docusaurus---extras', 'd35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/category/git',
                component: ComponentCreator('/my-blog-template/docs/category/git', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/category/linux',
                component: ComponentCreator('/my-blog-template/docs/category/linux', '0bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/category/nodejs',
                component: ComponentCreator('/my-blog-template/docs/category/nodejs', 'c85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/deploy-docusaurus-with-docker-and-nginx',
                component: ComponentCreator('/my-blog-template/docs/guides/deploy-docusaurus-with-docker-and-nginx', '9f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/docusaurus-basics/congratulations',
                component: ComponentCreator('/my-blog-template/docs/guides/docusaurus-basics/congratulations', '33e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/docusaurus-basics/create-a-blog-post',
                component: ComponentCreator('/my-blog-template/docs/guides/docusaurus-basics/create-a-blog-post', '73e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/docusaurus-basics/create-a-document',
                component: ComponentCreator('/my-blog-template/docs/guides/docusaurus-basics/create-a-document', 'fb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/docusaurus-basics/create-a-page',
                component: ComponentCreator('/my-blog-template/docs/guides/docusaurus-basics/create-a-page', '7f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/docusaurus-basics/deploy-your-site',
                component: ComponentCreator('/my-blog-template/docs/guides/docusaurus-basics/deploy-your-site', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/docusaurus-basics/markdown-features',
                component: ComponentCreator('/my-blog-template/docs/guides/docusaurus-basics/markdown-features', 'f69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/intro',
                component: ComponentCreator('/my-blog-template/docs/guides/intro', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/linux/the-parts-of-cli-commands',
                component: ComponentCreator('/my-blog-template/docs/guides/linux/the-parts-of-cli-commands', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/nodejs/GithubLinkAdmonition',
                component: ComponentCreator('/my-blog-template/docs/guides/nodejs/GithubLinkAdmonition', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/nodejs/use-env-vars-in-node',
                component: ComponentCreator('/my-blog-template/docs/guides/nodejs/use-env-vars-in-node', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/some-demo-guide',
                component: ComponentCreator('/my-blog-template/docs/guides/some-demo-guide', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/my-blog-template/docs/guides/tutorial-extras/manage-docs-versions', '3d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/guides/tutorial-extras/translate-your-site',
                component: ComponentCreator('/my-blog-template/docs/guides/tutorial-extras/translate-your-site', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/Container/create-your-first-image',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/Container/create-your-first-image', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/Container/overview',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/Container/overview', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/DevOps/implementing-devops',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/DevOps/implementing-devops', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/DevOps/overview',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/DevOps/overview', 'a1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/git/clone',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/git/clone', 'b19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/git/git-branch',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/git/git-branch', '957'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/git/lifecycle-in-git',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/git/lifecycle-in-git', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/intro',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/intro', 'e49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/linux/linux-server-administration',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/linux/linux-server-administration', '246'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/linux/overview',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/linux/overview', 'aa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/knowledge-base/linux/the-linux-commandline',
                component: ComponentCreator('/my-blog-template/docs/knowledge-base/linux/the-linux-commandline', '0f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/projects/example-project',
                component: ComponentCreator('/my-blog-template/docs/projects/example-project', '985'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/projects/overview',
                component: ComponentCreator('/my-blog-template/docs/projects/overview', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-blog-template/docs/projects/vserver-setup',
                component: ComponentCreator('/my-blog-template/docs/projects/vserver-setup', '5fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-blog-template/',
    component: ComponentCreator('/my-blog-template/', 'b64'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
