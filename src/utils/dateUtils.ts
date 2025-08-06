// Centralized date formatting, sorting utilities, and reading time estimation

export const formatProjectDate = (dateString: string): string => {
  // Check if it's the future date indicating "Current"
  if (dateString === '2099-12-31') {
    return 'Current';
  }
  // Add T12:00:00 to treat the date as noon instead of midnight UTC
  return new Date(dateString + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};

export const formatBlogDate = (dateString: string): string => {
  // Add T12:00:00 to treat the date as noon instead of midnight UTC
  return new Date(dateString + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Sorting utilities
export const sortByStartDate = <T extends { data: { startDates: string[] } }>(items: T[]): T[] => {
  return items.sort((a, b) => 
    new Date(b.data.startDates[0]).getTime() - new Date(a.data.startDates[0]).getTime()
  );
};

export const sortByDate = <T extends { data: { date: Date } }>(items: T[]): T[] => {
  return items.sort((a, b) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
};

// Reading time estimation that accounts for technical content complexity
export const calculateReadingTime = (content: string): string => {
  if (!content) return '1 min read';

  // Base reading speeds (words per minute)
  const BASE_WPM = 200; // Standard reading speed
  const CODE_WPM = 120; // Slower for code blocks but not too slow (skimming)
  
  // Time additions for different content types (in seconds)
  const IMAGE_TIME = 8;         // 8 seconds per image to glance at
  const CODE_BLOCK_BASE = 15;   // Base 15 seconds per code block (quick scan)
  const CODE_LINE_TIME = 1;     // Additional 1 second per line of code
  const MATH_FORMULA_TIME = 5;  // 5 seconds per mathematical formula
  const LINK_TIME = 1;          // 1 second per external link to process

  let totalSeconds = 0;
  let processedContent = content;

  // Count and remove code blocks (both ``` and indented)
  const codeBlocks = content.match(/```[\s\S]*?```|(?:^|\n)( {4,}|\t+).+/gm) || [];
  let codeWords = 0;
  
  codeBlocks.forEach(block => {
    const lines = block.split('\n').filter(line => line.trim().length > 0);
    const words = block.replace(/```\w*\n?/g, '').split(/\s+/).filter(word => word.length > 0);
    
    codeWords += words.length;
    totalSeconds += CODE_BLOCK_BASE + (lines.length * CODE_LINE_TIME);
    processedContent = processedContent.replace(block, '');
  });

  // Count inline code differently (faster than code blocks but slower than regular text)
  const inlineCodeMatches = processedContent.match(/`[^`]+`/g) || [];
  const inlineCodeWords = inlineCodeMatches.join(' ').split(/\s+/).filter(word => word.length > 0).length;
  
  inlineCodeMatches.forEach(match => {
    processedContent = processedContent.replace(match, '');
  });

  // Count images and remove them from content
  const images = processedContent.match(/!\[.*?\]\([^)]+\)/g) || [];
  totalSeconds += images.length * IMAGE_TIME;
  processedContent = processedContent.replace(/!\[.*?\]\([^)]+\)/g, '');

  // Count mathematical formulas (LaTeX-style)
  const mathFormulas = processedContent.match(/\$[^$]+\$|\$\$[\s\S]*?\$\$/g) || [];
  totalSeconds += mathFormulas.length * MATH_FORMULA_TIME;
  processedContent = processedContent.replace(/\$[^$]+\$|\$\$[\s\S]*?\$\$/g, '');

  // Count external links
  const links = processedContent.match(/\[([^\]]+)\]\([^)]+\)/g) || [];
  totalSeconds += links.length * LINK_TIME;

  // Remove markdown syntax and count remaining words
  const cleanContent = processedContent
    .replace(/#{1,6}\s+/g, '') // Headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
    .replace(/\*(.*?)\*/g, '$1') // Italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Links
    .replace(/^\s*[-*+]\s+/gm, '') // List items
    .replace(/^\s*\d+\.\s+/gm, '') // Numbered lists
    .replace(/>/g, '') // Blockquotes
    .replace(/---+/g, '') // Horizontal rules
    .replace(/\s+/g, ' ') // Multiple spaces
    .trim();

  const regularWords = cleanContent.split(/\s+/).filter(word => word.length > 0);
  const regularWordCount = regularWords.length;

  // Calculate reading time for different content types
  const regularReadingSeconds = (regularWordCount / BASE_WPM) * 60;
  const codeReadingSeconds = (codeWords / CODE_WPM) * 60;
  const inlineCodeReadingSeconds = (inlineCodeWords / (BASE_WPM * 0.85)) * 60; // 15% slower than regular text

  totalSeconds += regularReadingSeconds + codeReadingSeconds + inlineCodeReadingSeconds;

  // Convert to minutes and round up to nearest minute
  const totalMinutes = Math.max(1, Math.ceil(totalSeconds / 60));

  // Return formatted string
  return `${totalMinutes} min read`;
};