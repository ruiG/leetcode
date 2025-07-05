type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

export function argumentsLength(...args: JSONValue[]): number {
    let count = 0;
    for(let a = 0; a < args.length; a++){
        if(a !== null || a !== undefined) {
            count++
        }
    }
    return count
};

/**
 * argumentsLength(1, 2, 3); // 3
 */