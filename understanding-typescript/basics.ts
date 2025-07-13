let userName: string;
let userAge = 30; // hier braucht man keine explizite Typzuweisung, weil mans direkt zuweist

userName = 'Max';
console.log(userName);

function add(a: number, b: number) {
    return a + b;
}
console.log(add(10, 5));

// ────────────────────────────────────────────────────────────────
// any type
// ────────────────────────────────────────────────────────────────
let age: any;
age = 10;
age = '10';
console.log(age);
// but it gets rid of the benefit of typescript!

// ────────────────────────────────────────────────────────────────
// union type
// ────────────────────────────────────────────────────────────────
// better alternative to any type
let unionAge: string | boolean;
unionAge = '100';
unionAge = true;
console.log(unionAge);

// ────────────────────────────────────────────────────────────────
// arrays
// ────────────────────────────────────────────────────────────────
let users: (string | number)[];
users = [1];
users.push('Max');
console.log(users);

// Alternative
let users2: Array<string | number>;

// ────────────────────────────────────────────────────────────────
// tupel
// ────────────────────────────────────────────────────────────────
let possibleResults: [number, number]; // fixed length array

// ────────────────────────────────────────────────────────────────
// Object types
// ────────────────────────────────────────────────────────────────
let user: {
    name: string;
    age: number;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'Admin',
        id: 11002,
    }
}
console.log(user);

// ────────────────────────────────────────────────────────────────
// "Must not be null" type
// ────────────────────────────────────────────────────────────────
let val: {} = 'test'; // any non null or undefined value
// not related to object type

// ────────────────────────────────────────────────────────────────
// record type
// ────────────────────────────────────────────────────────────────
let data: Record<string, number | string>; // type for key and type for value

data = {
    entry1: 1,
    entry2: 'test',
};

// ────────────────────────────────────────────────────────────────
// enums
// ────────────────────────────────────────────────────────────────
enum Role {
    Admin,
    Editor,
    Guest,
}
let userRole: Role = Role.Admin;
console.log(userRole);

// ────────────────────────────────────────────────────────────────
// literal types (more popular alternative to enums)
// ────────────────────────────────────────────────────────────────
let userRole2: 'admin' | 'editor' | 'guest';
userRole2 = 'editor';

// ────────────────────────────────────────────────────────────────
// type aliases and custom types
// ────────────────────────────────────────────────────────────────
type Role2 = 'admin' | 'editor' | 'guest';
type User2 = {
    name: string;
    age: number;
    role: Role2;
};

function access(role: Role2) {
    console.log(role);
}
access('editor');

// ────────────────────────────────────────────────────────────────
// function return value types
// ────────────────────────────────────────────────────────────────
function add2(a: number, b: number): number { // not always necessary because typescript can infer it
    return a + b;
}
// special return type void
function hello(h: string): void { // but same here, can be inferred
    console.log(h);
}
// type never
function logAndThrow(errorMessage: string): never { // won't finish but throw the error
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// ────────────────────────────────────────────────────────────────
// function as types
// ──────────────────────────────────────────────────────────────── 
function performJob(cb: (m: string) => void) { // not an arrow function but type
    cb('Jobs done!');
}

performJob(hello);

type User3 = {
    name: string;
    age: number;
    greet: () => string;
};

let user3: User3 = {
    name: 'Max',
    age: 30,
    greet() {
        return this.name;
    }
}
console.log(user3.greet());

// ────────────────────────────────────────────────────────────────
// types null and undefined
// ──────────────────────────────────────────────────────────────── 
let a: null | string;
let b: undefined | string;

a = null;
b = undefined;

if (!a) {
    //throw new Error('Element not found');
    console.log('a not found');
}
if (!b) {
    console.log('b not found');
}
// ────────────────────────────────────────────────────────────────
// forced "not null" and optional chaining
// ──────────────────────────────────────────────────────────────── 
// instead of using if (!a)... you can also just put ! after code that potentially could be null 
let c = a + b!; // but you disable typescript with this, error is just silenced
console.log(c);

console.log(user3?.age);

// ────────────────────────────────────────────────────────────────
// type casting
// ──────────────────────────────────────────────────────────────── 
// const inputEl = document.getElementId('user-name') as HTMLInputElement | null;
// console.log(inputEl?.value);

// ────────────────────────────────────────────────────────────────
// type unknown
// ──────────────────────────────────────────────────────────────── 
function process(val: unknown) {
    if (typeof val === 'string') {
        console.log('It is a string');
    }
    if (typeof val === 'number') {
        console.log('It is a number');
    }
} // typescript forces you to check the type first if you want to do something like val.log, so you first need to check if it's type object and if there is log in val.
// with type "any" you would just get a runtime error. It wouldn't force you to check it before executing.
process('hi');
process(10);

// ────────────────────────────────────────────────────────────────
// optional values
// ────────────────────────────────────────────────────────────────
function generateError(msg?: string) { // ? for making it optional
    if (msg) {
        throw new Error(msg);
    } else {
        console.log('no error');
    }

}
generateError();

// ────────────────────────────────────────────────────────────────
// nullish coalescing "??"
// ────────────────────────────────────────────────────────────────
let input = null;
const didProvideInput = input ?? false; // checks not for falsy values but undefined and null values
console.log(didProvideInput);