
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
            // store the result in globals
            Alloy.Globals.activityList = result.data;
        }
    });
};
// add click event listener to table
$.activityTable.addEventListener("click", function(event) {
     Ti.API.info("row clicked: " + JSON.stringify(event.row.code));
     // Look for the activity code in the current list
     var activity = Alloy.Globals.activityList.filter(function(activity) {return activity.code === event.row.code;});
     activity = activity.length == 1 ? activity[0] : null;
     if (!activity) {
         return alert("No activity details found for " + event.row.code);
     }
     // only for iOS
     if (OS_IOS) {
         $.navigationWindow.openWindow(Alloy.createController("activityDetail", activity).getView());
     } 
     else if (OS_ANDROID) {
         Alloy.createController("activityDetail", activity).getView().open();
     }
});

if (!Alloy.Globals.shouldTest) {
    Alloy.Globals.start();
}

// launch jasmine tests
Ti.include("/tests/tests.js");
