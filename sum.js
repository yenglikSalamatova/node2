const sum = function (arr) {
  return arr.reduce((acc, arr) => acc + arr, 0);
};
// console.log(sum([1, 2, 3, 4, 5]));
module.exports = sum;
