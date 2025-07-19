// classes
class User {
    protected _firstName: string = ''; // gives extending classes access
    private _lastName: string = '';

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName; // uses the defined setters
        this.lastName = lastName;
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––')
        console.log(`New User "${firstName} ${lastName}" created successfully`);
    }

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._firstName = name;
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log('First name set successfully');

    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._lastName = name;
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log('Last name set successfully');
    }

    get fullName() {
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log('Get full name:')
        return this._firstName + ' ' + this._lastName;

    }

    static eid = 'USER';

    static greet() {
        console.log('Hello')
    }
}

// console.log(User.eid);
// User.greet();

// const max = new User('Max', 'Müller');
// console.log(max.fullName);


// inheritance
class Employee extends User {

    constructor(firstName: string, lastName: string, public jobTitle: string) {
        super(firstName, lastName); // call the base class (user) constructor
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log(`New Employee "${firstName} ${lastName}" with job "${jobTitle}" created successfully`);
    }

    work() {
        console.log('–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––');
        console.log(`${this._firstName} is working as a ${this.jobTitle}`);
    }
}

const josh = new Employee('Josh', 'Smith', 'Software Developer');
josh.work();


// abstract class: needs to be extended to work
abstract class UIElement {
    constructor(public identifier: string) {

    }

    clone(targetLocation: string) {
        // logic
    }

}

class SideDrawer extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }
}