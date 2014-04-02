// select root depending on the platform
var root = OS_IOS || OS_MOBILEWEB ? $.navigationWindow : $.tableWindow;
// open root
root.open();
// populate table
var rows = [];
rows.push(Alloy.createController("activityRow", {
    name: "Activity 1",
    price: 32.3
}).getView());

$.activityTable.setData(rows);
