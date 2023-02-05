const fruits = [ '🍌', '🥝', '🍇', '🥝' ];
// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 배열을 빙글빙글 돌면서 원하는것을 할 때

fruits.forEach(function(value, index, array) {
    console.log(value);
})
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때
const item1 = {name : 'milk', price: 4};
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

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((value) => {
    return value.price === 4;
})

console.log(result);
console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
    if(item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(result);

// Flatmap 중첩된 배열을 쫙 펴줌
result = nums.map(item => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1,2]);
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [
    {name : 'kim', order : 1}, 
    {name : 'park', order : 3}, 
    {name : 'choi', order : 2}, 
    {name : 'lee', order : 4}, 
];



numbers.sort();
numbers.sort((a, b) => {
    return a - b;
});
console.log(numbers);

numbers.sort((a, b) => {
    return a.order - b.order;
});
console.log(numbers);

// reduce 배열의 값들을 접어서 하나로
result = [1, 2, 3, 4, 5].reduce((sum, value) =>  (sum += value), 0);

console.log(result);