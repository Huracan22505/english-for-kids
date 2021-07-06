export function shuffle(array: string[]): string[] {
  const targetArr = array;
  let currentIndex: number = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    targetArr[currentIndex] = array[randomIndex];
    targetArr[randomIndex] = temporaryValue;
  }

  return array;
}
