//Two sum pair to return pairs whose sum is equal to multiples of 60


const getPairs = (arr) => {

  let target = 60;
  const resultMap = new Map();
  let output = 0;

  for(let i = 0 ; i < arr.length; i++) {
    const duration = arr[i];
    target = (Math.ceil(duration/60) * 60) ;
    const diff = Math.abs(target - duration);
    const add = (target + duration);
    if(resultMap.has(diff)) {
      console.log(`(${resultMap.get(diff)}, ${i})`);
      output++;
    } else if(resultMap.has(add)) {
      console.log(`(${resultMap.get(add)}, ${i})`);
      output++;
    }
    resultMap.set(duration, i);
}

  return output;

}

const inputs = [
    [30, 20, 150, 100, 40], //3 1,3. 0,2 1,4
    [10, 50, 90, 30] //2 0, 1 2, 3
  ];

for(let input of inputs) {
  console.log(getPairs(input));
}
