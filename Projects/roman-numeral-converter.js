function convertToRoman(num) {
    // let result = []
    // while (num) {
    //     if (num >= 1000) {
    //         let m = Math.floor(num / 1000)
    //         num -= 1000 * m
    //         for (let i = 0; i < m; i++) {
    //             result.push('M')
    //         }
    //     } else if (num >= 500) {
    //         let d = Math.floor(num / 500)
    //         num -= 500 * d
    //         for (let i = 0; i < d; i++) {
    //             result.push('D')
    //         }
    //     } else if (num >= 100) {
    //         let c = Math.floor(num / 100)
    //         num -= 100 * c
    //         for (let i = 0; i < c; i++) {
    //             result.push('C')
    //         }
    //     } else if (num >= 50) {
    //         let l = Math.floor(num / 50)
    //         num -= 50 * l
    //         for (let i = 0; i < l; i++) {
    //             result.push('L')
    //         }
    //     } else if (num >= 10) {
    //         let x = Math.floor(num / 10)
    //         num -= 10 * x
    //         for (let i = 0; i < x; i++) {
    //             result.push('X')
    //         }
    //     } else if (num >= 5) {
    //         let v = Math.floor(num / 5)
    //         num -= 5 * v
    //         for (let i = 0; i < v; i++) {
    //             result.push('V')
    //         }
    //     } else if (num >= 1) {
    //         let i = Math.floor(num / 1)
    //         num -= 1 * i
    //         for (let j = 0; j < i; j++) {
    //             result.push('I')
    //         }
    //     }
    // }
    // return result.join('').replace(/CCCC/, 'CD').replace(/XXXX/, 'XL').replace(/IIII/, 'IV').replace(/DCD/, 'CM').replace(/LXL/, 'XC').replace(/VIV/, 'IX')
    // }

    // let result = []
    // let romansArray = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    // let romans = {
    //     'M': 1000,
    //     'D': 500,
    //     'C': 100,
    //     'L': 50,
    //     'X': 10,
    //     'V': 5,
    //     'I': 1
    // }
    // romansArray.map(item => {
    //     if (num >= romans[item]) {
    //         let times = Math.floor(num / romans[item])
    //         num -= romans[item] * times
    //         for (let i = 0; i < times; i++) {
    //             result.push(item)
    //         }
    //     }
    //     return item
    // })
    // return result.join('').replace(/CCCC/, 'CD').replace(/XXXX/, 'XL').replace(/IIII/, 'IV').replace(/DCD/, 'CM').replace(/LXL/, 'XC').replace(/VIV/, 'IX')

    // let result = []
    // Array({ 'M': 1000 }, { 'D': 500 }, { 'C': 100 }, { 'L': 50 }, { 'X': 10 }, { 'V': 5 }, { 'I': 1 }).map((obj) => {
    //     let key = Object.keys(obj).join('')
    //     let value = obj[Object.keys(obj).join('')]
    //     if (num >= value) {
    //         let times = Math.floor(num / value)
    //         num -= value * times
    //         for (let i = 0; i < times; i++) {
    //             result.push(key)
    //         }
    //     }
    //     return key
    // })
    // return result.join('').replace(/CCCC/, 'CD').replace(/XXXX/, 'XL').replace(/IIII/, 'IV').replace(/DCD/, 'CM').replace(/LXL/, 'XC').replace(/VIV/, 'IX')


    return (Array({ 'M': 1000 }, { 'D': 500 }, { 'C': 100 }, { 'L': 50 }, { 'X': 10 }, { 'V': 5 }, { 'I': 1 }).reduce((accObj, curObj) => {
        let key = Object.keys(curObj).join('')
        let value = curObj[Object.keys(curObj).join('')]
        let temp = []
        if (num >= value) {
            let times = Math.floor(num / value)
            num -= value * times
            for (let i = 0; i < times; i++) {
                temp.push(key)
            }
        }
        return accObj.concat(temp)
    }, []).join('').replace(/CCCC/, 'CD').replace(/XXXX/, 'XL').replace(/IIII/, 'IV').replace(/DCD/, 'CM').replace(/LXL/, 'XC').replace(/VIV/, 'IX'))


    //     let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    //     let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    //     let romanized = ""
    //     for (let index = 0; index < decimalValue.length; index++) {
    //         while (decimalValue[index] <= num) {
    //             romanized += romanNumeral[index]
    //             num -= decimalValue[index]
    //         }
    //     }
    //     return romanized



    // if (num - 1000 >= 0) return "M" + convertToRoman(num - 1000);
    // if (num - 900 >= 0) return "CM" + convertToRoman(num - 900);
    // if (num - 500 >= 0) return "D" + convertToRoman(num - 500);
    // if (num - 400 >= 0) return "CD" + convertToRoman(num - 400);
    // if (num - 100 >= 0) return "C" + convertToRoman(num - 100);
    // if (num - 90 >= 0) return "XC" + convertToRoman(num - 90);
    // if (num - 50 >= 0) return "L" + convertToRoman(num - 50);
    // if (num - 40 >= 0) return "XL" + convertToRoman(num - 40);
    // if (num - 10 >= 0) return "X" + convertToRoman(num - 10);
    // if (num - 9 >= 0) return "IX" + convertToRoman(num - 9);
    // if (num - 5 >= 0) return "V" + convertToRoman(num - 5);
    // if (num - 4 >= 0) return "IV" + convertToRoman(num - 4);
    // if (num - 1 >= 0) return "I" + convertToRoman(num - 1);
    // return ""


    // let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    //     romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    //     romanized = '',
    //     dec, div
    // for (let i = 0; i < decimalValue.length; i++) {
    //     dec = decimalValue[i]
    //     div = Math.floor(num / dec)
    //     if (div > 0) {
    //         romanized += romanNumeral[i].repeat(div)
    //         num = num % dec
    //     }
    // }
    // return romanized


    // let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    // let roman = ''
    // for (let i in map) {
    //     while (num >= map[i]) {
    //         roman += i
    //         num -= map[i]
    //     }
    // }
    // return roman

}

// console.log(convertToRoman(36))
// console.log(convertToRoman(649))
// console.log(convertToRoman(891))
console.log(convertToRoman(3999))


// parseInt(item,2).toString(10)

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
