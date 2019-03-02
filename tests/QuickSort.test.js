const {assert} = require('chai');

const quickSort = arr => {
    if (arr.length < 2) return arr;

    const randomNumber = Math.random() 
    const random = randomNumber * arr.length
    const flooredRandom = Math.floor(random)
    const pivot = arr[flooredRandom];
    // console.log('=============================================')
    // console.log('randomNumber ====> ', randomNumber)
    // console.log('random ====> ', random)
    // console.log('flooredRandom ====> ', flooredRandom)
    // console.log('pivot ====> ', pivot)
    // console.log('arr ====> ', arr)

    let left = [];
    let equal = [];
    let right = [];

    for (let element of arr) {
        if (element > pivot) right.push(element);
        else if (element < pivot) left.push(element);
        else equal.push(element);
    }

    return quickSort(left)
        .concat(equal)
        .concat(quickSort(right));
};

describe("Quick Sort", () => {
    it("Should retrun sorted array", () => {
        assert.deepEqual(quickSort([1, 5, 4, 15, 6, 8]), [1, 4, 5, 6, 8, 15]);
        assert.deepEqual(quickSort([12, 345, 12, 434, 12, 0, -1, 34, 56]), [-1, 0, 12, 12, 12, 34, 56, 345, 434]);
    });
});
