// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2~3번을 반복함

for(let i = 0; i < 5; i++) {
    console.log(i)
}

const array = [1,2,3,4,5];

// 향상된 Loop Statement
for(let i = 0; i < 5; i++) {
 for(let j in array) {
    console.log(i, j);
 }
}

// ES6 문법 여기서 이어서하기!!
array.forEach(element => {
    console.log(element);
});