// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = ['error', 4, 6];

const calcTempAmplitude = function (temps) {

    // first check if there are valid numbers in the array and save the index of the first found number
    let j = 0;
    while (j < temps.length && !Number.isInteger(temps[j])) {
        j++;
    }

    if (j === temps.length) {
        console.error("No valid temperatures");
        return null;
    }

    // now we are sure, minTemp and maxTemp are valid numbers
    let minTemp = temps[j];
    let maxTemp = temps[j];


    for (let i = j; i < temps.length; i++) {
        if (Number.isInteger(temps[i])) {
            if (temps[i] > maxTemp) {
                maxTemp = temps[i];
            } else if (temps[i] < minTemp) {
                minTemp = temps[i];
            }
        }
    }

    return maxTemp - minTemp;
};

console.log(calcTempAmplitude(temperatures));