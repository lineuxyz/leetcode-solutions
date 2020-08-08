var convert = function(s, numRows) {
  var rowArray = []
  var rowHeight = 0
  var slope = true;
  var i = 0;
   
   if(s === '') return s
   if(numRows === 1) return s
  
   while( i < s.length ) {
       if( !rowArray[rowHeight] ) {
           rowArray[rowHeight] = [s[i]]
       } else {
           let cur = rowArray[rowHeight]
           cur += s[i]
           rowArray[rowHeight] = cur
       }
       
       if( slope ) {
           rowHeight++
       } else {
           rowHeight--
       }
       
       if( rowHeight === numRows - 1 || rowHeight === 0) {
           slope = !slope
       }
       
       i++
   }
   
   return rowArray.join("")
   
};