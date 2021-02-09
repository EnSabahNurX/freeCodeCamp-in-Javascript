function fearNotLetter(str) {
    // const model = String.fromCharCode(str.split('').filter(letter => (letter.charCodeAt() - str.charCodeAt() != str.indexOf(letter))).join('').charCodeAt() - 1).match(/[a-z]/)
    // return model ? model[0] : undefined

    // return String.fromCharCode(str.split('').filter(letter => (letter.charCodeAt() - str.charCodeAt() != str.indexOf(letter))).join('').charCodeAt() - 1).match(/^[a-z]/g) || undefined

    // for (let i = 0; i < str.length; i++) {
    //     let code = str.charCodeAt(i)
    //     if (code !== str.charCodeAt(0) + i) {
    //         return String.fromCharCode(code - 1)
    //     }
    // }
    // return undefined

    // let compare = str.charCodeAt(0)
    // let missing
    // str.split("").map(function (letter, index) {
    //     if (str.charCodeAt(index) == compare) {
    //         ++compare
    //     } else {
    //         missing = String.fromCharCode(compare)
    //     }
    // })
    // return missing

    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }

}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("stvwx"))
console.log(fearNotLetter("bcdf"))
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))


/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


// var res = String.fromCharCode(72, 69, 76, 76, 79)
// var n = str.charCodeAt(0)