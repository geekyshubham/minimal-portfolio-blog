const data = require('./src/data/data');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: data.SiteTitle,
    description: data.SiteDescription,
    author: data.SiteAuthor,
    logoTitle: data.SiteLogoText,
    siteUrl: data.SiteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',np
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/data/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: data.SiteUrl,
        sitemap: data.SiteUrl + '/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          }, 
          {
            resolve: `gatsby-remark-highlight-code`,
             options: {
               terminal: "carbon",
               theme: "one-light",
               lineNumbers:true
             },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {resolve:`gatsby-remark-autolink-headers`,
          options: {
            offsetY: `100`,
            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            className: `custom-class`,
            maintainCase: false,
            removeAccents: true,
            elements: [`h1`,`h2`,`h3`],
          },
        },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shubham Takankhar`,
        short_name: `GeekyShubham`,
        description: data.SiteDescription,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#FF2D2D`,
        display: `fullscreen`,
        icon: `src/assets/img/portfolio-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_API_TOKEN,
        graphQLQuery: data.githubApiQuery,
        variables: data.githubApiVariables,
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //       trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
    //       head: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
