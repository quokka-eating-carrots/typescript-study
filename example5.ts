class Parent {
  constructor(protected _name: string, private _age: number) { }

  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다.`)
  }

  protected printName(): void {
    console.log(this._name)
  }
}

const p123 = new Parent('Mark', 39)
p123.print();

class Child extends Parent {
  public gender = 'male'

  constructor(age: number) {
    super('Makr Jr.', age)

    this.printName();
  }
}

const c = new Child(5);
c.print();