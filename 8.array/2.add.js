const fruits = ['π','π','π','π₯­'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
console.log(fruits.length);

// const fruits = ['π','π','π','π₯­'];
// μΆκ°, μ­μ  - μ’μ§μμ λ°©μ π© (μΈλ±μ€λ₯Ό μ΄μ©ν΄ μΆκ°νλκ±΄ μ’μ§μμ)
fruits[6] = 'sadf';
console.log(fruits);

delete fruits[1];
console.log(fruits);

