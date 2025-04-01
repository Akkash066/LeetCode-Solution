var removeElement = function(nums, val) {
    let index = 0;
    for (const num of nums) {
        if (num !== val) nums[index++] = num;
    }
    return index;
};

