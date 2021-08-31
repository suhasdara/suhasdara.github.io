---
title: Generating excerpts using GatsbyJS Markdown plugins
date: 2021-08-31
slug: /blogs/gatsby-mdx-excerpts
tags:
  - tech
postType: blog
---

Learn how to generate excerpts with `gatsby-transformer-remark` and work
around the lack of the `excerpt_separator` option in `gatsby-plugin-mdx`.

<!--excerpt-->

If you have worked with GatsbyJS before, you likely have worked with either
`gatsby-transformer-remark`, `gatsby-plugin-mdx` or both. When working with
markdown posts in either of these Gatsby plugins, maybe you have wanted to
use excerpts as well.

### The problem

When using `graphql` to query for excerpts in the markdown nodes, it is not
possible to query for varied length excerpts. While it is possible to set a
`pruneLength` within the query (as shown below), it is not possible to query
for a varied length excerpt such as the first paragraph of content.

```graphql
allMarkdownRemark {
  edges {
    node {
      excerpt(pruneLength: 200)
    }
  }
}
```

### Solve using `gatsby-transformer-remark`

The way this can be tackled with `gatsby-transformer-remark` is by using the
`excerpt_separator` option in `gatsby-config.js`, which allows designating a
specific section of your markdown content as the excerpt. This happens to be
the area between the end of the frontmatter and the start of the actual
content marked by the excerpt separator. Choosing the separator to be of the
format of an HTML comment allows it to demarcate the excerpt while also being
excluded from the content itself (as HTML comments do not get rendered). An
example of a separator is `<!--end-->`.

Now you can format your markdown content as follows...

```markdown
---
frontmatter: value
---
excerpt
<!--end-->
main content
```

...and you can simply query for the excerpt in `graphql` without a fixed
`pruneLength`.

### Solve using `gatsby-plugin-mdx`

However, solving the same problem using `gatsby-plugin-mdx` is not as
straightforward as adding an option in `gatsby-config.js` unfortunately.
There is no `excerpt_separator` option available for this plugin. There have
been Github issues and feature requests for this option, but the
[thread](https://github.com/gatsbyjs/gatsby/discussions/16865) has been quite
stale so far with only workarounds being suggested in the comments. You can
either use the workarounds suggested in the thread or stick around for a
different approach.

As mentioned earlier, excerpt is the area between the end of the frontmatter
and the start of the actual content. To emulate the same approach as with
`gatsby-transformer-remark`, we can edit the `onCreateNode` function in the
`gatsby-node.js` file to manually create an excerpt field for the MDX nodes.
You can modify the following code to generate fancier excerpts out of the
content of your Markdown posts. This piece of code uses the `end` variable
as the excerpt separator and defaults to a prune length of 200 if the
excerpt separator is not available in the content of the post.

```javascript
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  const fm = "---"; //frontmatter
  const end = "<!--excerpt-->"; //excerpt separator
  const prune = 200; //default prune length
  if(node.internal.type === `Mdx`) {
    let content = node.internal.content;
    let fmStart = content.indexOf(fm);
    let fmEnd = content.indexOf(fm, fmStart + 1) + fm.length;
    let excerptEnd = content.indexOf(end);
    let ellipsis = excerptEnd === -1 ? "..." : "";
    excerptEnd = excerptEnd === -1 ?
      Math.min(content.length, fmEnd + prune) :
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
```

The one difference however, is that the `excerpt` field will not be available
directly under `node` when making a `graphql` query. It would instead be
available under `fields` as follows:

```graphql
allMdx {
  edges {
    node {
      fields {
        excerpt            
      }
    }
  }
}
```

One drawback of generating excerpts this way is that they are purely text.
There could be scenarios where the excerpts being HTML could be useful.
There is a JavaScript library called
[Showdownjs](https://github.com/showdownjs/showdown), which can solve this
exact problem. Adding the following few additional lines of code to
`onCreateNode` can generate an extra field that has the excerpt available as
HTML.

```javascript
const showdown = require("showdown");
let converter = new showdown.Converter();
let excerpt_html = converter.makeHtml(excerpt);
createNodeField({
  node,
  name: `excerpt_html`,
  value: excerpt_html,
});
```

With that, you should have fully functioning excerpts, whether text or HTML,
available through `graphql` queries in the component of your choice.
