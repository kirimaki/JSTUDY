const fruits = ['🍌','🍋','🍇','🥭'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
console.log(fruits.length);

// const fruits = ['🍌','🍋','🍇','🥭'];
// 추가, 삭제 - 좋지않은 방식 💩 (인덱스를 이용해 추가하는건 좋지않음)
fruits[6] = 'sadf';
console.log(fruits);

delete fruits[1];
console.log(fruits);

