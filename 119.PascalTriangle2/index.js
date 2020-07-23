var getRow = function(rowIndex) {
    
  const res = new Array(rowIndex+1).fill(0);
  res[0]=1;
  
  if (rowIndex==0) return res;
  
  for (let i=1; i<=rowIndex; i++) {
      let temp = [...res]; // --> O(k) extra space
      for (let j=1; j<=i;j++) {         
          res[j] = temp[j-1] + temp[j];    
      }
  } 

  return res;   
};