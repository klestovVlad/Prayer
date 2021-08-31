import {formatDistance} from 'date-fns';

export const timeFromNow = (date: string) => {
  const humanDate = formatDistance(0, +new Date() - Date.parse(date), {
    includeSeconds: true,
  });
  return `${humanDate} ago`;
};
