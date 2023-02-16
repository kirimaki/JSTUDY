// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

let arr = ['🍌', '🍓', '🍇', '🍓'];

function test(arr, from, to) {
    const arr2 = arr.slice();
    for(let i=0; i<= arr2.length; i++) {
        if(arr2[i] === from) {
            arr2[i] = to;
        }
    }
    return arr2;
}
const result = test(arr, '🍌', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

quiz2Input = [ '🍌', '🥝', '🍇', '🥝'];
quiz2Element = '🥝';

function quiz2(arr, ele) {
    let cnt = 0;
    arr.forEach((fruit) => {
        fruit === ele && cnt++; 
    })
    return cnt;
}

const result2 = quiz2(quiz2Input, quiz2Element);
console.log(result2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const arr1 = ['🍌', '🥝', '🍇'];
const arr2 = ['🍌', '🍓', '🍇', '🍓'];

function quiz3(arr1, arr2) {
    const arr3 = [];
    for(let i=0; i<arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}

console.log(quiz3(arr1, arr2));