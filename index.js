function hasTargetSum(array, target) {
  // Write your algorithm here
  const observedNumbers = new Set();

  for (const num of array) {
    const complement = target - num;

    if (observedNumbers.has(complement)) {
      return true;
    }

    observedNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
Time complexity: O(n)
  */

/* 
  Add your pseudocode here
  -creation of an empty set of array to handle the numbers that are observed
  -iterate through each number in the array
    -calculation of the complement (target - current number)
    -check if the complement is in the set of the arrayed numbers
    -if yes, then return true(there is a pair with the target sum)
    -otherwise, add the current number to the set
  -if no pair is found after iteration of the array, reutn false

*/

/*
  Add written explanation of your solution here
  -The function uses a set to keep track of numbers seen while iterating through the array. 
  -For each number, it calculates the complement needed to reach the target sum. 
  -If the complement is found in the set, it means there is a pair of numbers that sums up to the target, and the function returns true. 
  -If no such pair is found after iterating the entire array, the function returns false.
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

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 4));
}

module.exports = hasTargetSum;
