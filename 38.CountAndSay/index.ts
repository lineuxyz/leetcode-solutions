function countAndSay(n: number): string {
  let result = "1";
  
  for (let i = 2; i <= n; i++) {
      result = _countAndSayHelper(result);
  }
  return result;
};

function _countAndSayHelper(str: string): string {
  let count = 1,
      currentNum = str[0],
      previousNum = str[0],
      result = '';

  for (let num of str.slice(1)) {
      currentNum = num;
      if (currentNum !== previousNum) {
          result += `${count}${previousNum}`;
          previousNum = currentNum;
          count = 1;
      } else {
          count++;
      }
  }
  result += `${count}${currentNum}`;
  return result;
};