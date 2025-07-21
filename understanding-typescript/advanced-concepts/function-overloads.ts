// problem: 

function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }

    return val.length;
}

const numberOfWords = getLength('test test test'); // will always be a string but TS thinks it can also return a number, so numOfWords.length would throw an error

// better way: function overload
function getLength1(val: string): string;
function getLength1(val: any[]): number;
function getLength1(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }

    return val.length;
}
const numberOfWords1 = getLength1('test test test');
numberOfWords1.length;
// numberOfWords.length; gives an error