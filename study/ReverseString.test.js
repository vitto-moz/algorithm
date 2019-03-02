const {assert} = require('chai');

function stringReversal(string) {
    return string.split('').reduce((gathered, letter) => {
        return letter + gathered
    })
}

function _stringReversal(string) {
    let reversedString = ''
    for (letter of string) {
        reversedString = letter + reversedString
    }
    return reversedString
}



describe("String Reversal", () => {
    it("Should retrun string reverse", () => {
        assert.equal(stringReversal("Hello World!"), "!dlroW olleH");
        assert.equal(_stringReversal("Hello World!"), "!dlroW olleH");
    });
});