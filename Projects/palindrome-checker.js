console.time()
function palindrome(str) {

  return str.toLowerCase().replace(/[\W_]/g, '') == str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('')


  // str = str.toLowerCase().replace(/[\W_]/g, "");
  // for (var i = 0, len = str.length - 1; i < len / 2; i++) {
  //   if (str[i] !== str[len - i]) {
  //     return false
  //   }
  // }
  // return true



  // //assign a front and a back pointer
  // let front = 0
  // let back = str.length - 1
  // //back and front pointers won't always meet in the middle, so use (back > front)
  // while (back > front) {
  //   //increments front pointer if current character doesn't meet criteria
  //   while (str[front].match(/[\W_]/)) {
  //     front++
  //     continue
  //   }
  //   //decrements back pointer if current character doesn't meet criteria
  //   while (str[back].match(/[\W_]/)) {
  //     back--
  //     continue
  //   }
  //   //finally does the comparison on the current character
  //   if (str[front].toLowerCase() !== str[back].toLowerCase()) return false
  //   front++
  //   back--
  // }
  // //if the whole string has been compared without returning false, it's a palindrome!
  // return true



  // return str.match(/[a-zA-Z0-9]/g).join('').toLowerCase() == str.match(/[a-zA-Z0-9]/g).reverse().join('').toLowerCase()

}

console.log(palindrome("My age is 0, 0 si ega ym.")) // true
// console.log(palindrome("A man, a plan, a canal. Panama")) // true
// console.log(palindrome("never odd or even")) // true
// console.log(palindrome("not a palindrome")) // false
// console.log(palindrome("five|\_/|four")) // false

console.timeEnd()
/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/
