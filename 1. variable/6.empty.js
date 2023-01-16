// null, undefined
let variable;
console.log(variable);

variable = null;
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; //활성화된 아이템이 있는 상태

console.log(typeof null); // 비어있는 object
console.log(typeof undefined); // undefined

console.log(typeof "123");
console.log(typeof 123);
console.log(typeof 123.445);
console.log(typeof false);
console.log(typeof Infinity);
const nan = 123 / 'test';
console.log(nan); 
console.log(typeof nan);

const test = function() {
    console.log("이건 함수에요");
}

const test2 = () => {
    console.log("이것도 함수에요");
}

console.log(typeof test);
console.log(typeof test2);

const object2 = {
    name : 'test'
};

const array2 = [1,2,3];

console.log(typeof object2);
console.log(typeof array2);
