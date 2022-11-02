class Person1 {
  private static CITY = 'seoul'
  public hello() {
    console.log('안녕하세요', Person1.CITY)
  }
  public change() {
    Person1.CITY = 'LA'
  }
}

const p11 = new Person1()
p11.hello();

const p12 = new Person1()
p12.hello();

p11.change();
p12.hello();