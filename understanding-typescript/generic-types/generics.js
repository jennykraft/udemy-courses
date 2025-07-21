var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// generic type = types where multiple types need to work together -> array and string type
var names = ['test']; // Array = generic type
var names1 = ['test']; // shortcut
var store = {};
store.name = 'Max';
store.isInstructor = true;
var nameStore = {};
// ––––––––––––– generic functions –––––––––––––––––––
function merge(a, b) {
    return [a, b];
}
var ids = merge(1, 2);
var ids1 = merge(1, 2); // same
// ––––––––––––––– generics & constraints ––––––––––––––-
function mergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = mergeObj({ userName: 'Max' }, { age: 35 });
console.log(merged);
