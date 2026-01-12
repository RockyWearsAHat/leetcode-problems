// Runtime 0ms Beats 100.00%; Average for Problem, (83.77% had 0ms runtime)

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  //String implementation, good but slightly memory inefficient due to copies
  // var charArrStringOfNum = [...num.toString()];

  // for (const [i, num] of charArrStringOfNum.entries()) {
  //   if (num == 6) {
  //     charArrStringOfNum[i] = 9;
  //     break;
  //   }
  // }

  // return Number.parseInt(charArrStringOfNum.join(""));

  //Math implementation, more efficient memory wise than making an array copy (technically)
  //memory is mainly eaten by JS vm not realy the program, it's like 24 bytes of difference
  let n = num;
  let place = 1;
  let leftmostSixPlace = 0; // cache most significant 6 as we scan

  while (n > 0) {
    if (n % 10 === 6) leftmostSixPlace = place;
    n = (n / 10) | 0;
    place *= 10;
  }

  return leftmostSixPlace ? num + 3 * leftmostSixPlace : num;
};
