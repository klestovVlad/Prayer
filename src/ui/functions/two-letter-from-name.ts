export function twoLetterFromName(name: string): string {
  return name
    .toUpperCase()
    .split(' ')
    .map(i => i[0])
    .slice(0, 2)
    .join('');
}
