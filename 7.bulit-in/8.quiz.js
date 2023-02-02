// 퀴즈 !
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라.
const text = 'Hello World!';
// H
// e
// l
// l
// ..
// !

for(let i=0; i<text.length; i++) {
    // console.log(text[i]);
    console.log(text.charAt(i));
}

for(const i in text) { // 인덱스임.
    console.log(text[i]);
}

for(var char of text) { // explorer에서는 지원 안함. (순회가능한 객체 map, set, array, argument 객체)
    console.log(char);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1', 'user2', ... ]

console.log(ids.split(','));

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자.

setInterval(function() {
    const now = new Date();
    // console.log(now.getFullYear());
    // console.log(now.getMonth() + 1);
    // console.log(now.getDate());
    //console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}`);
    console.log(now.toLocaleString('ko-KR'));
}, 1000);

