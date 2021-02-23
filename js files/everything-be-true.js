function truthCheck(collection, pre) {
    //     return collection.every(item => item.hasOwnProperty(pre) && Boolean(item[pre]))

    return collection.every(item => item[pre])

    //     return collection.reduce((acc,cur) => Boolean(cur[pre] && acc),true)

    //     var bool = false
    //     for (var each in collection) {
    //         if (collection[each][pre]) {
    //             bool = true
    //         }
    //         else {
    //             return false
    //         }
    //     }
    //     return bool

    //     return collection.map(x => x[pre]).every(p => p)

    //     return collection.reduce((a, b) => Boolean(a) && Boolean(b[pre]) ? true : false, true)

    //     return !collection.some(item => !(item[pre]))

    // return collection.map(x => x[pre]).filter(Boolean).length === collection.length ? true : false


}



console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")) //    true
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")) //   false
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age")) //   false
console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastForward", "onBoat": null }], "onBoat")) //   false
console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastForward", "onBoat": true }], "onBoat")) //    true
console.log(truthCheck([{ "single": "yes" }], "single")) //   true
console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single")) //    false
console.log(truthCheck([{ "single": "double" }, { "single": undefined }], "single")) // false
console.log(truthCheck([{ "single": "double" }, { "single": NaN }], "single")) //   false

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/
