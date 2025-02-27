//Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

//The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

//The function composition of an empty list of functions is the identity function f(x) = x.

//You may assume each function in the array accepts one integer as input and returns one integer as output.


var filter = (arr, fn) => {
    let filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
}

var reduce = (nums, fn, init) => {
    let val = init;
    
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    
    return val;
}

var compose = (functions) => {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}
