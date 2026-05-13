// ============================================
// 1. REVERSE STRING
// ============================================
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(`Reverse: ${reverseString('welcome to javascript')}`);

// ============================================
// 2. COUNT REPEATED CHARACTERS
// ============================================
function repeatedChar(text) {
    // Count character frequency
    const count = {};
    for (let char of text) {
        if (char !== ' ') {
            count[char] = (count[char] || 0) + 1;
        }
    }

    console.log('Character Count:', count);

    // Display results
    for (let char in count) {
        if (count[char] === 1) {
            console.log(`Non-repeated: ${char}`);
        } else {
            console.log(`Repeated: ${char} -> ${count[char]} times`);
        }
    }
}

repeatedChar('Hello World');

// ============================================
// 3. COUNT REPEATED CHARACTERS USING MAP
// ============================================
function repeatedCharWithMap(text) {
    // Count character frequency using Map
    const charCount = new Map();
    
    for (let char of text) {
        if (char !== ' ') {
            if (charCount.has(char)) {
                charCount.set(char, charCount.get(char) + 1);
            } else {
                charCount.set(char, 1);
            }
        }
    }

    console.log('Character Count (Map):', charCount);

    // Display results using Map iteration
    for (let [char, frequency] of charCount) {
        if (frequency === 1) {
            console.log(`Non-repeated: ${char}`);
        } else {
            console.log(`Repeated: ${char} -> ${frequency} times`);
        }
    }
}

repeatedCharWithMap('Hello World');