// get arguments
var numbers = process.argv.splice(2);

// use array reduce method to get sum of arguments
//
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
//
var sum = numbers.reduce(function(sum, value) {
  // parse the value to an int
  return sum + parseInt(value,10);
}, 0);

// print out result
console.log(sum);
  
