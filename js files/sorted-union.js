function uniteUnique(arr) {
  // return [...new Set([...arguments].map(item => item.toString()).toString().split(',').map(num => Number(num)))]

  // return [...arguments].map(item => item.toString()).toString().split(',').map(num => Number(num)).reduce(function (a, b) {
  //   if (a.indexOf(b) < 0) {
  //     a.push(b)
  //   }
  //   return a
  // }, [])

  // return [...arguments].map(item => item.toString()).toString().split(',').map(num => Number(num)).reduce((a, b) => a.includes(b) ? a : [...a, b], [])

  // //make an array out of the given arrays and flatten it (using the spread operator)
  // const flatArray = [].concat(...arguments)
  // // create a Set which clears any duplicates since it's a regular set and not a multiset
  // return [...new Set(flatArray)]

  return [...new Set([].concat(...arguments))]

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) //  [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))  //  [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))  //  [1, 2, 3, 5, 4, 6, 7, 8]


/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/