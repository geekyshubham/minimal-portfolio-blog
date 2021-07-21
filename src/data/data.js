module.exports = {
  SiteTitle: 'GeekyShubham',
  Sitelogo: '#',
  SiteLogoText: '<GeekyShubham/>',
  SiteAuthor: 'Shubham Takankhar',
  SiteDescription: 'Full Stack Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
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
    number_of_repos: 12,
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
    email: 'takankhar@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};
