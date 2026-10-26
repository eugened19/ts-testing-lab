function rob(rooms) {
    let twoRoomsBackBest = 0;
    let previousBest = 0;
    let currentBest = 0;

    for (const currentRoom of rooms) {
        const skip = previousBest;
        const take = currentRoom + twoRoomsBackBest;

        currentBest = Math.max(skip, take);

        twoRoomsBackBest = previousBest;
        previousBest = currentBest;
    }

    return currentBest;
}

console.log(rob([5, 1, 1, 5]));    // 10
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([1, 2, 3, 1]));    // 4
console.log(rob([10]));           // 10
console.log(rob([]));             // 0