// 주어진 숫자 만큼 0 부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함.
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

const iterate = (array, callback) => {
    for(let i = 0; i < array.length; i++) {
        let cnt = callback(array[i]);
        console.log(cnt);
    }
}

const test = function(val) {
    console.log(val * 3);
}

const test2 = (val) => {
    return val === 1;    
}

const testArray = [1,2,3,4];
iterate(testArray, test2);


// const print = val => console.log(val);
// const double = val => console.log(val * 2);

// iterate(10, print);
// iterate(10, double);

setTimeout(() => {
    console.log('3초 뒤 호출!');
}, 3000);
