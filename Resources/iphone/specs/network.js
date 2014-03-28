require("behave").andSetup(this);

var network = require("network");

var errors = require("errors");

describe("Item list", function() {
    it("should return a valid JSON if everything goes right", function() {
        var restoreCreateHTTPClient = Ti.Network.createHTTPClient;
        Ti.Network.createHTTPClient = function() {
            var httpClient = {
                open: function() {},
                send: function() {
                    Ti.API.info("send called");
                    this.responseText = JSON.stringify({
                        status: "OK"
                    });
                    this.onload();
                }
            };
            return httpClient;
        };
        network.itemList("BCN", "ENG", function(error, result) {
            Ti.API.info("itemList returned: " + JSON.stringify(error) + " - " + JSON.stringify(result));
            expect(result.status).toBe("OK");
            Ti.Network.createHTTPClient = restoreCreateHTTPClient;
        });
    });
});