export const toNumberTimeRange = (timeRange: string) => {
  if (timeRange === 'Last 7 days') return '7';
  if (timeRange === 'Last 14 days') return '14';
  if (timeRange === 'Last 30 days') return '30';
  if (timeRange === 'Last 60 days') return '60';
  if (timeRange === 'Last year') return '365';
  return '';
};
