var lengthOfLastWord = function(s) {
  let len = 0;
  let hasStarted = false;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== ' ') hasStarted = true;
      if (hasStarted) {
          if (s[i] === ' ') break;
          len++;
      }
  }
  return len;
};