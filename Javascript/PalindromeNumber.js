// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// var isPalindrome = function(x) {
//     let init = x.toString();
    
//     let reversedStr = init.split("").reverse().join("");

//     return init === reversedStr;
// };


// var isPalindrome = function(x){
//    if(x < 0) return false;
//    let originalNum = x;
//    let reverseNum = 0;
//    while(x > 0) {
//     reverseNum = reverseNum *10 + (x%10);
//     x = Math.floor(x / 10);
//    }
//    return originalNum === reverseNum;
//     }

const isPalindrome = (num) => num.toString() === num.toString().split("").reverse().join("");
