const path = require("path");
const showdown = require("showdown");

function generateExcerpt(content) {
  const fm = "---";
  const end = "<!--excerpt-->";
  let fmStart = content.indexOf(fm);
  let fmEnd = content.indexOf(fm, fmStart + 1) + fm.length;
  let excerptEnd = content.indexOf(end);
  let ellipsis = excerptEnd === -1 ? "..." : "";
  excerptEnd = excerptEnd === -1 ?
    Math.min(content.length, fmEnd + 200) :
    excerptEnd;
  let excerpt = content.substring(fmEnd, excerptEnd) + ellipsis;
  excerpt = excerpt.trim();
  return excerpt
}

function generateMiscTimeToRead(content) {
  let timeToReadSec = 0
  let codeMatches = content.match(/```([\s\S]*?)```/g);
  if(codeMatches !== null) {
    codeMatches = codeMatches.map((match) => {
      return match.replace(/```.*/g, "")
        .replace(/\\n\\n/g, "\n")
    })
    codeMatches.forEach((match) => {
      let lines = match.split("\n").filter(s => s.length > 0).length
      timeToReadSec += lines * 8;
    })
  }
  let imgMatches = content.match(/!\[.*?]\(.*?\)/g);
  if(imgMatches !== null) {
    let images = imgMatches.length;
    timeToReadSec += images * 10;
  }
  return Math.round(timeToReadSec / 60.0);
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if(node.internal.type === `Mdx`) {
    let miscTimeToRead = generateMiscTimeToRead(node.internal.content);
    let excerpt = generateExcerpt(node.internal.content);
    let converter = new showdown.Converter();
    let excerptHtml = converter.makeHtml(excerpt);
    //remove para opening and end. WARNING: breaks multi para excerpts
    excerptHtml = excerptHtml.substring(3, excerptHtml.length - 4);

    createNodeField({
      node,
      name: `miscTimeToRead`,
      value: miscTimeToRead,
    });
    createNodeField({
      node,
      name: `excerpt`,
      value: excerpt,
    });
    createNodeField({
      node,
      name: `excerptHtml`,
      value: excerptHtml,
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
