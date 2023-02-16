// 0, 1, 2, 3 ..., 9
// 0, 2, 4, 6 ..., 18

function makeIterable(initialValue, maxValue, callback) {
    return {
        [Symbol.iterator]() {
            let num = initialValue;
            return {
                next() {
                    return { value: callback(num++), done: num > maxValue };
                },
            };
        },
    };
}

const multiple = makeIterable(0, 20, (num) => num * 3);

for(const num of multiple) {
    console.log(num);
}