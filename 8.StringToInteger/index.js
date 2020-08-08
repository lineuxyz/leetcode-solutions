const MIN = -2147483648
const MAX = 2147483647
const NUMBERS = '0123456789'

var myAtoi = function(str) {
    let answer = 0
    
    let isOnNumber = false
    let sign = null
    
    for (const char of str) {
        if (!isOnNumber) {
            if (char === ' ') {
                if (sign) return 0
                continue
            }

            if (char === '+' || char === '-') {
                if (sign) return 0
                sign = char
                continue
            }
            
            const isNumber = NUMBERS.includes(char)
            
            if (!isNumber) {
                return 0
            }

            isOnNumber = true
            if (!sign) sign = '+'
        }
        
        if (isOnNumber) {
            const num = Number(char)
            if (char === ' ') break
            if (Number.isNaN(num)) break
            
            if (sign === '-') {
                if (-1 * answer - num / 10 < MIN / 10) return MIN
            } else {
                if (answer + num / 10 > MAX / 10) return MAX
            }
            
            answer = answer * 10 + num
        }
    }
    
    if (answer === 0) return 0
    
    const multipliers = {
        '+': 1,
        '-': -1
    }
    
    return answer * multipliers[sign]
};