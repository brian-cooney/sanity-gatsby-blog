export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb46415efe28a00c1d0a477',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2oftw5a2',
                  apiId: 'aa89d428-13d3-4d5d-9ef9-9b188015c1b2'
                },
                {
                  buildHookId: '5fb464150c763a29f2ddeb0d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t8gsr1n6',
                  apiId: '08206f8e-ba64-4fed-b292-e20ed0d136a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brian-cooney/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t8gsr1n6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
