const {assert} = require('chai');


function binarySearch(arr, value) {

    arr = arr.sort((a, b) => a - b) // it's better to sort before passing array to the function

    const half = Math.floor(arr.length / 2)

    const firstHalf = arr.slice(0, half)
    const secondHalf = arr.slice(half, arr.length)

    if (arr[half] === value) return true
    if (arr.length === 1) return false
    if (arr[half] > value) {
        return binarySearch(firstHalf, value)
    } else {
        return binarySearch(secondHalf, value)
    }
}


describe.only("Binary Search", () => {
    it("Should return true if number is in the array and false if not", () => {
        assert.equal(binarySearch([1, 2, 5, 7, 89, 34, 23, 123], 123), true);
        assert.equal(binarySearch([1, 2, 5, 7, 89, 34, 23, 12], 123), false);
        assert.equal(binarySearch([14, 214124, 123, 213, 8122255, 346656, 656, 34], 213), true);
        assert.equal(binarySearch([-22, -66, 0, 14, 214124, 123, 213, 8122255, 346656, 656, 34], 213), true);
    });
});