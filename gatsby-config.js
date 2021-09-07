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
      resolve: `gatsby-plugin-feed-mdx`,
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
                // allow multi line, properly spaced code blocks in the RSS feed
                let html = edge.node.html.replace(
                  /<pre><code.*?>[\s\S]*?<\/code><\/pre>/g,
                  (x) => {
                    let s = JSON.stringify(x)
                      .replace(/\\n/g, "&#13;&#10;")
                      .replace(/ /g, "&nbsp;");
                    return s.substring(1, s.length - 1);
                  }
                );

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
        name: `the-suhas-space`,
        short_name: `suhas-space`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
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
