export function numberOfCuts(n: number): number {
    if(n == 1){
        return 0
    }

    if(n % 2 == 0) {
        // is even
        return n / 2
    }
     // is odd
     return n

};