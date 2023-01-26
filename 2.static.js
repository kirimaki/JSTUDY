// static 정적 프로퍼티, 메서드
class Champion {
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    static first = 'talron';
    constructor(name) {
        this.name = name;
    }

    //클래스 레벨의 메서드
    static makeRandomFruit() {

        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
        return new Champion(this.first);
    }
    //인스턴스 레벨의 메서드
    skill = () => {
        console.log(`${this.name} 스킬쓴다 얍.`);
    }
}

console.log(Champion);
const sibir = Champion.makeRandomFruit();
console.log(sibir);
sibir.skill();

Math.pow();

const test = new Math();
test.trunk(123);
Number.isFinite(1);
