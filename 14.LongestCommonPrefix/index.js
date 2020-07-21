const longestCommonPrefix = (strs) => {
  if(strs.length == 0){return '';}
  let length = strs.length, result = '';
  
  let s = '', min = strs[0].length, j = 0;
  for(let i = 0; i < length ; i++){
      j = (length-1 == i) ? 0 : i+1;
      s = s + '(strs['+i+'][i] == strs['+j+'][i]) && ';
      if(min > strs[i].length){
          min = strs[i].length;
      }
  }
  s = s.substring(0, s.length-4);
  for(let i = 0; i < min ; i++){
      if(i == 0 && !eval(s)){
          return "";
      }
      if(eval(s)){
          result = result + strs[0][i];
      }
  }
  return result;
};