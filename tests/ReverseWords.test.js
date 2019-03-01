const {assert} = require('chai');

const reverseWords = string => {
    const wordsReversed = [];

    string.split(" ").forEach(word => {
        let wordReversed = "";
        for (let i = word.length - 1;i >= 0;i--) wordReversed += word[i];
        wordsReversed.push(wordReversed);
    });

    return wordsReversed.join(" ");
};

const _reverseWords = string =>
    string
        .split(" ")
        .map(word =>
            word
                .split("")
                .reverse()
                .join("")
        )
        .join(" ");

describe("Reverse Words", () => {
    it("Should reverse words", () => {
        assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
        assert.equal(_reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
    });
});
