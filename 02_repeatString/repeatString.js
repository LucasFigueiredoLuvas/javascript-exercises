const repeatString = function(word, amount) {
    let result = '';
    if(amount < 0) {
        return 'ERROR';
    }
    for(let i = 1; i <= amount; i++) result += word;
    return result;
};

// Do not edit below this line
module.exports = repeatString;
