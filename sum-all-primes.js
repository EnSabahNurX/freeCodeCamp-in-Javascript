function sumPrimes(num) {

    return (
        Array(num - 2 + 1).fill().map((_, idx) => 2 + idx)
            .filter((item) =>
                Array(Math.floor(Math.sqrt(item)) - 1).fill(0).map((_, i) => i + 2)
                    .every((prime) => item % prime !== 0)
            ))
        .reduce((sum, prime) => sum + prime)



    // function sumPrimes(num) {
    // let primes = [];
    //   for (let i = 2; i <= num; i++) {
    //     if (primes.every((prime) => i % prime !== 0))
    //       primes.push(i);
    //   }
    //   return primes.reduce((sum, prime) => sum + prime)
    // }



    // function sumPrimes(num) {
    //   let primes=[0]
    //   for(let i=num;i > 1;i--){
    //     let flag=trule
    //     for(let j=i-1;j>1;j--){
    //       if (i % j == 0){
    //         flag=false
    //         break
    //       }
    //     }
    //     if (flag) primes.push(i)
    //   }
    //   return primes.reduce((sum,item) => sum + item)
    // }

    // function sumPrimes(num) {
    //   let primes=[0]
    //   for(let i=num;i > 1;i--){
    //     let flag=true
    //     for(let j=Math.floor(Math.sqrt(i));j>1;j--){
    //       if (i % j == 0){
    //         flag=false
    //         break
    //       }
    //     }
    //     if (flag) primes.push(i)
    //   }
    //   return primes.reduce((sum,item) => sum + item)
    // }


}

console.log(sumPrimes(10)) //   17
console.log(sumPrimes(977)) //  73156

  // Array(num + 1).fill(true)
  // Array.from(Array(10).keys())
  // Array(end - start + 1).fill().map((_, idx) => start + idx)

/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/