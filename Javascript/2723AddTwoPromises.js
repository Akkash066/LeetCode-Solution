// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.


var addTwoPromises = (promise1, promise2) => {
    return Promise.all([promise1, promise2])
        .then(([value1, value2]) => {
            if (typeof value1 !== "number" || typeof value2 !== "number") {
                throw new Error("Both promises must resolve with a number");
            }
            return value1 + value2;
        })
        .catch(error => {
            console.error("Promise error:", error);
            throw error;
        });
};
