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
    `gatsby-plugin-advanced-sitemap`,
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
    `gatsby-plugin-offline`,
  ],
}
