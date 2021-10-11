/**
 *
 * @param {*} str
 * @returns
 *
 *
 * Write a program to return sum of all distict unique substring characters from given string
 * 
 * 

Input 

"good", "goods", "goodss", "test", "tests", "testss"];


Output 

good - 16
goods - 29
goodss - 43
test - 19
tests - 30
testss - 42

 *
 *
 */

function countUniqueCharacters(str) {
  let numSubStrings = 0;
  let distinctSubChar = 0;
  const visited = new Map();

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    numSubStrings += i + 1;

    if (visited.has(element)) {
      let prevSubStringCount = visited.get(element) + 1;

      // Because we know we have already visited and we do not want duplicates
      numSubStrings = numSubStrings - prevSubStringCount;
      distinctSubChar += numSubStrings;
    } else {
      distinctSubChar += numSubStrings;
    }
    visited.set(element, i);
  }

  return distinctSubChar;
}

/**********
 * 



 * 
 * 
 * 
*/

const inputs = ["good", "goods", "goodss", "test", "tests", "testss"];
for (let input of inputs) {
  const uniqueChars = countUniqueCharacters(input);
  console.log(`${input} - ${uniqueChars}`);
}
