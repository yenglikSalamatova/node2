const maxNum = require("./maxNum.js");
const minNum = require("./minNum.js");
const divide = function (arr) {
  return maxNum(arr) / minNum(arr);
};
// console.log(divide([2, 4, 6, 12]));
module.exports = divide;
