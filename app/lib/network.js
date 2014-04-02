/**
 * Network methods for guideGo
 * @author dlafuente
 */
// errors
var errors = require("errors");

// base URL
var baseUrl = "http://54.72.13.227/api/testapikey/";

// list activities
exports.itemList = function(destination, language, callback, httpClient) {
    // the fourth argument is optional, and it overwrites Ti.Network.createHTTPClient()
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
	// turn on cache
	xhr.cache = true;
	var url = baseUrl + 'item-list?destination=' + destination + "&language=" + language + "&user=" + Alloy.Globals.atlasUser + "&password=" + Alloy.Globals.atlasPassword;
	Ti.API.info("Opening connection: " + url);
	xhr.open("GET", url);
	// set expity date for the cache
	xhr.setRequestHeader('Cache-Control','max-age=3600');
	xhr.send();
};
