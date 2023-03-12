const maxNum = require("./maxNum.js");
// console.log(maxNum([1, 2, 3, 4, 5, 6]));
const minNum = require("./minNum.js");
// console.log(minNum([1, 2, 3, 4, 5, 6]));
const minus = function (arr) {
  return maxNum(arr) - minNum(arr);
};
// console.log(minus([1, 2, 3, 4, 5, 6]));
module.exports = minus;
