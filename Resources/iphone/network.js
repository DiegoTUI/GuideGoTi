var errors = require("errors");

var baseUrl = "http://54.72.13.227/api/testapikey/";

exports.itemList = function(destination, language, callback, httpClient) {
    var xhr = httpClient || Ti.Network.createHTTPClient();
    Ti.API.info("xhr: " + Ti.Network.createHTTPClient);
    xhr.onload = function() {
        Ti.API.info("ItemList connection loaded. Callback.");
        callback(null, JSON.parse(xhr.responseText));
    };
    xhr.onerror = function() {
        Ti.API.info("ItemList returned an error");
        callback(errors.itemListError);
    };
    xhr.cache = true;
    var url = baseUrl + "item-list?destination=" + destination + "&language=" + language + "&user=" + Alloy.Globals.atlasUser + "&password=" + Alloy.Globals.atlasPassword;
    Ti.API.info("Opening connection: " + url);
    xhr.open("GET", url);
    xhr.setRequestHeader("Cache-Control", "max-age=3600");
    xhr.send();
};