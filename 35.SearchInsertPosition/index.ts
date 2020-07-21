function searchInsert(nums: number[], target: number): number {
  let pivot;
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      pivot = Math.floor((left + right) / 2);

      if (nums[pivot] === target) {
          return pivot;
      }
      else if (nums[pivot] > target) {
          right = pivot - 1
      }
      else {
          left = pivot + 1;
      }
  }
  return left;
}