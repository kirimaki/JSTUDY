// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정연산자)

let a = 5;
a = -a; // -1 * 5
console.log(a);
console.log(-a);
a = -a;
console.log(a)

a = +a;
console.log(a)

a = -a;
a = +a;
console.log(a) // -5

let boolean = true;
console.log(boolean);
console.log(!boolean); // false
console.log(!!boolean); // true
console.log(!!!boolean);