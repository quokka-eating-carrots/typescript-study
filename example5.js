"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다.`);
    }
    printName() {
        console.log(this._name);
    }
}
const p123 = new Parent('Mark', 39);
p123.print();
class Child extends Parent {
    constructor(age) {
        super('Makr Jr.', age);
        this.gender = 'male';
        this.printName();
    }
}
const c = new Child(5);
c.print();
