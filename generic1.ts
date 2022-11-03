function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

function hello(message: any): any {
  return message;
}

console.log(hello('mark').length)
console.log(hello(39).length)

function helloGeneric<T>(message: T): T {
  return message
}

console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39))
console.log(helloGeneric(true))