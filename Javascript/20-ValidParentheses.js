// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


var isValid = function(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in map) { 
            if (stack.length === 0 || stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
