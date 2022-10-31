interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) { // 인수에 age?: number은 가능하나, age: number은 불가능
  console.log(`안녕하세요! ${name}입니다.`)
}

helloPerson('Mark', 39); // interface에 age가 있기 때문에 인수로 age도 받을 수 있음