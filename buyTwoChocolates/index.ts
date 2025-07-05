export function buyChoco(prices: number[], money: number): number {
  let a = 101; // higher than upper bound
  let index = 0;
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < a) {
          a = prices[i]
          index = i
      }
     
  }
  let b = 101; // higher than upper bound
  for (let j = 0; j < prices.length; j++) {
      if(j === index){
          continue
      }
      
      if (prices[j] < b) {
          b = prices[j]
      }
  }
  const result = money - (b + a);

  if (result < 0) {
      return money
  }
  return result
};