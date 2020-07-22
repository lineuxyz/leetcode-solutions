var addBinary = function(a, b) {
    let sum = [];
    let carry = 0;
    let i = a.length-1;
    let j = b.length-1;
    
    while (i >= 0 || j >= 0) {
        let aInt = parseInt(a[i] || 0);
        let bInt = parseInt(b[j] || 0);
        let val = aInt + bInt + carry;
        carry = val > 1 ? 1:0;
        sum.unshift(val === 1 || val === 3 ? 1:0);
        i--;
        j--;
    }
    
    return (carry ?  [1, ...sum] : sum).join('');
};