function reverse(x: number): number {
    let result = 0;

    const multiplier = x < 0 ? -1 : 1;
    
    const digits = Math.floor(Math.log10(Math.abs(x)));
                                       
    for (let i = 0; i <= digits; i++) {
        const mask = Math.floor(Math.pow(10, digits - i));
        
        const last = Math.abs(x) % 10;
        
        result += last * mask;     
        
        x = Math.floor(Math.abs(x) / 10);
    }
    
    if (result > 2**31) {
        return 0;
    } else {
        return result * multiplier;    
    }
}