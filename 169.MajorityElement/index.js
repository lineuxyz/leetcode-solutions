var majorityElement = function(nums) {
	let hashMap = {}, majorityBase = nums.length/2;

	for (let num of nums){
		if(!hashMap[num]) {
			hashMap[num] = 1
		}else{
			 hashMap[num] += 1
		}
		if(hashMap[num] > majorityBase){
			return num
		}
	}
	return null
};