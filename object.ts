const person = {
  name: "Mark",
  age: 39
}

const person2 = Object.create({ name: 'Mark', age: 39 })

declare function create(o: object | null): void;
create({ porp: 0 })