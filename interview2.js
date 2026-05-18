import { reverse } from "node:dns";

function repeatCharCountUsingMap(str) {
    let charCount = new Map();
    for (let char of str) {
        if (char !== '') {
            if (charCount.has(char)) {
                charCount.set(char, charCount.get(char) + 1)
            }
            else {
                charCount.set(char, 1)
            }
        }
    }
    console.log('Character Count :', charCount)

    //iterate through the map
    for (let [key, value] of charCount) {
        if (value === 1) {
            console.log("Non Repeated:", key, "->", value, "times");
        }
        else {
            console.log("Repeated:", key, "->", value, "times");
        }
    }
}

repeatCharCountUsingMap('helloworld')


function reverseStringOfEachWord(str) {

    let words = str.split(" ");
    let reversedString = [];

    for (let word of words) {
        let reversedWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedString.push(reversedWord);
    }

    return reversedString;
}


console.log(reverseStringOfEachWord('welcome to javascript'))

