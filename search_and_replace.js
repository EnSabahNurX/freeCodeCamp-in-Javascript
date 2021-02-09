function myReplace(str, before, after) {
    //     // const index = str.indexOf(before)
    //     const index = str.match(before).index
    //     const firsLetter = str[index]
    //     if ((/^[A-Z]/).test(firsLetter)) {
    //         return str.slice(0, index) + after[0].toUpperCase() + after.slice(1) + str.slice(index + before.length)
    //     } else {
    //         return str.slice(0, index) + after.toLowerCase() + str.slice(index + before.length)
    //     }
    // }

    //     const index = str.indexOf(before);
    //     if (str[index] === str[index].toUpperCase()) {
    //         after = after.charAt(0).toUpperCase() + after.slice(1);
    //     } else {
    //         after = after.charAt(0).toLowerCase() + after.slice(1);
    //     }
    //     str = str.replace(before, after);
    //     return str;
    // }

    //     const index = str.indexOf(before)
    //     return ((/^[A-Z]/).test(str[index]))
    //         ? str.replace(before, after[0].toUpperCase() + after.slice(1))
    //         : str.replace(before, after.toLowerCase())
    // }

    return (/^[A-Z]/.test(before))
        ? str.replace(before, after[0].toUpperCase() + after.slice(1))
        : str.replace(before, after.toLowerCase())
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("I think we should look up there", "up", "Down"))
console.log(myReplace("Let us go to the store", "store", "mall"))
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))
console.log(myReplace("His name is Tom", "Tom", "john"))
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))


/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/