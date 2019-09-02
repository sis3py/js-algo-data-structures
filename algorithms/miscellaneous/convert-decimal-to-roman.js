const convertToRoman = number => {
  const romanLookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  return Object.keys(romanLookup).reduce((res, roman) => {
    const nbRepeat = Math.floor(number / romanLookup[roman]);
    number -= nbRepeat * romanLookup[roman];
    return res + roman.repeat(nbRepeat);
  }, "");
};
