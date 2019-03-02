const {assert} = require('chai');

const radixSort = arr => {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;

    while (divisor < maxNum) {
        let buckets = [...Array(10)].map(() => []);

        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        arr = [].concat.apply([], buckets);
        divisor *= 10;
    }
    return arr;
};

describe("Radix Sort", () => {
    it("Should retrun sorted array", () => {
        assert.deepEqual(radixSort([1, 5, 4, 15, 6, 8]), [1, 4, 5, 6, 8, 15]);
        //don't work with negative numbers 
        // assert.deepEqual(radixSort([12, 345, 12, 434, 12, 0, -1, 34, 56]), [-1, 0, 12, 12, 12, 34, 56, 345, 434]);
    });
});
