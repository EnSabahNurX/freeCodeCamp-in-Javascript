function sumFibs(num) {
    let fibList = [1, 1]
    for (let i = 2; (fibList[i - 2] + fibList[i - 1]) <= num; i++) {
        fibList.push(fibList[i - 2] + fibList[i - 1])
    }
    return fibList.filter(odd => odd % 2 !== 0).reduce((sum, item) => sum + item)

}

// function fibonacci(n) {
//     return n < 1 ? 0
//          : n <= 2 ? 1
//          : fibonacci(n - 1) + fibonacci(n - 2);
//  }

// function fib (n) {
//     if (n < 2) return [1]
//     if (n < 3) return [1, 1]
//     var a = fib(n - 1)
//     a.push(a[n - 2] + a[n - 3])
//     return a
// }

// function fib(n) {
//     if (n == 1) return [1]
//     if (n == 2) return [1, 1]
//     const arr = fib(n - 1)
//     return [...arr, arr[n-2] + arr [n-3]]
//   }

//   function fib (n) {
//       if (n < 2) return [1]
//       if (n < 3) return [1, 1]
//       var a = fib(n - 1)
//       a.push(a[n - 2] + a[n - 3])
//       return a
//   }

//   function fib (n) {
//       return (n < 2) ? [1] : (n < 3) ? [1, 1] : [...fib(n - 1), fib(n - 1)[n-2] + fib(n - 1)[n-3]]
//   }


console.log(sumFibs(10)) // 10
console.log(sumFibs(1)) // any number
// console.log(sumFibs(1000)) //   1785
// console.log(sumFibs(4000000)) //    4613732
console.log(sumFibs(4)) //  5
// console.log(sumFibs(75024)) //  60696
// console.log(sumFibs(75025)) //  135721

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/