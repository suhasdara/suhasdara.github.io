const {
  rssSpacedCodeBlocks,
  rssCleanUpImages,
  rssCleanUpLinks
} = require("./gatsby-config-functions");

const remark_image_options = {
  linkImagesToOriginal: false,
  backgroundColor: `transparent`,
  disableBgImage: true,
  maxWidth: 500,
  srcSetBreakpoints: [500],
};

module.exports = {
  siteMetadata: {
    title: `The Suhas Space`,
    description: `Suhas Dara's personal website.`,
    author: `@suhasdara`,
    siteUrl: `https://suhasdara.me`
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: remark_image_options,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                let html = rssSpacedCodeBlocks(edge.node.html)
                html = rssCleanUpImages(html, site.siteMetadata.siteUrl)
                html = rssCleanUpLinks(html, site.siteMetadata.siteUrl)

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.fields.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { postType: { eq: "blog" } } },
                ) {
                  edges {
                    node {
                      html
                      fields {
                        excerpt
                      }
                      frontmatter {
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "The Suhas Space",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Suhas Space`,
        short_name: `Suhas Space`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `content/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: remark_image_options,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience`,
        path: `${__dirname}/content/experience`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`,
      },
    },
  ],
};
