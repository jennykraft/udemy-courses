//interfaces (typescript feature, doesn't exist in javascript), like a contract

interface Authenticatable {
    email: string;
    password: string;

    login(email: string, password: string): void;
    logout(): void;
    // until here you can also just use "type" instead of interface (same structure)    
}

//declaration merging (not often used)
interface Authenticatable {
    role: string;
}

let user: Authenticatable;

user = {
    email: 'test@test.com',
    password: 'password',
    role: 'Developer',
    login(email: string, password: string) {
        // reach out to db, check credentials, create session ...
        console.log("Logged in successfully");
    },
    logout() {
        // clear session
        console.log("Logged out successfully");
    }
}


// define funciton type with interface, but "type" is used more often
interface SumFn {
    (a: number, b: number): number;
}

// implement interfaces, you can implement multiple interfaces at once
// must at least have the properties defined in the interface
class AuthenticatableUser implements Authenticatable {
    constructor(public email: string, public password: string, public userName: string, public role: string) {

    }

    login(email: string, password: string): void {
        // ...
    }

    logout(): void {
        // ...
    }
}

// you are guaranteed that the user has a login and logout function
function authenticate(user: Authenticatable) {
    user.logout();
}

// extend an interface
interface AuthenticatableAdmin extends Authenticatable {
    adminName: 'admin' | 'superadmin';
}

