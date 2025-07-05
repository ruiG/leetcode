export function findLucky(arr: number[]): number {
  let countArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const countNum = (countArr[num] ?? 0) + 1;

    countArr[num] = countNum;
  }

  let luckyArr: number[] = [];

  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] == i) {
      luckyArr.push(i);
    }
  }

  let highestLucky = -1;

  for (let i = 0; i < luckyArr.length; i++) {
    if (luckyArr[i] > highestLucky) {
      highestLucky = luckyArr[i];
    }
  }

  return highestLucky;
}
console.log(findLucky([2,2,3,4]));
