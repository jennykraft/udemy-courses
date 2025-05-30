'use strict';

function calcAge(birthYear) {
    const age = 2025 - birthYear
    // console.log(firstName); doesn't work here

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            const firstName = 'Steven';
            var millenial = true // pre ES6, var is function-scoped // don't use var 
            const str = `${firstName}, you're a millenial!`; // Steven, not Jonas
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT'
        }

        millenial ? console.log('Millenial') : console.log('No millenial') // works because of var
        // console.log(add(2, 3)); //doesn't work because functions are block-scoped in strict mode
        console.log(output);
    }

    printAge();
    return age;

}

const firstName = 'Jonas';
calcAge(1994);

/* --------------------------------- */
console.log("Hoisting");

/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;


console.log(addDecl(2, 3));
console.log(addExpr(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

*/

console.log("this");

console.log(this);

const calcAge2 = function (birthYear) {
    console.log(2025 - birthYear);
    console.log(this); // undefined
}
calcAge2(2003);

const calcAgeArrow = birthYear => {
    console.log(2025 - birthYear);
    console.log(this); // window
}

calcAgeArrow(1999);


const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2020,
};

matilda.calcAge = jonas.calcAge; // copy the method

matilda.calcAge(); // works, returns 5
// this always points to the object which is calling the method

const f = jonas.calcAge; // copy the function into a new variable

//f(); // this is undefined so you get an error