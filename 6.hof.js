const fruits = [ '🍌', '🥝', '🍇', '🥝' ];
// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 배열을 빙글빙글 돌면서 원하는것을 할 때
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때
const item1 = {name : 'milk', price: 2};
const item2 = {name : 'cookie', price: 3};
const item3 = {name : 'rice', price: 4};
const products = [item1, item2, item3];

// find : 제일 먼저 조건에 맞는 아이템을 반환
let result = products.find((value) => {
    return value.name === 'milk';
});

console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => {
    return value.name === 'rice';
})


// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((value) => {
    return value.name === 'cookie';
})

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((value) => {
    return value.hasOwnProperty('price');
});

console.log(result);

