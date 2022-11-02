"use strict";
class ClassName {
    constructor() { }
    static getInstance() {
        // ClassName으로 만든 object가 있으면 object를 리턴, 없다면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();
console.log(a1 === b1);
