var countAndSay = function(n) {
    
  if(n == 1) return '1';
  
  let result = '1';
  while(n-1>0){
      let count = 0,current = result[0],index = 0, tempRes= '';
      
      while(index !== result.length){
          
          if(current == result[index]) count++;
          else{
              tempRes += count.toString() + current;
              count = 1;
              current = result[index];
          }
          
          index++;
      }
      
      tempRes += count.toString() + current;
      result = tempRes;
      n--;
  }
  
  return result;
  
};