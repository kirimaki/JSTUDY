// 접근자 프로퍼티 (Accessor Property)

class Student {
    fullName2;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        console.log(value);
    }
}

const student = new Student('주연', '김');
student.firstName = '안나';
console.log(student.fullName);
student.fullName = '김철수';
console.log(student.fullName);