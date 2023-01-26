// 접근제어자 - 캡슐화
// private(#), public(기본), protected

class Champion {
    #name;
    #type = '챔피언';
    constructor(name) {
        this.#name = name;
    }
    skill = () => {
        console.log(`${this.#name} 스킬쓴다 얍.`);
    };
}

const garen = new Champion('garen');
//garen.#skill(() => console.log('garen 주금'));
console.log(garen);
garen.skill();
console.log(garen);