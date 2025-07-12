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


// PROBLEM 2:
// Function should now receive 2 arrays of temps

const calcTempAmplitudeNew = function (t1, t2) {
    const mergedArray = t1.concat(t2);
    return calcTempAmplitude(mergedArray);
};

console.log(calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]));


// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += `... ${arr[i]}ºC in ${i + 1} days `
    }

    console.log(result);
}

const testData = [12, 5, -5, 0, 4];
printForecast(testData);



// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

function analyzeWorkWeek(hours) {
    const total = hours.reduce((sum, h) => sum + h, 0);
    const daysWorked = hours.filter(h => h > 0);
    const average = +(total / hours.length).toFixed(2); // 2 decimals
    const maxHours = Math.max(...hours);
    const maxDayIndex = hours.indexOf(maxHours);
    const fullTime = total >= 35;

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const mostWorkedDay = dayNames[maxDayIndex];

    return {
        totalHours: total,
        averageDailyHours: average,
        mostWorkedDay,
        daysWorked: daysWorked.length,
        isFullTime: fullTime
    };
}

// TEST
const weekData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWorkWeek(weekData));
