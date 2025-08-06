// Centralized date formatting and sorting utilities

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