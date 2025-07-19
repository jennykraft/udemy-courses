//interfaces (typescript feature, doesn't exist in javascript), like a contract
var user;
user = {
    email: 'test@test.com',
    password: 'password',
    role: 'Developer',
    login: function (email, password) {
        // reach out to db, check credentials, create session ...
        console.log("Logged in successfully");
    },
    logout: function () {
        // clear session
        console.log("Logged out successfully");
    }
};
// implement interfaces, you can implement multiple interfaces at once
// must at least have the properties defined in the interface
var AuthenticatableUser = /** @class */ (function () {
    function AuthenticatableUser(email, password, userName, role) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.role = role;
    }
    AuthenticatableUser.prototype.login = function (email, password) {
        // ...
    };
    AuthenticatableUser.prototype.logout = function () {
        // ...
    };
    return AuthenticatableUser;
}());
// you are guaranteed that the user has a login and logout function
function authenticate(user) {
    user.logout();
}
