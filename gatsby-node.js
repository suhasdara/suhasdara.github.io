const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve('src/templates/projectTemp.js')
  const experienceTemplate = path.resolve('src/templates/experienceTemp.js')

  return graphql(`
    query ContentIndexQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              posttype
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if(node.frontmatter.posttype === "project") {
        createPage({
          path: node.frontmatter.slug,
          component: projectTemplate,
        });
      } else if(node.frontmatter.posttype === "experience") {
        createPage({
          path: node.frontmatter.slug,
          component: experienceTemplate,
        });
      } else {
        return Promise.reject("Invalid frontmatter posttype");
      }
    })
  })
};
