function cache(fn) {
    if (typeof fn !== 'function') {
        throw "Input must be a function.";
    }
    const obj = {};
    return function (num) {
        console.log(num)
        if (num in obj) {
            return obj[num]
        } else {
            obj[num] = fn(num);
            return obj[num];
        }
    }

}

module.exports = { cache };
