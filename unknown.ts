declare const maybe: unknown;
const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;

  const aString: string = maybe; // true라는 값 때문에 string 할당이 안 됨
}

if (typeof maybe === 'string') { //typeof typegaurd
  const aString: string = maybe;

  const aBoolean: boolean = maybe;
}