export function removeTrailingZeros(num: string): string {
  let s: string = "";

  for (let l = num.length - 1; l > -1; l--) {
    if (s.length == 0 && num[l] === "0") {
      continue;
    }

    s = `${num[l]}${s}`;
  }
  return s;
}
