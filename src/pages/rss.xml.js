import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blogs = await getCollection('blogs');
  
  // Sort blogs by date (newest first)
  const sortedBlogs = blogs.sort((a, b) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  // Helper function to extract excerpt from markdown content
  const getExcerpt = (blog) => {
    const { body } = blog;
    const excerptMatch = body.split('<!--excerpt-->')[0];
    return excerptMatch.trim() || '';
  };

  return rss({
    title: 'Suhas Dara - Blog',
    description: 'Software Engineer passionate about building innovative solutions and sharing knowledge through code and writing.',
    site: context.site,
    items: sortedBlogs.map((blog) => ({
      title: blog.data.title,
      pubDate: blog.data.date,
      description: getExcerpt(blog) || `Read about ${blog.data.title}`,
      link: `/blogs/${blog.data.slug || blog.slug}/`,
      categories: blog.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}