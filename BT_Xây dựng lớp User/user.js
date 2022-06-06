"use strict";
exports.__esModule = true;
exports.User = void 0;
var ROLE;
(function (ROLE) {
    ROLE[ROLE["admin"] = 1] = "admin";
    ROLE[ROLE["user"] = 2] = "user";
})(ROLE || (ROLE = {}));
var User = /** @class */ (function () {
    function User(name, email, user) {
        this.name = name;
        this.email = email;
        this.user = user;
    }
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Email", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "User", {
        get: function () {
            return this.user;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getInfo = function () {
        console.log("name : ".concat(this.name, " email: ").concat(this.email, " user: ").concat(this.user));
    };
    User.prototype.isAdmin = function () {
        if (this.user == 1) {
            console.log("admin");
        }
        else if (this.user == 2) {
            console.log("nguoi ddung binh thuong");
        }
        else {
            console.log("error");
        }
    };
    return User;
}());
exports.User = User;
var user = new User("thang", "thang@gmail.com", ROLE.user);
user.getInfo();
user.isAdmin();
