const {assert} = require('chai');

const bubbleSort = arr => {
    for (let i = 0;i < arr.length - 1;i++) {
        let change = false;
        for (let j = 0;j < arr.length - (i + 1);j++) {
            if (arr[j] > arr[j + 1]) {
                change = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!change) break;
    }
    return arr;
};

describe("Bubble Sort", () => {
    it("Should retrun sorted array", () => {
        assert.deepEqual(bubbleSort([1, 5, 4, 15, 6, 8]), [1, 4, 5, 6, 8, 15]);
        assert.deepEqual(bubbleSort([12, 345, 12, 434, 12, 0, -1, 34, 56]), [-1, 0, 12, 12, 12, 34, 56, 345, 434]);
    });
});


// There are several things to note about this implementation. 
// Firstly, the inner loop covers a shorter and shorter section of the array 
// each time the outer loop increments (j < arr.length — (i + 1)) . 
// This stops it from checking the already sorted part at the end of the array. 
// Secondly, the change flag is used to determine whether any elements were switched on this pass
//  through the array. If not, the array is already sorted and we can break early. 
// That second trick makes bubble sort very quick on data that is nearly sorted. 
// Thirdly, line 7 features one of my favorite ES6 features, array destructuring. 
// In this case, I’m using it to swap elements in the array without needing to define a temporary variable.