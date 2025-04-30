
var reverse = function(x) {
    const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31
    let result = 0;
    let sign = x < 0 ? -1 : 1;

    x = Math.abs(x);

    while (x !== 0) {
        let digit = x % 10;
        x = Math.floor(x / 10);

        // Check for overflow
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return 0;
        }

        result = result * 10 + digit;
    }

    return sign * result;
};
