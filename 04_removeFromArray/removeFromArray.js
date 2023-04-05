const removeFromArray = function(arr, ...items) {
    const cleanArr = arr.filter((item) => !items.includes(item));

    return cleanArr;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1,2,4,5], 4, 5))
