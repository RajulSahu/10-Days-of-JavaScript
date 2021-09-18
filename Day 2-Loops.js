'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = '';
    let consonents = ''
    for (let letter of s) {
        if ('aeiou'.includes(letter)) {
            vowels = vowels.concat(letter);
        }
        else{
            consonents = consonents.concat(letter);
        }
    }
    for (let vowel of vowels){
        console.log(vowel);
    }
    for (let consonent of consonents){
        console.log(consonent);
    }
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}