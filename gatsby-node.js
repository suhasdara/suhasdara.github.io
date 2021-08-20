const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  const fm = "---";
  const end = "<!--excerpt-->";
  if(node.internal.type === `Mdx`) {
    let content = node.internal.content;
    let fmStart = content.indexOf(fm);
    let fmEnd = content.indexOf(fm, fmStart + 1) + fm.length;
    let excerptEnd = content.indexOf(end);
    excerptEnd = excerptEnd === -1 ? content.length : excerptEnd;
    let excerpt = content.substring(fmEnd, excerptEnd);
    excerpt = excerpt.trim();

    createNodeField({
      node,
      name: `excerpt`,
      value: excerpt,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve("src/templates/projectTemp.js");
  const experienceTemplate = path.resolve("src/templates/experienceTemp.js");
  const blogTemplate = path.resolve("src/templates/blogTemp.js");

  return graphql(`
    query ContentIndexQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              postType
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMdx.edges.forEach(({ node }) => {
      if (node.frontmatter.postType === "project") {
        createPage({
          path: node.frontmatter.slug,
          component: projectTemplate,
        });
      } else if (node.frontmatter.postType === "experience") {
        createPage({
          path: node.frontmatter.slug,
          component: experienceTemplate,
        });
      } else if (node.frontmatter.postType === "blog") {
        createPage({
          path: node.frontmatter.slug,
          component: blogTemplate,
        });
      } else {
        return Promise.reject("Invalid frontmatter posttype");
      }
    });
  });
};
