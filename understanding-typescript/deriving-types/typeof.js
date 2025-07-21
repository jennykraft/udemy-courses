"use strict";
const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
};
// another use case for typeof
function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
// gets sum or substract as call back function
function performMathAction(cb) {
    const result = cb(5, 6);
    console.log(result);
}
performMathAction(sum);
performMathAction(subtract);
