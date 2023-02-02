const textObj = new String('hello world!');
const text = 'hello world!';

console.log(textObj);
console.log(text);

console.log(text.charCodeAt);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(2,0));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '                 space';
console.log(space.trim());

const longText = 'Get to the Point';
console.log(longText.split(' '));
console.log(longText.split(', ',2));

