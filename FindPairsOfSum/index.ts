export class FindSumPairs {
  private nums1: number[];
  private nums2: number[];
  private freq: Map<number, number>;

  constructor(nums1: number[], nums2: number[]) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freq = new Map();
    for (const num of nums2) {
      const fnum = this.freq.get(num) || 0;
      this.freq.set(num, fnum + 1);
    }
  }

  add(index: number, val: number): void {
    const oldN = this.nums2[index];
    this.freq.set(oldN, (this.freq.get(oldN) || 0) - 1);
    this.nums2[index] += val;

    const newN = this.nums2[index];
    this.freq.set(newN, (this.freq.get(newN) || 0) + 1);
  }

  count(tot: number): number {
    let count = 0;
    for (const num1 of this.nums1) {
      const rest = tot - num1;
      count += this.freq.get(rest) || 0 
    }
    return count;
  }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
