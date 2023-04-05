const fibonacci = function(num) {
    if(num < 0) return 'OOPS';
    if(num === 0) return 0;
    let x = 0, y = 1;
    for(let i = 0; i < num; i++) {
        const tmp = y;
        y = x + y;
        x = tmp;
    }
    return x;
};

// Do not edit below this line
module.exports = fibonacci;
