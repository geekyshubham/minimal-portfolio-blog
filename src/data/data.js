module.exports = {
  SiteTitle: 'GeekyShubham',
  Sitelogo: '#',
  SiteLogoText: '<GeekyShubham/>',
  SiteAuthor: 'Shubham Takankhar',
  SiteDescription: 'Shubham Takankhar is a Programmer, Security Researcher, Technologist and Blogger.',
  defaultDescription: 'GeekyShubham is personal portfolio and blog of Shubham Takankhar.',
  SiteUrl: "https://geekyshubham.tk",
  image: "/images/siteLogo.png",
  twitterUsername: "@digitl_shado",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC} ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 10,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/digitl_shado',
    github: 'https://github.com/geekyshubham',
    linkedin: 'https://www.linkedin.com/in/shubham-takankhar/',
  },
  SiteAddress: {
    city: 'Pune',
    region: 'Maharashtra',
    country: 'India',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'mail@geekyshubham.tk',
    phone: '',
  },
  SiteCopyright: '2021',
};
