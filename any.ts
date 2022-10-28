function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString(); // any는 안 쓰는 게 좋음

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 })
const d: string = c.indexOf('0');