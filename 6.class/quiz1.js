// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
    #value = 0;
    constructor(value) {        
        if(isNaN(value) || value < 0) {
            this.#value = 0;
        } else {
            this.#value = value;
        }
    }
    add = () => {
        this.#value++;
    }
    get view() {
        console.log(`${this.#value}`);
    }
}

const counter = new Counter('asd');
counter.add(); // 0 -> 1
counter.add(); // 1 -> 2
counter.view; 


