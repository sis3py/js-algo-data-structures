const isPalindrome = string => {
  if (!string) {
    return true;
  }

  const lowerCaseNoSymbols = string.replace(/[\W_-]/g, "").toLowerCase();
  return lowerCaseNoSymbols[0] ===
    lowerCaseNoSymbols[lowerCaseNoSymbols.length - 1]
    ? isPalindrome(lowerCaseNoSymbols.slice(1, -1))
    : false;
};
