// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign

const pizza = { name: '🍕', price: 2, owner: {name: 'Juyeon'} };
const ramen = { name: '🍟', price: 3 };
const buger = { name: '🍔', price: 4 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);

store2.push(buger);
console.log(store1);
console.log(store2);

pizza.price = 5;
store1.push(buger);

console.log(store1);
console.log(store2);




