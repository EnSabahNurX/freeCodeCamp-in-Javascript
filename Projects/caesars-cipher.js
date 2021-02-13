console.time()
function rot13(str) {
//   return str.split('').map(item => item.match(/[A-Z]/)
//   ? 
//   String.fromCharCode(
//     (item.charCodeAt() - 65 - 13) >= 0
//     ? item.charCodeAt() - 13
//     : item.charCodeAt() - 13 + 26
//   )
//   : item
//   ).join('')
  
  
  let decoded = ''
  for (let i in str) {
    if (str[i].match(/[A-Z]/)){
    decoded += String.fromCharCode(str[i].charCodeAt(0) % 26 + 65)
    } else {
      decoded += str[i]
    }
  }
  return decoded
  
    
//   return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65))
  
//   return str.split('').map(item => item.match(/[A-Z]/) ? String.fromCharCode(item.charCodeAt() % 26 + 65): item).join('')
    
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     return str.split('').map(char => {  
//         const pos = alphabet.indexOf(char)
//         return pos >= 0
//             ? alphabet[(pos + 13) % 26]
//             : char
//       })
//       .join('')

//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charCodeAt(i)
//         if (char < 65 || char > 90)
//             arr.push(str[i])
//         else if (char < 78)
//             arr.push(String.fromCharCode(char + 13))
//         else
//             arr.push(String.fromCharCode(char - 13))
//     }
//     return arr.join('')
  
}
console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("LBH QVQ VG!"))
console.timeEnd()
/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
