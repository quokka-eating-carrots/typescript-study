"use strict";
const aNumber = maybe;
if (maybe === true) {
    const aBoolean = maybe;
    const aString = maybe; // true라는 값 때문에 string 할당이 안 됨
}
if (typeof maybe === 'string') { //typeof typegaurd
    const aString = maybe;
    const aBoolean = maybe;
}
