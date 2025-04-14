// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.



let isCancelled = false;

    function execute() {
        if (isCancelled) return;
        fn(...args);
        setTimeout(execute, t);
    }

    execute(); // Call immediately

    return function cancelFn() {
        isCancelled = true;
    };
