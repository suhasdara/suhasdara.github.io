const rssSpacedCodeBlocks = (html) => {
  // allow multi line, properly spaced code blocks in the RSS feed
  html = html.replace(
    /<pre><code.*?>[\s\S]*?<\/code><\/pre>/g,
    (x) => {
      let s = JSON.stringify(x)
        .replace(/\\n/g, "&#13;&#10;")
        .replace(/ /g, "&nbsp;")
        .replace(/\\\\/g, "\\");
      return s.substring(1, s.length - 1);
    }
  );
  return html;
};

const rssCleanUpImages = (html, baseUrl) => {
  // provide proper image links in the RSS feed
  html = html.replace(
    /<p><span class="gatsby-resp-image-wrapper"[\s\S]*?<img[\s\S]*?<\/span><\/p>/g,
    (x) => {
      return x.replace(/<p>/g, "")
        .replace(/<\/p>/g, "")
        .replace(/<span class="gatsby-resp-image-[\s\S]*?>/g, "")
        .replace(/<\/span>/g, "")
        .replace(/class="[\s\S]*?"/g, "")
        .replace(/srcSet="[\s\S]*?"/g, "")
        .replace(/style="[\s\S]*?"/g, "")
        .replace(/sizes="[\s\S]*?"/g, "")
        .replace(/src="([\s\S]*?)"/g, `src="${baseUrl}$1"`);
    }
  );
  return html;
};

const rssCleanUpLinks = (html, baseUrl) => {
  // provide proper links in the RSS feed
  html = html.replace(
    /<a href="(\/[\s\S]*?|%5C[\s\S]*?)">/g,
    (x) => {
      return x.replace(/%5C/g, "/")
        .replace(/<a href="(\/[\s\S]*?)">/g, `<a href="${baseUrl}$1">`)
    }
  );
  return html;
};

module.exports = { rssSpacedCodeBlocks, rssCleanUpImages, rssCleanUpLinks };
