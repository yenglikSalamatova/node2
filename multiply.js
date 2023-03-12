const multiply = function (arr) {
  return arr.reduce((acc, arr) => acc * arr, 1);
};
// console.log(multiply([1, 2, 3, 4, 5]));
module.exports = multiply;
