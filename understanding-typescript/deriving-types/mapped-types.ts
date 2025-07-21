// convert one object type to another object type

type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

// mapped type, convert types to numbers
type Results<T> = {
    readonly [Key in keyof T]?: number; // can't be overwritten because of readonly, add readonly afterwards
};

let mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b;
    },
    subtract(a: number, b: number) {
        return a - b;
    }
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(3, 5)
}

// make properties optional: add -? after [Key in keyof T] 
// remove readonly with -readonly
