function lengthOfLongestSubstring(s: string): number {
    let map: Map<string, number> = new Map([]);
    let longest = 0;
    let length = 0; 

    for(let i = 0; i < s.length; i++) {
        const encountered = map.get(s[i]);
        if (encountered === undefined) {
            length += 1;
        } else {
            length = Math.min(i - encountered, length + 1);
        }
        longest = Math.max(longest, length);
        map.set(s[i], i);
    }
    return longest;
}