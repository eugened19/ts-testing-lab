function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((sum, number) => sum + number, 0);

    return expectedSum - actualSum;
}

// Tests
console.log(missingNumber([3, 0, 1]));                   // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0, 1]));                      // 2
console.log(missingNumber([1]));                         // 0
console.log(missingNumber([0]));                         // 1
console.log(missingNumber([0, 1, 2, 3, 4]));             // 5
console.log(missingNumber([]));                          // 0