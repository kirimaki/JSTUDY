// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

let fruitArray = ['🍌', '🍓', '🍇', '🍓'];
let beforeFruit = '🍓';
let afterFruit = '🥝';

function replaceFruit(arr) {
    return fruitArray.map((item) => item === beforeFruit ? afterFruit : item);
}

console.log(replaceFruit(fruitArray, beforeFruit, afterFruit));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

fruitArray = [ '🍌', '🥝', '🍇', '🥝' ];
let targetFruit = '🥝';

function countFruit(array, target) {
    return array.filter((item) => item === target).length;
}

console.log(countFruit(fruitArray, targetFruit));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

let fruitArray1 = ['🍌', '🥝', '🍇'];
let fruitArray2 = ['🍌', '🍓', '🍇', '🍓'];

function containFruit(arr1, arr2) {
    return fruitArray1.filter((item) => fruitArray2.includes(item));
}

console.log(containFruit(fruitArray1, fruitArray2));

// 퀴즈4 : 5이상(보다 큰) 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

function averageNum(arr) {
    return arr.filter((num) => num > 5).reduce((sum, curr, _, arr) => sum += curr / arr.length);
}

console.log(averageNum(nums));
