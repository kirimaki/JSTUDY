const fruits = [ 'π', 'π₯', 'π', 'π₯' ];
// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

// λ°°μ΄μ λΉκΈλΉκΈ λλ©΄μ μνλκ²μ ν  λ

fruits.forEach(function(value, index, array) {
    console.log(value);
})
fruits.forEach((value) => console.log(value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμ λ
const item1 = {name : 'milk', price: 4};
const item2 = {name : 'cookie', price: 3};
const item3 = {name : 'rice', price: 4};
const products = [item1, item2, item3];

// find : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
let result = products.find((value) => {
    return value.name === 'milk';
});

console.log(result);

// findIndex : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((value) => {
    return value.name === 'rice';
})


// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((value) => {
    return value.name === 'cookie';
})

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((value) => {
    return value.hasOwnProperty('price');
});

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((value) => {
    return value.price === 4;
})

console.log(result);
console.clear();

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
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

// Flatmap μ€μ²©λ λ°°μ΄μ μ« ν΄μ€
result = nums.map(item => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1,2]);
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
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

// reduce λ°°μ΄μ κ°λ€μ μ μ΄μ νλλ‘
result = [1, 2, 3, 4, 5].reduce((sum, value) =>  (sum += value), 0);

console.log(result);