// while(조건) {}
// 조건이 false 가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
    //console.log(num);
    num--;
}

// let isActive = true;
// let i = 0;
// while(isActive) {
//     //console.log('아직 살아있다!');
//     if(i === 8) {
//         i++;
//         return;
//     }
//     if(i === 10) {
//         break;
//     }
//     //console.log(i);
//     i++;
// }

// do {
//     //console.log('do-while 아직 살아있지롱');
// } while (!isActive) {
//     //console.log("으앙주금");
// }

console.log("123");

label:
for(let i=0; i<=1; i++) {
    for(let j=0; j<=3; j++) {
        if(j==1) break label; // 0,0 만 찍힐듯?
        console.log(i, j);
    }
}

let isGoing = true;
let count = 10;
while(isGoing) {
	count--;
	if(count === 0) {
		isGoing = false;
	}
	console.log(count);
}