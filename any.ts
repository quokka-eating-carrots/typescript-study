function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString(); // any는 안 쓰는 게 좋음

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 })
c.indexOf('0'); // a에 타입이 지정되어서 indexOf를 사용할 수 없게 됨