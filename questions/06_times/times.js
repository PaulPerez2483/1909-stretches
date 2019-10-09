function times(numA) {
       console.log(typeof numA === 'string');
    if(typeof numA === 'string') throw 'Numbers only!';
    
    return function(numB){
        return numA * numB
    }

}

module.exports = { times };
