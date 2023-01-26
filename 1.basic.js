// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법) 더이상 쓰이지않음
// 2. 클래스 👍

// 1. 생성자함수
function Champion (name, q, w, e) {
    this.name = name;
    this.q = () => {
        console.log('q스킬 사용');
    };
    this.w = () => {
        console.log('w 보호막 스킬 사용');
    };
    this.e = () => {
        console.log('e 짜증내기 스킬 사용');
    }
    return this;
}

// 2. 클래스 class
class NewChampion {
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name) {
        this.name = name;
    }
    skill = () => {
        console.log(`${this.name} 스킬쓴다 얍.`);
    }
}

// jax 은 NewChampion 클래스의 인스턴스이다.
const jax = new NewChampion('jax');
jax.skill();

// lux 도 인스턴스임.
const lux = new NewChampion('lux');
lux.skill();

// 객체임.
const obj = {
    name: 'kim',
    age: 20
};
