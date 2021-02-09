function smallestCommons(arr) {
    // arr.sort((a, b) => a - b)
    // let newArray = (Array(arr[1] - arr[0] + 1).fill().map((_, idx) => arr[0] + idx))

    // function gcd(a, b) {
    //     return !b ? a : gcd(b, a % b)
    // }

    // function lcm(a, b) {
    //     return (a * b) / gcd(a, b)
    // }

    // let multiple = arr[0]
    // newArray.forEach((n) => multiple = lcm(multiple, n))
    // return multiple

    // arr.sort((a, b) => a - b)
    // function gcd(a, b) {
    //     return !b ? a : gcd(b, a % b)
    // }

    // function lcm(a, b) {
    //     return (a * b) / gcd(a, b)
    // }

    // let multiple = arr[0]
    // Array(arr[1] - arr[0] + 1).fill().map((_, idx) => arr[0] + idx).forEach((n) => multiple = lcm(multiple, n))
    // return multiple


    // arr.sort((a, b) => a - b)
    // let candidate = arr[1]
    // let smallestCommon = function (low, high) {
    //     function scm(l, h) {
    //         if (h % l === 0) {
    //             return h
    //         } else {
    //             return scm(l, h + high)
    //         }
    //     }
    //     return scm(low, high)
    // }
    // for (let i = arr[0]; i <= arr[1]; i++) {
    //     candidate = smallestCommon(i, candidate)
    // }
    // return candidate

    // arr.sort((a, b) => a - b)
    // let newArray = (Array(arr[1] - arr[0] + 1).fill().map((_, idx) => arr[0] + idx))
    // var lcm = newArray[0]

    // function gcd(a, b) {
    //     return !b ? a : gcd(b, a % b)
    // }

    // for (i = 1; i < newArray.length; i++) {
    //     lcm = (lcm * newArray[i]) / gcd(lcm, newArray[i])
    // }
    // return lcm

    // const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    // const lcm = (a, b) => (a * b) / gcd(a, b);
    // let [min, max] = arr.sort((a, b) => a - b);
    // let currentLCM = min;
    // while (min < max) {
    //     currentLCM = lcm(currentLCM, ++min);
    // }
    // return currentLCM;


    // const getPrimeFactors = (num) => {
    //     const primes = {}
    //     for (let factor = 2; factor <= num; factor++) {
    //         while ((num % factor) === 0) {
    //             primes[factor] = (primes[factor]) ? primes[factor] + 1 : 1
    //             num /= factor
    //         }
    //     }
    //     return primes
    // }

    // let primeFactors = {}
    // for (let i = Math.max(Math.min(...arr), 2); i <= Math.max(...arr); i++) {
    //     let primes = getPrimeFactors(i)
    //     for (let j in primes) {
    //         if (!primeFactors[j] || primes[j] > primeFactors[j]) {
    //             primeFactors[j] = primes[j]
    //         }
    //     }
    // }
    // let result = 1

    // for (let i in primeFactors) {
    //     result *= i ** primeFactors[i]
    // }
    // return result


    // const getPrimeFactors = (num) => {
    //     const primes = {};
    //     for (let factor = 2; factor <= num; factor++) {
    //         while ((num % factor) === 0) {
    //             primes[factor] = (primes[factor]) ? primes[factor] + 1 : 1;
    //             num /= factor;
    //         }
    //     }
    //     return primes;


    // arr.sort((a, b) => a - b)
    // // Initially the solution is assigned to the highest value of the array
    // let sol = arr[1]
    // for (let i = arr[1] - 1; i >= arr[0]; i--) {
    //     // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    //     // to increment 'max' to our solution and restart the loop
    //     if (sol % i) {
    //         sol += arr[1]
    //         i = arr[1]
    //     }
    // }
    // return sol

    //      arr.sort((a, b) => a - b)
    //      let result = arr[1]
    //      for (let i = arr[1] - 1; i >= arr[0]; i--) {
    //         if (result % i) {
    //            result += arr[1]
    //             i = arr[1]
    //         }
    //      }
    //      return result

    // using reduce()
    arr.sort((a, b) => a - b)
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b)
    }
    function lcm(a, b) {
        return (a * b / gcd(a, b))
    }
    return Array(arr[1] - arr[0] + 1).fill().map((_, idx) => arr[0] + idx).reduce((a, b) => lcm(a, b))

}



console.log(smallestCommons([1, 5])) // 60
console.log(smallestCommons([5, 1])) // 60
console.log(smallestCommons([2, 10])) // 2520
console.log(smallestCommons([1, 13])) //    360360
console.log(smallestCommons([23, 18])) //   6056820

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/


// function primes(num) {
//     return (
//         Array(num - 1).fill().map((_, idx) => 2 + idx)
//             .filter((item) =>
//                 Array(Math.floor(Math.sqrt(item)) - 1).fill().map((_, i) => 2 + i)
//                     .every((prime) => item % prime !== 0)
//             ))
// }

// function gcd(a, b) {
//     return b === 0
//         ? a
//         : gcd(b, a % b)
// }

// function lcm(a, b) {
//     return abs(a * b) / gcd(a, b)
// }

// GCD
// const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

// Example
// gcd(10, 15);    // 5

// function lcm(a, b)=abs(a * b) / gcd(a, b)
