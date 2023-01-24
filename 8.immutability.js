// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 🤔
// 상태변경이 필요한 경우에는 새로운 상태를(오브젝트, 값) 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)

function display(num) {
    num = 5; // ❌
    console.log(num);
}

let value = 4;
display(value);
console.log(value);

function changeName(obj) { // 이름부터 변경한다는 느낌을 주도록 ! 
    
    const test = {...obj};
    test.name = 'Bob';
    // obj.name = 'Bob'; // ❌❌❌❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경❌❌❌❌❌❌
    
    return test; // 새로운 값을 복사해서 리턴해야함!
}

const ellie = { name: 'Ellie' };
console.log(ellie);
console.log(changeName(ellie));
console.log(ellie);