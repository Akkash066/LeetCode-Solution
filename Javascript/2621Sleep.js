// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

// Example 1:

// Input: millis = 100
// Output: 100

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
