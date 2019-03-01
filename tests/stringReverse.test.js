// import {assert} from 'chai'
const {assert} = require('chai');

const reverse = string =>
    string
        .split("")
        .reverse()
        .join("");

const _reverse = string => {
    let result = "";
    for (let character of string) result = character + result;
    return result;
};

const __reverse = string =>
    string.split("").reduce((result, character) => character + result);

describe("String Reversal", () => {
    it("Should reverse string", () => {
        assert.equal(reverse("Hello World!"), "!dlroW olleH");
        assert.equal(_reverse("Hello World!"), "!dlroW olleH");
        assert.equal(__reverse("Hello World!"), "!dlroW olleH");
    });
});