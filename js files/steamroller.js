function steamrollArray(arr) {
    let newArr = [].concat(...arguments).concat(...arguments)
    let nestArr = [].concat(...newArr)
    return nestArr
}

steamrollArray([1, [2], [3, [[4]]]]);

console.log(steamrollArray([[["a"]], [["b"]]])) //  ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])) //    [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])) // [1, {}, 3, 4]



/*
Flatten a nested array. You must account for varying levels of nesting.
*/