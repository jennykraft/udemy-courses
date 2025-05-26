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
