const {assert} = require('chai');

const quickSort = arr => {
    if (arr.length < 2) return arr

    const randomIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[randomIndex]
    const left = []
    const middle = []
    const right = []

    for (element of arr) {
        if (element === pivot) middle.push(element)
        if (element > pivot) right.push(element)
        if (element < pivot) left.push(element)
    }

    return quickSort(left).concat(middle).concat(quickSort(right))
};

describe("Quick Sort", () => {
    it("Should retrun sorted array", () => {
        assert.deepEqual(quickSort([1, 5, 4, 15, 6, 8]), [1, 4, 5, 6, 8, 15]);
        assert.deepEqual(quickSort([12, 345, 12, 434, 12, 0, -1, 34, 56]), [-1, 0, 12, 12, 12, 34, 56, 345, 434]);
    });
});
