function cache(fn) {
    if (typeof fn !== 'function') {
        throw "Input must be a function.";
    }
    return function (num) {
        console.log(num)

        return fn(num)
    }

}

module.exports = { cache };
