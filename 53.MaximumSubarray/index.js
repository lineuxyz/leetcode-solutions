var maxSubArray = function(nums) {
    var maxNumber = nums[0]; 
    var lastSavedList = [];
    for(var i = 0; i < nums.length; i++) {
        var sumNumber =  0;
        for(var j = i; j < nums.length; j++) {
            sumNumber+= nums[j];
            if(maxNumber < sumNumber) {
                lastSavedList = [i, j];
                maxNumber = sumNumber;
            }
        }
    }
    return maxNumber;
};