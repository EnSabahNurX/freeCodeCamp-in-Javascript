function dropElements(arr, func) {
    // for (let index in arr) {
    //     if (func(arr[index])) {
    //         return arr.slice(index)
    //     }
    // }
    // return []

    // let times = arr.length
    // for (var i = 0; i < times; i++) {
    //     if (func(arr[0])) {
    //         break;
    //     } else {
    //         arr.shift();
    //     }
    // }
    // return arr

    // if (arr.length === 0 || func(arr[0])) {
    //     return arr;
    //   } else {
    //     arr.shift();
    //     return dropElements(arr, func);
    //   }

    // return arr.length > 1 ? func(arr[0]) ? arr : dropElements(arr.slice(1), func) : func(arr[0]) ? arr : []

    // return 0 < arr.length && !func(arr[0])
    //     ? (dropElements(arr.slice(1), func))
    //     : arr

    // return arr.length > 0 && !func(arr[0]) ? (dropElements(arr.slice(1), func)) : arr

    // while (arr.length > 0 && !func(arr[0])) arr.shift(); return arr

    // return arr.slice((arr.find(func)) ? arr.indexOf(arr.find(func)) : arr.length)

    // return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length)

    // let check = false; return arr.filter(a => { if (func(a)) check = true; return check })

    return (arr.map(func).indexOf(true) === -1 ? [] : arr.slice(arr.map(func).indexOf(true)))

    // return arr.filter(func).length > 0 ? arr.slice(arr.indexOf(arr.filter(func)[0])) : arr.filter(func)

}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; })) // [ 1, 2, 3]
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })) // [ 0, 0, 1]
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })) // [ 3, 9, 2]
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; })) // []

/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/