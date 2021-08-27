export function trimTextIfItIsLong(text: string) {
  const maxLenght = 23;
  if (text.length > maxLenght) {
    return text.substr(0, maxLenght - 3) + '...';
  }
  return text;
}
