import { formatDistance } from 'date-fns';

export const timeFromNow = (date: string) => {
  return formatDistance(0, +new Date() - Date.parse(date), {
    includeSeconds: true,
    addSuffix: true,
  });
};
