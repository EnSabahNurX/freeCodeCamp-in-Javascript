function convertHTML(str) {

    // return str.split('').map(letter => {
    //     switch (letter) {
    //         case "&":
    //             return "&amp;"
    //             break
    //         case "<":
    //             return "&lt;"
    //             break
    //         case ">":
    //             return "&gt;"
    //             break
    //         case '"':
    //             return "&quot;"
    //             break
    //         case "'":
    //             return "&apos;"
    //             break
    //         default:
    //             return letter
    //             break
    //     }
    // }).join('')

    // const htmlEntities = {
    //     "&": "&amp;",
    //     "<": "&lt;",
    //     ">": "&gt;",
    //     '"': "&quot;",
    //     "'": "&apos;"
    // }
    // // Using a regex, replace characters with it's corresponding html entity
    // return str.replace(/([&<>\"'])/g, match => htmlEntities[match])

    // const htmlEntities = {
    //     "&": "&amp;",
    //     "<": "&lt;",
    //     ">": "&gt;",
    //     '"': "&quot;",
    //     "'": "&apos;"
    // }
    // return str
    //     .split("")
    //     .map(entity => htmlEntities[entity] || entity)
    //     .join("")

    // let expressions = {

    //     "&": "&amp;",
    //     "<": "&lt;",
    //     ">": "&gt;",
    //     "\"": "&quot;",
    //     "\'": "&apos;"
    // }
    // for (let i in expressions) str = str.replace(new RegExp(i, 'g'), expressions[i])
    // return str

    // return str.split("").map(entity => Object({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[entity] || entity).join("")

    // return str.replace(/([&<>\"'])/g, match => Object({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[match])

}


// console.log(convertHTML("Dolce & Gabbana")) //  "Dolce &amp; Gabbana"
// console.log(convertHTML("Hamburgers < Pizza < Tacos")) //   "Hamburgers &lt; Pizza &lt; Tacos"
// console.log(convertHTML("Sixty > twelve")) //   "Sixty &gt; twelve"
// console.log(convertHTML('Stuff in "quotation marks"')) //   "Stuff in &quot;quotation marks&quot;"
// console.log(convertHTML("Schindler's List")) // "Schindler&apos;s List"
// console.log(convertHTML("<>")) //   "&lt;&gt;"
// console.log(convertHTML("abc")) //  "abc"


/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/


// let personList = `First_Name: John, Last_Name: Doe
// First_Name: Jane, Last_Name: Smith`
// let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/mg
// let match = regexpNames.exec(personList)
// do {
//     console.log(`Hello ${match[1]} ${match[2]}`)
// } while ((match = regexpNames.exec(personList)) !== null)

// str = str.replace(/([a-z])([A-Z])/g, "$1 $2")