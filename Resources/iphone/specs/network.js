require("behave").andSetup(this);

var errors = require("errors");

var network = require("network");

describe("Item list", function() {
    it("should return a valid JSON if everything goes right", function() {
        var httpClient = {
            open: function() {
                Ti.API.info("entered fake open");
            },
            setRequestHeader: function() {},
            send: function() {
                Ti.API.info("send called");
                this.responseText = JSON.stringify({
                    status: "OK"
                });
                this.onload();
            }
        };
        network.itemList("BCN", "ENG", function(error, result) {
            Ti.API.info("itemList returned: " + JSON.stringify(error) + " - " + JSON.stringify(result));
            expect(result.status).toBe("OK");
        }, httpClient);
    });
    it("should return itemListError if an error occurs", function() {
        var httpClient = {
            open: function() {},
            setRequestHeader: function() {},
            send: function() {
                this.onerror();
            }
        };
        network.itemList("BCN", "ENG", function(error) {
            expect(error.code).toBe(errors.itemListError.code);
        }, httpClient);
    });
});