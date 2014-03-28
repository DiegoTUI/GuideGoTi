require("behave").andSetup(this);

var util = require("util");

describe("Random id", function() {
    it("should return different 8 chars strings", function() {
        var lastId = util.randomId();
        expect(lastId.length).toBe(8);
        for (var i = 0; 10 > i; i++) {
            var newId = util.randomId();
            expect(newId.length).toBe(8);
            expect(newId).notToBe(lastId);
            lastId = newId;
        }
    });
});