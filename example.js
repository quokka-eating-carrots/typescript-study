"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'Mark';
        this.country = 'Korea';
    }
    hello() {
        this.country = 'USA';
    }
}
const p1 = new Person('Mark', 39);
console.log(p1.name);
p1.name = 'Min';
console.log(p1.name);
