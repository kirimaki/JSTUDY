// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('yummy');
//     }
//     sleep() {
//         console.log('zzz');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('yummy');
//     }
//     sleep() {
//         console.log('zzz');
//     }
//     play() {
//         console.log('ㄱㄱ');
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('yummy');
    }
    sleep() {
        console.log('sleep');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('주황');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }
    play() {
        console.log('ㄱㄱ');
    }
    // 오버라이딩 overriding
    eat() {
        super.eat();
        console.log('강아지가 먹을꺼임');
    }
}

const dog = new Dog('누렁', '쭈연');
console.log(dog);
dog.eat();