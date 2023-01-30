// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Staff {
    #pay;
    #time;
    constructor(name, department, time, pay) {
        this.name = name;
        this.department = department;
        this.#time = time;
        this.#pay = pay;
    }
    get calculate() {
        console.log(this.#time * this.#pay);
    }

    set cal(time) {
        console.log(this.#pay * time);
    }
}

class PublicStaff extends Staff {
    static #PUBLIC_PAY = 10000;
    constructor(name, department, time) {
        super(name, department, time, PublicStaff.#PUBLIC_PAY);
    }
}

class TemporaryStaff extends Staff {
    static #PART_PAY = 8000;
    constructor(name, department, time) {
        super(name, department, time, TemporaryStaff.#PART_PAY);
    }
}

const jy = new PublicStaff('jy', 'test', 80);
console.log(jy);
jy.calculate;
jy.cal = 10000000;

const partJy = new TemporaryStaff('partJY', 'test', 20);
partJy.calculate;

// class TemporaryStaff extends Staff {
//     static #TEMPORARY_PAY = 8000
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//         this.payOfMonth = TemporaryStaff.#TEMPORARY_PAY;
//     }
// }