var longestPalindrome = function(s) {
  let cur = '';
  
  for (let i = 0; i < s.length; i++) {
    let l = i, r = i;

    while (r + 1 < s.length && s[r + 1] === s[i]) {
      r++;
    }

    if (cur.length && cur.length >= Math.min(l, s.length - (r + 1)) * 2 + (r + 1 - l)) {
      break;
    }

    while (l > 0 && r < s.length - 1) {
      if (s[l - 1] !== s[r + 1]) {
        break;
      }

      l -= 1;
      r += 1;
    }

    if (r + 1 - l > cur.length) {
      cur = s.substring(l, r + 1);
    }
  }

  return cur;
};