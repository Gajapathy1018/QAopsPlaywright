function reverseEachWord(str) {
    let words = str.split(" ");
    let reversedString = [];
    for (let word of words) {
        let reversedWord = ''
        for (let i = word.length - 1; i >= 0; i--) {

            reversedWord += word[i]

        }
        reversedString.unshift(reversedWord)
    }
    return reversedString.join(" ");
}
console.log(`Reversed String: ${reverseEachWord('Hello world people')}`)

function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if ('aeiouAEIOU'.includes(char)) {
            count++
        }
    }
    return count;
}

console.log(`Vowel Count: ${countVowels('An example of javascript programmimng usage')}`)

function countRepeatedCharacters(str) {
    let charCount = new Map();
    for (let char of str) {
        if (char !== ' ') {
            if (charCount.has(char)) {
                charCount.set(char, charCount.get(char) + 1)
            }
            else {
                charCount.set(char, 1)
            }
        }
    }
    for (let [char, freq] of charCount) {
        if (freq === 1) {
            console.log('NON REPEATED:', char)
        }
        else if (freq > 1) {
            console.log('deleted ->' + char, charCount.delete(char))
        }
         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            console.log('Vowel ->' + char,freq)
        }
    }
}

countRepeatedCharacters('hello world um AT egg Ink')

function duplicateWords(str) {
    let words = str.split(" ");
    let wordCount = new Map();
    for (let word of words) {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1)
        }
        else {
            wordCount.set(word, 1)
        }
    }
    for (let [key, value] of wordCount) {
        if (value > 1) {
            console.log('Duplicate word', key, '->', value)
        }
    }
}

duplicateWords('hello world welcome to javascript programming welcome to javascript')


function arrayExample(){
    let arr=['1', '2', '3', '4', '5'];
    arr.push('hello world');
    console.log(arr)
    console.log('Array length: ' + arr.length)
    arr.forEach((items,index)=>{
        console.log(items, index)
    })
    console.log(arr.indexOf('4'))
    console.log(arr[5])

    // remove an item in middle of the array
    arr.splice(1, 2);
    console.log(arr)
}

arrayExample()