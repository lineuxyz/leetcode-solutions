function removeDuplicates(nums: number[]): number {
  let ptr1 = 0;
  let ptr2 = 0;
  
  if (nums.length < 2) {
      return nums.length;
  }
  
  while(ptr2 < nums.length) {
      ptr2 += 1;
      if (nums[ptr1] !== nums[ptr2]) {
          let duplicates = ptr2 - ptr1 - 1;
          if (duplicates) {
              nums.splice(ptr1, duplicates);    
          }
          ptr2 = ptr2 - duplicates;
          ptr1 = ptr2;
      }
  }
  return nums.length;
}