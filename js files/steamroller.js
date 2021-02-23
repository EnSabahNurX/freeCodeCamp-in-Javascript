function steamrollArray(arr) {

    while (arr.some(element => Array.isArray(element))) {
        arr = [].concat(...arr)
    }
    return arr

    // while (arr.some(element => Array.isArray(element))) arr = [].concat(...arr); return arr

    // recursive
    // return arr.some(element => Array.isArray(element)) ? steamrollArray([].concat(...arr)) : arr

    // another recursive solution
    // let flat = [].concat(...arr); return flat.some(Array.isArray) ? steamrollArray(flat) : flat

//     return arr.reduce((prev, next) => prev.concat(Array.isArray(next) ? steamrollArray(next) : next), [])



    // var flattenedArray = []
    // // Create function that adds an element if it is not an array.
    // // If it is an array, then loops through it and uses recursion on that array.
    // var flatten = function (arg) {
    //     if (!Array.isArray(arg)) {
    //         flattenedArray.push(arg)
    //     } else {
    //         for (var a in arg) {
    //             flatten(arg[a])
    //         }
    //     }
    // };
    // // Call the function for each element in the array
    // arr.forEach(flatten)
    // return flattenedArray


    // return arr
    //     .toString()
    //     .replace(",,", ",") // "1,2,,3" => "1,2,3"
    //     .split(",") // ['1','2','3']
    //     .map(function (v) {
    //         if (v == "[object Object]") {
    //             // bring back empty objects
    //             return {}
    //         } else if (isNaN(v)) {
    //             // if not a number (string)
    //             return v
    //         } else {
    //             return parseInt(v); // if a number in a string, convert it
    //         }
    //     })


    // function steamrollArray(val, flatArr = []) {
    //     val.forEach(item => {
    //         if (Array.isArray(item)) steamrollArray(item, flatArr);
    //         else flatArr.push(item);
    //     });
    //     return flatArr;
    // }


    // function steamrollArray(arr, flatArr = []) {
    //     const elem = arr.pop();
    //     return elem
    //         ? !Array.isArray(elem)
    //             ? steamrollArray(arr, [elem, ...flatArr])
    //             : steamrollArray(arr.concat(elem), flatArr)
    //         : flatArr;
    // }


}

// steamrollArray([1, [2], [3, [[4]]]]);

console.log(steamrollArray([[["a"]], [["b"]]])) //  ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])) //    [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])) // [1, {}, 3, 4]



/*
Flatten a nested array. You must account for varying levels of nesting.
*/
