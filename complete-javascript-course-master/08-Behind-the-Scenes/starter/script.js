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




console.log("Regular functions vs arrow functions");

var firstName2 = 'Matilda'; // -> don't use var

const jonas2 = {
    firstName2: 'Jonas',
    year: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);
    },

    greet: () => console.log(`Hey ${this.firstName2}`),
};

jonas2.greet(); // undefined because of arrow function not getting its own this keyword, but only the parent's (global scope)
// with var firstName you get "Hey Matilda"

//NEVER USE AN ARROW FUNCTION AS A METHOD


const anna = {
    firstName: 'Anna',
    year: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);

        const isMilleanial = function () {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMilleanial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};

//anna.calcAge(); // error because this undefined in isMillenial()

// pre ES6 solution: variable self

const anna2 = {
    firstName: 'Anna',
    year: 1990,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);

        const self = this; // self or that 

        const isMilleanial = function () {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        isMilleanial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};

anna2.calcAge();



// ES6 solution: use an arrow function

const anna3 = {
    firstName: 'Anna',
    year: 1990,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);


        const isMilleanial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996); // this from the parent scope -> Anna object
        };
        isMilleanial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};

anna3.calcAge();



console.log("arguments keyword") // only available in regular functions

const addExpr2 = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

var addArrow2 = (a, b) => {
    console.log(arguments);
    return a + b; // arrow function doesn't get arguments
}

// addArrow2(2, 5, 8); // error

