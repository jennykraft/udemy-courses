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