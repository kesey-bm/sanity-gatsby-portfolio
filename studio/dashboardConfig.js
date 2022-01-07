export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61d803fa962b63deda9fcb90',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qatc6vq1',
                  apiId: '19148b8b-d65e-4411-8524-c5df962a94bf'
                },
                {
                  buildHookId: '61d803fafa744abe9060ab55',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yudmu3x5',
                  apiId: '261e73a0-5fb3-4dc0-99e7-7cd4ce68d0f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kesey-bm/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yudmu3x5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
