// Iterable 하다는건! 순회가 가능하다는것
// [Symbol.iterator]() : Iterator를 반환하면 됨.
// 심볼정의를 가진 객체, 특정한 함수가 Iterator를 리턴한다는것은
// 순회가능한 객체이다 라는걸 알수 있다.
// 순회가 가능하면 무엇을 할수 있나? for..of, spread
const array = [1, 2, 3];

for(const item of array) {
    console.log(item);
}

const obj = {0: 1, 1: 2 };

for(const item in obj) { // key를 출력
    console.log(item); 
}

const iterator = array.values();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

while(true) {
     const item = iterator.next();
     if(item.done) {
        break;
     } else {
        console.log(item.value);
     }
}