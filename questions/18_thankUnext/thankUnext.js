// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):
Array.prototype.next = function (str, idx) {
    if (!this.nextIdx) {
        this.nextIdx = 0
    }
    console.log(this[this.nextIdx])
    this.nextIdx += 1;
}


// no export statement required
