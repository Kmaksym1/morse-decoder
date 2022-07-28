const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function parsing(numbersForDecoding) {
    // console.log("incomeStr", numbersForDecoding)
// let resArr = numbersForDecoding.map(item =>item.toString().match(/.{1,2}/g)) // по 2 єлемент массіва строка в массів
// console.log("Decoding", resArr)
let resArr = numbersForDecoding.toString().match(/.{1,2}/g);

let arrDecoding = [];
for (let index = 0; index < resArr.length; index++) {
    if (resArr[index] === '10') {
        arrDecoding[index] = '.';
    }
    if (resArr[index] === '11') {
        arrDecoding[index] = '-';
    }
    if (resArr[index] === '00') {
        arrDecoding[index] = '';
    }}
    return arrDecoding.join('');
}

function decode(expr) {
//разюиваем по 10 символов
const length = 10; // длина одной части
const pattern = new RegExp(".{1," + length + "}", "ig");
let res = expr.match(pattern).map(item => item.padEnd(length, "."));
//res = [ '0010101010', '0000000010', …(9) ]
// res.forEach(item => parsing(item))



return res.reduce ((acc, item) => { 
    if (item === '**********'){
        acc += ' ';
    } else { const  parsed = parsing(item)
    acc += MORSE_TABLE[parsed]
    }
    return acc
    // console.log(acc)
},'');
}

module.exports = {
    decode
}