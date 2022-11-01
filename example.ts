class Person {
  public constructor(private _name: string, private age: number) {

  }

  get name() {
    return this._name + ' Lee';
  }

  set name(n: string) {
    this._name = n;
  }
}

const p1: Person = new Person('Mark', 39);
console.log(p1.name);
p1.name = 'Min'
console.log(p1.name);