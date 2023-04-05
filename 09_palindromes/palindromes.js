const palindromes = function (word) {
    applyRegEx = word.toLowerCase().replace(/[^a-z]/g, '');
    splitedWord = applyRegEx.split('');
    return splitedWord.reverse().join('') == applyRegEx;
};

// Do not edit below this line
module.exports = palindromes;
