function isEven(num){
  return num % 2 === 0;
};

var tenIsEven = isEven(10);
var elevenIsEven = isEven(11);
var dankIsEven = isEven("dank");

console.log(tenIsEven);
console.log(elevenIsEven);
console.log(dankIsEven);
