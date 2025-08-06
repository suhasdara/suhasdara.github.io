import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';

function copyAssetsRecursively(src, dest, extensions = ['.jpg', '.png', '.jpeg', '.gif']) {
  const items = readdirSync(src);
  
  items.forEach(item => {
    const srcPath = join(src, item);
    const destPath = join(dest, item);
    const stat = statSync(srcPath);
    
    if (stat.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyAssetsRecursively(srcPath, destPath, extensions);
    } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
      mkdirSync(dirname(destPath), { recursive: true });
      copyFileSync(srcPath, destPath);
    }
  });
}

// Copy project, experience, blogs, and about images to public
copyAssetsRecursively('src/content/projects', 'public/projects', ['.jpg', '.png', '.jpeg', '.gif']);
copyAssetsRecursively('src/content/experience', 'public/experience', ['.jpg', '.png', '.jpeg', '.gif']);
copyAssetsRecursively('src/content/blogs', 'public/blogs', ['.jpg', '.png', '.jpeg', '.gif']);
copyAssetsRecursively('src/content/about', 'public/about', ['.jpg', '.png', '.jpeg', '.gif']);

console.log('Assets copied to public directory');