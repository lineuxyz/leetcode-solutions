function isPalindrome(x: number): boolean {
  if (x < 0) {
      return false;
  }
  let digits = Math.floor(Math.log10(x) + 1);
  while (digits > 1) {
      const mask = Math.pow(10, digits - 1);
      
      const first = Math.floor(x / mask);
      
      const last = Math.floor(x % 10);
      
      if (first !== last) {
          return false;
      }
      
      x = Math.floor(x % mask);
      
      x = Math.floor(x / 10);
      
      digits -= 2;
  }
  return true;
}