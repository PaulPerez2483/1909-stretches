const trim = obj => {
    let newObj = {};
    Object.keys(obj).forEach(el => {
        if(obj[el] !== undefined && obj[el] !== null) {
    
            newObj[el] = obj[el];
        }
    });
    console.log(newObj)
    return newObj;
};

module.exports = { trim };
