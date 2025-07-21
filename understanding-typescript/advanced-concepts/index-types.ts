// index type: developers should be able to add as many properties they want, as long as they have a shared value type
type DataStore = {
    [prop: string]: number | boolean // placeholder for any property (a dynamic property or multiple where we don't know the name in advance)
    // string = not a value type but type of the property name
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;
// store.name = 'Max'; won't work because only numbers and booleans are allowed in type DataStore



// ––––––––––– constant types ––––––––––––––––––––
let roles = ['admin', 'guest', 'editor'] as const; // typescript feature for more narrow types
// "when inferring be as narrow as possible"

// roles.push('Max'); won't work

