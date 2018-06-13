//1) Write a function splitAndMerge

function splitAndMerge(str, sp) {
    const words = str.split(' ');
    const letters = words.map((value) => {
        return value.split('');
    });
    letters.join(sp);
    const result = letters.join(' ');
    return result;
}
console.log(splitAndMerge('Hello World!', '-'))


//2) Write a function convert
const convert = (obj) => {
    return Object.entries(obj)
}

let programmer = {
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
}
console.log(convert(programmer))

//3)DONE Complete the method/function so that it converts dash/underscore delimited words into camel casing.
const toCamelCase = (str) => {
    let arr = str.split('');
    return arr.map((value, i) => {
        if (value == '-' || value == '_') {
            value = arr[i + 1].toUpperCase();
            delete arr[i + 1];
        }
        return value;
    }).join('');

}
console.log(toCamelCase("The_stealth_warrior"))

//4) DONE Write a function that takes a sentence(string) and reverses each word in the sentence.

const reverseSentence = (str) => {
    let revLetters = str.split('').reverse().join('');
    let revWords = revLetters.split(' ').reverse().join(' ');
    return revWords;
}

//5) DONE Write a function stringExpansion
    const  stringExpansion = (str) => {
    let newStr = '';
    let mult = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[0-9]/)) {
            mult = Number(str[i]);
        } else {
            newStr += str[i].repeat(mult);
        }
    }
    return newStr;
}

console.log(stringExpansion('2gy5n25e'))
