var userName;
var userAge = 30; // hier braucht man keine explizite Typzuweisung, weil mans direkt zuweist
userName = 'Max';
console.log(userName);
function add(a, b) {
    return a + b;
}
console.log(add(10, 5));
// ────────────────────────────────────────────────────────────────
// any type
// ────────────────────────────────────────────────────────────────
var age;
age = 10;
age = '10';
console.log(age);
// but it gets rid of the benefit of typescript!
// ────────────────────────────────────────────────────────────────
// union type
// ────────────────────────────────────────────────────────────────
// better alternative to any type
var unionAge;
unionAge = '100';
unionAge = true;
console.log(unionAge);
// ────────────────────────────────────────────────────────────────
// arrays
// ────────────────────────────────────────────────────────────────
var users;
users = [1];
users.push('Max');
console.log(users);
// Alternative
var users2;
// ────────────────────────────────────────────────────────────────
// tupel
// ────────────────────────────────────────────────────────────────
var possibleResults; // fixed length array
// ────────────────────────────────────────────────────────────────
// Object types
// ────────────────────────────────────────────────────────────────
var user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'Admin',
        id: 11002,
    }
};
console.log(user);
// ────────────────────────────────────────────────────────────────
// "Must not be null" type
// ────────────────────────────────────────────────────────────────
var val = 'test'; // any non null or undefined value
// not related to object type
// ────────────────────────────────────────────────────────────────
// record type
// ────────────────────────────────────────────────────────────────
var data; // type for key and type for value
data = {
    entry1: 1,
    entry2: 'test',
};
// ────────────────────────────────────────────────────────────────
// enums
// ────────────────────────────────────────────────────────────────
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log(userRole);
// ────────────────────────────────────────────────────────────────
// literal types (more popular alternative to enums)
// ────────────────────────────────────────────────────────────────
var userRole2;
userRole2 = 'editor';
function access(role) {
    console.log(role);
}
access('editor');
// ────────────────────────────────────────────────────────────────
// function return value types
// ────────────────────────────────────────────────────────────────
function add2(a, b) {
    return a + b;
}
// special return type void
function hello(h) {
    console.log(h);
}
// type never
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// ────────────────────────────────────────────────────────────────
// function as types
// ──────────────────────────────────────────────────────────────── 
function performJob(cb) {
    cb('Jobs done!');
}
performJob(hello);
var user3 = {
    name: 'Max',
    age: 30,
    greet: function () {
        return this.name;
    }
};
console.log(user3.greet());
// ────────────────────────────────────────────────────────────────
// types null and undefined
// ──────────────────────────────────────────────────────────────── 
var a;
var b;
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
var c = a + b; // but you disable typescript with this, error is just silenced
console.log(c);
console.log(user3 === null || user3 === void 0 ? void 0 : user3.age);
// ────────────────────────────────────────────────────────────────
// type casting
// ──────────────────────────────────────────────────────────────── 
// const inputEl = document.getElementId('user-name') as HTMLInputElement | null;
// console.log(inputEl?.value);
// ────────────────────────────────────────────────────────────────
// type unknown
// ──────────────────────────────────────────────────────────────── 
function process(val) {
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
function generateError(msg) {
    if (msg) {
        throw new Error(msg);
    }
    else {
        console.log('no error');
    }
}
generateError();
// ────────────────────────────────────────────────────────────────
// nullish coalescing "??"
// ────────────────────────────────────────────────────────────────
var input = null;
var didProvideInput = input !== null && input !== void 0 ? input : false; // checks not for falsy values but undefined and null values
console.log(didProvideInput);
