// function stringRestovration(word) {
//     word = word.trim()
//     word = word.slice(word.indexOf(' ') + 1) + " " + word.slice(word[0], word.indexOf(' '))
//     word = word.slice(0, word.lastIndexOf("o")) + "a" + word.slice(word.lastIndexOf('o') +1)
// return word
// }
// console.log(stringRestovration(' hello world '))

// function stringLength (lorem) {
//     return lorem.length % 2 === 0
// }
// console.log(stringLength("lorem ipsum dolor sit ahmet"))

// function stingWithUpperCaseAndWithoutSpace (string) {
//     let str = ''
//     let lorem = string[0].toUpperCase() + string.slice(1 , string.indexOf(" "));
//     str = str + lorem
//     string = string.slice(string.indexOf(' ') + 1)
//     lorem = string[0].toUpperCase() + string.slice(1 , string.indexOf(" "));
//     str = str + lorem
//     string = string.slice(string.indexOf(' ') + 1)
//     lorem = string[0].toUpperCase() + string.slice(1 , string.indexOf(" "));
//     str = str + lorem
//     string = string.slice(string.indexOf(' ') + 1)
//     lorem = string[0].toUpperCase() + string.slice(1 , string.indexOf(" "));
//     str = str + lorem
//     string = string.slice(string.indexOf(' ') + 1)
//     lorem = string[0].toUpperCase() + string.slice(1 , string.indexOf(" "));
//     str = str + lorem
//     string = string.slice(string.indexOf(' ') + 1)
//
//     return str
//
// }
// console.log(stingWithUpperCaseAndWithoutSpace('lorem ipsum dolor sit amet '))

//function priceDiscount (price, discount) {
//    return total
//    let total = (price * discount) / 100
//}
//console.log(priceDiscount(10000, 50) )

function checkSrting (str){
    if (typeof str === "string" && str.length !== 0){
        if (str.length >= 4 && str.length < 10){
            return 'accept'
        } else {
            return 'error'
        }
    } else {
        return 'string is empty'
    }


}
console.log(checkSrting(''))