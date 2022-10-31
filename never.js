"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) {
    }
}
if (typeof a !== 'string') {
    a;
}
const b = ''; // never로 막아 둬서 b에 오류가 남
