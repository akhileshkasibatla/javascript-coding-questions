/**
    Given a set of 'N' maps of lists of integers, with each element of maps having a key which is a string and value is a list of integers.
    Combine all the maps in to one result map by combining similar keys from all maps.
    If the key appears more than once, store the aggregate of all integers for a given key from all maps as the value of the resultant map.
    Ignore the keys that are unique to only one map in the input.

    Input

    First line contains an integer N, denoting the number of maps.
    Second line is a blank.N maps are represented in the sets of lines that follow.
    First line of each map contains two numbers ‘m’ and ‘l’, ’m’ being the number of elements in the map and ‘l’ being the number of elements in the list which is the value part of each map element. 
    In each map, the next ‘m’ lines represent each element of the map. Each line contains a key string, followed by a space, followed by the list of ‘l’ integers.
    Each integer is separated from the next by a space.There is a blank line between each map. 
    
    Output
    
    Output the map of elements after combining all values of the same key from all maps, only for the keys that appear more than once.
    Print the key string and the aggregate value of the integers for that key, separated by a space.
    If there is more than one element to be printed, print the output for each element in successive lines (see sample output).
    Ignore the keys which are unique to only a single map.

    Example

    Input

    3

    2 2
    a 4 5
    x 1 2

    2 2
    a 1 3
    z 6 5

    2 2
    x 2 3
    b 4 5

    Output

    a 13
    x 8

    Input

    3

    2 2
    a 4 5
    b 6 7
    c 13 14

    2 2
    a 4 3
    b 16 12

    2 2
    a 8 3
    b 5 13


    Output

    a 27
    b 59

 */

/**
 *
 * @param {*} str
 * @returns
 */

const outputData = (str) => {
  const maps = str.split("\n\n");

  const hashMap = {};

  for (let map of maps) {
    map = map.split("\n");
    const [firstLine, ...lines] = map;
    lines.map((line) => {
      const trimLine = line.split(" ");
      const key = trimLine.splice(0, 1)[0];
      const value = trimLine.reduce((prev, current) => {
        return Number(prev) + Number(current);
      }, 0);

      if (hashMap.hasOwnProperty(key)) {
        hashMap[key].seen = true;
        hashMap[key].value += value;
      } else {
        hashMap[key] = { seen: false, value: value };
      }
    });
  }

  let output = "";
  for (let key in hashMap) {
    if (hashMap[key].seen) output += `\n${key} ${hashMap[key].value}`;
  }

  return output;
};

const stringInputList = [
  "3\n\n2 2\na 4 5\nb 6 7\nc 13 14\n\n2 2\na 4 3\nb 16 12\n\n2 2\na 8 3\nb 5 13",
  "3\n\n2 2\na 4 5\nx 1 2\n\n2 2\na 1 3\nz 6 5\n\n2 2\nx 2 3\nb 4 5",
];

for (let strInput of stringInputList) {
  console.log(outputData(strInput));
}
