/*

    Rabin-Karp Algorithm

    Average Time: Θ(n-m+1)
    Worst Time: O(mn)

    Given a long string and a string pattern to search. Write a program to find
    if the string pattern has any matches in the long string.

    Input
    longString = "AABAACAADAABAABA";
    stringPatternToSearch = "AABA";

    Output
    Found String Pattern Matches
    [0, 9, 12]
*/

/**
 *
 * @param {*} longString
 * @param {*} stringPatternToSearch
 * @returns
 */

const calculateHash = function (stringToEval, largePrime, randomNumber) {
  let hash = 0;

  const length = stringToEval.length - 1;
  for (let i = 0; i <= length; i++) {
    hash +=
      (stringToEval.charCodeAt(i) * Math.pow(randomNumber, length - i)) %
      largePrime;
  }
  return hash;
};

const areStringEqual = function (firstString, secondString) {
  if (firstString !== secondString) {
    return false;
  }
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) {
      return false;
    }
  }
  return true;
};

const searchText = function (longString, stringPatternToSearch) {
  const largePrime = 127;
  const randomNumber = 127;
  const stringPositions = [];
  const stringPatternToSearchHash = calculateHash(
    stringPatternToSearch,
    largePrime,
    randomNumber
  );

  const stringPatternToSearchLen = stringPatternToSearch.length;

  for (let i = 0; i < longString.length - stringPatternToSearchLen + 1; i++) {
    const sliceString = longString.slice(i, i + stringPatternToSearchLen);
    const sliceStringHash = calculateHash(
      sliceString,
      largePrime,
      randomNumber
    );

    if (stringPatternToSearchHash === sliceStringHash) {
      if (areStringEqual(sliceString, stringPatternToSearch)) {
        stringPositions.push(i);
      }
    }
  }
  return stringPositions;
};

const matchedIndices = searchText("AABAACAADAABAABA", "AABA");

console.log("Found String Pattern Matches", matchedIndices);
