/**
 * Network methods for guideGo
 * @author dlafuente
 */
// errors
var errors = require("errors");

// base URL
var baseUrl = "http://54.210.60.45/api/testapikey/";

// list activities
exports.itemList = function(destination, language, callback) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function() {
		Ti.API.info("ItemList connection loaded. Callback.");
		callback(null, JSON.parse(xhr.responseText));
	};
	xhr.onerror = function() {
	    Ti.API.info("ItemList returned an error");
	    callback(errors.itemListError);
	};
	var url = baseUrl + 'item-list?destination=' + destination + "&language=" + language + "&user=" + Alloy.Globals.atlasUser + "&password=" + Alloy.Globals.atlasPassword;
	Ti.API.info("Opening connection: " + url);
	xhr.open("GET", url);
	xhr.send();
};
