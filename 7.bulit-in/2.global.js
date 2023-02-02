console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(NaN));
console.log(isFinite(''));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('12.9999999999'));

// URL (URI 하위 개념 Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';

const encoded2 = encodeURI(part);
const encodedComponent = encodeURIComponent(part);

console.log(encoded2);
console.log(encodedComponent);