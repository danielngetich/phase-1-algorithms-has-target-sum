function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let t = i + 1; t < array.length; t++) {
      if (array[t] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime O(n)
  space O(n)
*/

/* 
  if array[2,3,4,5],8]
  2+3,2+4,2+5
  3+4,3+5
  4+5
  if any pair sum up to 8 return true else false
*/

/*
  a function that pairs up numbers add them randomly until it finds the one that add up to the target
  and return true if any but return false if no pair add upto target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
