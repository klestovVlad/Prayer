import {formatRelative} from 'date-fns';

export const timeFromNow = (date: string) => {
  console.log(date);
  console.log(Date.parse(date));
  return formatRelative(Date.parse(date), new Date());
};
