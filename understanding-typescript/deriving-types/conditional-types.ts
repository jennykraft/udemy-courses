// useful for building helper types

type StringArray = string[];
//type ElementType = StringArray[number]; learned earlier in the course, but not conditional type

// type ElementType<T extends any[]> = T[number];
// type Example1 = ElementType<StringArray>;
let text = 1;

type GetElementType<T> = T extends any[] ? T[number] : never; // condition, like '==='
type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;




type FullNamePerson = { firstName: string; lastName: string };
type FullNameOrNoting<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNoting<T> {
    if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}` as FullNameOrNoting<T>; // type casting
    }
    throw new Error('no names found');
}


