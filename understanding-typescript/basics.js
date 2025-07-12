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
