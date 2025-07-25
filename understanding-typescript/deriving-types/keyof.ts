type User = { name: string; age: number };
type UserKeys = keyof User; // only exists in typescript

let validKey: UserKeys;
validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('error');
    }
}

const data = { id: 1, isStored: false, values: [1, -5, 10] };
const isStored = getProp(data, 'isStored');
const user = { name: 'Max', age: 35 };
const val = getProp(user, 'age');