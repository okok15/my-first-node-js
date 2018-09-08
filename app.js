'use strict';
const number = process.argv[2] || 0;
var sum = 0;
for (let i = 1; i <= number; i +=  1){
    sum = sum + i;
}
console.log(sum);
