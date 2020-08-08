var maxArea = function(height) {
  let l = 0, r = height.length-1;
  let max = -Infinity;
  while (l < r) {
      let area = (r-l) * Math.min(height[l],height[r]);
      if (area > max) max = area;
      height[l] < height[r] ? l++ : r--; 
  }
  return max;
};