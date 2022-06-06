var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application("one");
console.log(Application.count);
var app2 = new Application("two");
console.log(Application.count);
var app3 = new Application("three");
console.log(Application.count);
