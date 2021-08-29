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
    let ellipsis = excerptEnd === -1 ? "..." : "";
    excerptEnd = excerptEnd === -1 ?
      Math.min(content.length, fmEnd + 200) :
      excerptEnd;
    let excerpt = content.substring(fmEnd, excerptEnd) + ellipsis;
    excerpt = excerpt.trim();

    createNodeField({
      node,
      name: `excerpt`,
      value: excerpt,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve("src/templates/projectTemp.js");
  const experienceTemplate = path.resolve("src/templates/experienceTemp.js");
  const blogTemplate = path.resolve("src/templates/blogTemp.js");
  const blogsTagTemplate = path.resolve("src/templates/blogTagPageTemp.js");

  const result = await graphql(`
    query ContentIndexQuery {
      posts: allMdx {
        edges {
          node {
            frontmatter {
              slug
              postType
            }
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if(result.errors) {
    return;
  }

  const posts = result.data.posts.edges;

  posts.forEach(({ node }) => {
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

  const tags = result.data.tags.group;

  tags.forEach(tag => {
    createPage({
      path: `/blogs=${tag.fieldValue}/`,
      component: blogsTagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  });
};
