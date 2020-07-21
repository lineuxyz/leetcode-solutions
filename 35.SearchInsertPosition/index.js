var searchInsert = function(nums, target) {
      if(target > nums[nums.length-1]){
          return nums.length
      }
      for (let i = 0; i<nums.length; i++){
          if(target <= nums[i]){
              return i
          }
      }
      return target
  };
  
  var searchInsert = function(nums, target) {
      let start =0 , high = nums.length-1,mid=0
      while(start <= high){
          mid = Math.floor((start+high)/2)
          if(nums[mid] == target){
              return mid
          }else if(target > nums[mid]){
                      start = mid+1
                   }else if(target < nums[mid]){
                              high = mid-1
                            }
      }
      return start
  };