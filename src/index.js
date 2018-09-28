module.exports = function getZerosCount(number) {
  let res = 0;
  while (number>0) {
    number = Math.floor(number/5);
    res = res + number;
  }
  return res;
}
