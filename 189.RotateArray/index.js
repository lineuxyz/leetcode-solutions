var rotate = function(nums, k) {
  var leftItem = nums.slice(0, nums.length-k);
  var rightItem = nums.slice(nums.length-k);
  
  for(var i = 0; i < rightItem.length; i++) {
      nums[i] = rightItem[i];
  }
  
  for(var i = 0; i < leftItem.length; i++) {
      nums[rightItem.length + i] = leftItem[i];
  }
};