abstract class AbstractPerson {
  protected _name: string = 'Mark'

  abstract setName(name: string): void
}

// new AbstractPerson() 사용할 수 없음

class APerson extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p6 = new APerson()
p6.setName()