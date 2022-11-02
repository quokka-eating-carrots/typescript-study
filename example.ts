class Person {
  public readonly name: string = 'Mark'
  private readonly country: string;

  public constructor(private _name: string, private age: number) {
    this.country = 'Korea'
  }

  hello() {
    this.country = 'USA'
  }
}

const p1: Person = new Person('Mark', 39);
console.log(p1.name);
p1.name = 'Min'
console.log(p1.name);