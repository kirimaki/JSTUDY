// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Staff {
    #monthlyWorkingHours;
    #pay;
    constructor(name, team, monthlyWorkingHours, pay) {
        this.name = name;
        this.team = team;
        this.#monthlyWorkingHours = monthlyWorkingHours;
        this.#pay = pay;
    }
    salary() {
        console.log(this.#monthlyWorkingHours * this.#pay);
    }
    work(time) {
        this.#monthlyWorkingHours += time;
    }
}

class FullTimeStaff extends Staff {
    static #PAY_RATE = 10000;
    constructor(name, team, monthlyWorkingHours) {
        super(name, team, monthlyWorkingHours, FullTimeStaff.#PAY_RATE);
    }
}

class PartTimeStaff extends Staff {
    static #PAY_RATE = 8000;
    constructor(name, team, monthlyWorkingHours) {
        super(name, team, monthlyWorkingHours, PartTimeStaff.#PAY_RATE);
    }
}

const ej = new FullTimeStaff('ej', '해외영업', 80);
const jy = new PartTimeStaff('ej', '해외영업', 80);
jy.work(10);
jy.work(1);
console.log(ej);
ej.salary();
jy.salary();