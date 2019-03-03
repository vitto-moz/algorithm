const {assert} = require('chai');

const capitalize = phrase => {
    const aCapitalized = []

    phrase.split(" ").forEach(word => {
        aCapitalized.push(word.slice(0, 1).toUpperCase() + word.slice(1))
    })

    return aCapitalized.join(" ")

};

describe("Capitalization", () => {
    it("Should capitalize phrase", () => {
        assert.equal(capitalize("hello world"), "Hello World");
    });
});

