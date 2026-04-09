module.exports = function toReadable(number) {
  const strNumber = number.toString();

  const numbers = {
    single: {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      0: 'zero',
    },
    doubleSimple: {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    },
    doubleComplex: {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    },
  };

  const getSingle = (n) => numbers.single[n];
  const getDouble = (n) => {
    const num = Number(n);
    if (numbers.doubleSimple[num]) return numbers.doubleSimple[num];
    if (num < 10) return numbers.single[num];

    const firstPart = numbers.doubleComplex[n[0]];
    const secondPart = n[1] !== '0' ? ` ${numbers.single[n[1]]}` : '';

    return firstPart + secondPart;
  };

  if (strNumber.length === 1) return getSingle(strNumber);

  if (strNumber.length === 2) return getDouble(strNumber);

  const lastTwo = strNumber.slice(1);

  if (lastTwo === '00') {
    return `${numbers.single[strNumber[0]]} hundred`;
  }

  return `${numbers.single[strNumber[0]]} hundred ${getDouble(lastTwo)}`;
};
