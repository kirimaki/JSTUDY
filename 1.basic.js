function add(num1, num2) {
    console.log('function');
    return num1 + num2;
}

console.log(add('g', 't'));

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '김';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));

function fullName(firstName, lastName) {
    return `${firstName} zzz ${lastName}`;
}