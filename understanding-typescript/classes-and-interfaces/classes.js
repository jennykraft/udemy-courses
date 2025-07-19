var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this._firstName = ''; // gives extending classes access
        this._lastName = '';
        this.firstName = firstName; // uses the defined setters
        this.lastName = lastName;
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log("New User \"".concat(firstName, " ").concat(lastName, "\" created successfully"));
    }
    Object.defineProperty(User.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name');
            }
            this._firstName = name;
            console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
            console.log('First name set successfully');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name');
            }
            this._lastName = name;
            console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
            console.log('Last name set successfully');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
            console.log('Get full name:');
            return this._firstName + ' ' + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    User.greet = function () {
        console.log('Hello');
    };
    User.eid = 'USER';
    return User;
}());
// console.log(User.eid);
// User.greet();
// const max = new User('Max', 'Müller');
// console.log(max.fullName);
// inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this; // call the base class (user) constructor
        _this.jobTitle = jobTitle;
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log("New Employee \"".concat(firstName, " ").concat(lastName, "\" with job \"").concat(jobTitle, "\" created successfully"));
        return _this;
    }
    Employee.prototype.work = function () {
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log("".concat(this._firstName, " is working as a ").concat(this.jobTitle));
    };
    return Employee;
}(User));
var josh = new Employee('Josh', 'Smith', 'Software Developer');
josh.work();
