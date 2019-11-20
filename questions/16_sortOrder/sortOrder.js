/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, key, r) {
    // console.log(arr);
    // console.log('keyyyyyyyy ' + key);
    // console.log('r ' + r);
    // let newArr = [];
    // arr.forEach(x => {
    //     newArr.push(x[key])
    //     console.log('rrrrr ' + r)
    // });
    // newArr.sort();
    // console.log(newArr)
    // return newArr

    return arr.sort((a, b) => {
        return a[key] - b[key];
    }).map(el => {
        return el[key]
    })
}


module.exports = { sortOrder };
