let name = 'apple';
let color = 'red';
let display = 'redApple';

let orangeName = 'orange';

let apple = {
    name : 'apple',
    color : 'red',
    display : 'redApple',
}

console.log(apple);
console.log(apple.name);
console.log(apple.color);

// 변수는 데이터, 스택메모리에 저장되고 오브젝트는 힙메모리에 저장되어 있다. 
// 변수에는 힙메모리에 저장된 오브젝트의 주소값이 저장되어있따.

let a = 1;
let b = a;
b = 2;

