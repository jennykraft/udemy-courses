const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
};

// type Settings = {
//     difficulty: string;
//     minLevel: number;
//     ...
// };

type Settings = typeof settings



// another use case for typeof
function sum(a: number, b: number) {
    return a + b;
}

function subtract(a: number, b: number) {
    return a - b;
}

type Sum = typeof sum;
type Subtract = typeof subtract;

// gets sum or substract as call back function
function performMathAction(cb: Sum | Subtract) {
    const result = cb(5, 6);
    console.log(result);
}

performMathAction(sum);
performMathAction(subtract);