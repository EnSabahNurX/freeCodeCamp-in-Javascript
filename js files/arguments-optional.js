function addTogether() {
    // if (arguments.length == 2) {
    //     if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    //         return arguments[0] + arguments[1]
    //     }
    //     return undefined
    // } else {
    //     if (typeof arguments[0] !== 'number') {
    //         return undefined
    //     }
    //     return y =>
    //         typeof y === 'number' && typeof arguments[0] === 'number'
    //             ? arguments[0] + y
    //             : undefined
    // }


    // return typeof arguments[0] === 'number' && typeof arguments[1] === 'number' && arguments.length > 1
    //     ? arguments[0] + arguments[1]
    //     : typeof arguments[0] === 'number' && arguments.length === 1
    //         ? y => typeof y === 'number'
    //             ? arguments[0] + y
    //             : undefined
    //         : undefined


    // return (typeof arguments[0] !== 'number') || (typeof arguments[1] !== 'number' && arguments.length > 1)
    //     ? undefined
    //     : arguments.length > 1
    //         ? arguments[0] + arguments[1]
    //         : y => typeof y === 'number'
    //             ? arguments[0] + y
    //             : undefined


    // // Function to check if a number is actually a number
    // // and return undefined otherwise.
    // var checkNum = function (num) {
    //     if (typeof num !== "number") {
    //         return undefined;
    //     } else return num;
    // };

    // // Check if we have two parameters, check if they are numbers
    // // handle the case where one is not
    // // returns the addition.
    // if (arguments.length > 1) {
    //     var a = checkNum(arguments[0]);
    //     var b = checkNum(arguments[1]);
    //     if (a === undefined || b === undefined) {
    //         return undefined;
    //     } else {
    //         return a + b;
    //     }
    // } else {
    //     // If only one parameter was found, returns a new function that expects two
    //     // Store first argument before entering the new function scope
    //     var c = arguments[0];

    //     // Check the number again, must be outside the function to about returning an object
    //     // instead of undefined.
    //     if (checkNum(c)) {
    //         // Return function that expect a second argument.
    //         return function (arg2) {
    //             // Check for non-numbers
    //             if (c === undefined || checkNum(arg2) === undefined) {
    //                 return undefined;
    //             } else {
    //                 // if numbers then add them.
    //                 return c + arg2;
    //             }
    //         };
    //     }
    // }


    // if (typeof arguments[0] !== "number") {
    //     return undefined
    // }
    // const sum = arg2 =>
    //     typeof arg2 === "number" ? arguments[0] + arg2 : undefined
    // return typeof arguments[1] === "undefined" ? second => sum(second) : sum(arguments[1])

    // if (typeof arguments[0] !== "number") {
    //     return undefined
    // }


    // return typeof arguments[0] !== "number"
    //     ? undefined
    //     : typeof arguments[1] === "undefined"
    //         ? second => typeof second === "number"
    //             ? arguments[0] + second
    //             : undefined
    //         : typeof arguments[1] === "number"
    //             ? arguments[0] + arguments[1]
    //             : undefined


    // return Array.from(arguments).some(n => typeof n !== "number")
    //     ? undefined
    //     : Array.from(arguments).length > 1
    //         ? Array.from(arguments).reduce((acc, n) => (acc += n), 0)
    //         : n => typeof n === "number"
    //             ? n + Array.from(arguments)[0]
    //             : undefined


    // // recursive
    // const [a, b] = arguments
    // if (typeof a !== 'number' || (b && typeof b !== 'number')) return undefined
    // if (b) return a + b
    // return c => addTogether(a, c)


    const [a, b] = arguments
    return (typeof a !== 'number' || (b && typeof b !== 'number'))
        ? undefined
        : b
            ? a + b
            : c => addTogether(a, c)

}



console.log(addTogether(2, 3)) // 5
console.log(addTogether(23, 30)) // 53
console.log(addTogether("http://bit.ly/IqT6zt")) // undefined
console.log(addTogether(2, "3")) // undefined
console.log(addTogether(5)(7)) //   12
console.log(addTogether(2)([3])) // undefined

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
