const {assert} = require('chai');

const max = string => {
    const characters = {};

    for (let character of string)
        characters[character] = characters[character] + 1 || 1;

    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};

describe("Max Character", () => {
    it("Should return max character", () => {
        assert.equal(max("Hello World!"), "l");
    });
});
