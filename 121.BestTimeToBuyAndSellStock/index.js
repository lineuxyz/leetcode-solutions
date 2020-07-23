var maxProfit = function (prices) {
  var length = prices.length,
      min = Infinity,
      res = -Infinity;

  for (var i = 0; i <= length - 1; i++) {
      if (prices[i] < min) {
          min = prices[i];
      } else if (prices[i] > min && prices[i] - min > res) {
          res = prices[i] - min;
      }
  }

  if (isFinite(res)) {
      return res;
  } else {
      return 0;
  }
};