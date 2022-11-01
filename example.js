"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name + ' Lee';
    }
    set name(n) {
        this._name = n;
    }
}
const p1 = new Person('Mark', 39);
console.log(p1.name);
p1.name = 'Min';
console.log(p1.name);
