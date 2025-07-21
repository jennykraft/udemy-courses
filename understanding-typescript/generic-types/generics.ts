// generic type = types where multiple types need to work together -> array and string type
let names: Array<string> = ['test']; // Array = generic type
let names1: string[] = ['test']; // shortcut

// create an own generic type
type DataStore<T> = { // T = placeholder "Type"
    [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

let nameStore: DataStore<string> = {};

// ––––––––––––– generic functions –––––––––––––––––––
function merge<T>(a: T, b: T) {
    return [a, b];
}

const ids = merge<number>(1, 2);
const ids1 = merge(1, 2); // same

// ––––––––––––––– generics & constraints ––––––––––––––-
function mergeObj<T extends object>(a: T, b: T) {
    return { ...a, ...b };
}

const merged = mergeObj({ userName: 'Max' }, { age: 35 });
console.log(merged);

// –––––––––––– generic classes ––––––––––––––––––––-
class User<T> {
    constructor(public id: T) { }
}

const user = new User('i1'); // = const user: User<string> = new User('i1');
user.id;