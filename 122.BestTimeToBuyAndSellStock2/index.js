var maxProfit = function(prices) {
  let profit = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i=0; i<prices.length; i++) {
          min = Math.min(min, prices[i]);
      if (prices[i+1] < prices[i] || (prices[i+1] == undefined && prices[i] > min)) {
          profit += prices[i] - min;
          min = Number.MAX_SAFE_INTEGER;
      }  
  }
  return profit;
  };