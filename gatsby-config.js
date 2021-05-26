module.exports = {
  siteMetadata: {
    title: `The Suhas Space`,
    description: `Suhas Dara's personal website.`,
    author: `@suhasdara`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-fontawesome-css`
  ]
}