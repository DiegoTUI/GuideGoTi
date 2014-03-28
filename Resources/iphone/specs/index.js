require("behave").andSetup(this);

describe("Index controller", function() {
    it("checks it test equals true", function() {
        var test = true;
        expect(test).toBe(true);
    });
});