// Runtime 0ms Beats 100.00%; Average for Problem, (83.77% had 0ms runtime)

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  var charArrStringOfNum = [...num.toString()];

  for (const [i, num] of charArrStringOfNum.entries()) {
    if (num == 6) {
      charArrStringOfNum[i] = 9;
      break;
    }
  }

  return Number.parseInt(charArrStringOfNum.join(""));
};
