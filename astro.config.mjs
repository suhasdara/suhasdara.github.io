import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://suhasdara.me',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      transformers: [
        {
          pre(node) {
            // Preserve language information from the original markdown
            const lang = this.options.lang || 'text';
            node.properties['data-language'] = lang;
          }
        }
      ]
    }
  }
});