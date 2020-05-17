console.log(1 + 1);

let a4 = [];
a4.push('a');
console.log(a4);
// 현업에서 쓰는 문법
const {test} = a4
console.log(test);

let a4 ={
    test: 123;
}
console.log(a4['test']);

// for 문
let b = [1,2,3,4,5];

b.map(function(i) {
    return i * 3
});
console.log(b);





