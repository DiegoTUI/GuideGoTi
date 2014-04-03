
Alloy.Globals.start = function () {
    // select root depending on the platform
    var root = OS_IOS || OS_MOBILEWEB ? $.navigationWindow : $.tableWindow;
    // open root
    root.open();
    // populate table
    var network = require("network");
    network.itemList("BCN", "ENG", function(error, result) {
        if (error) {
            return alert("Error connecting to GuideGo. Please, try again later.");
        }
        Ti.API.info("received response: " + result.data.length);
        if (result && result.data && result.data.length) {
            Ti.API.info("Filling up table: " + result.data.length);
            var rows = [];
            result.data.forEach(function(activity) {
                Ti.API.info("name: ", activity.name);
                Ti.API.info("photo: ", activity.photo);
                Ti.API.info("price: ", activity.price);
                rows.push(Alloy.createController("activityRow", activity).getView());
            });
            $.activityTable.setData(rows);
        }
    });
};

if (!Alloy.Globals.shouldTest) {
    Alloy.Globals.start();
}

// launch jasmine tests
Ti.include("/tests/tests.js");

/*var rows = [];
rows.push(Alloy.createController("activityRow", {
    name: "Activity 1",
    price: 32.3
}).getView());

$.activityTable.setData(rows);*/
