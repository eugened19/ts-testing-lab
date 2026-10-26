function productExceptSelf(nums) {
    const answer = new Array(nums.length).fill(1);

    // WALK 1: Left → Right
    // Product of everything BEFORE the current element
    for (let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // WALK 2: Right → Left
    // Product of everything AFTER the current element
    let rightProduct = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct = rightProduct * nums[i];
    }

    return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// [0, 0, 9, 0, 0]