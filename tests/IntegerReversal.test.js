const {assert} = require('chai');

const reverse = integer =>
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer); 
    // Функція Math.sign() повертає знак числа, визначаючи, чи являється число додатнім, від'ємним, або нулем.


describe("Integer Reversal", () => {
    it("Should reverse integer", () => {
        assert.equal(reverse(1234), 4321);
        assert.equal(reverse(-1200), -21);
    });
});
