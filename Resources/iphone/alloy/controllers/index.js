function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("activity");
    $.__views.tableWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Activities",
        barColor: "transparent",
        id: "tableWindow"
    });
    $.__views.activityTable = Ti.UI.createTableView({
        id: "activityTable"
    });
    $.__views.tableWindow.add($.__views.activityTable);
    $.__views.navigationWindow = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.tableWindow,
        id: "navigationWindow"
    });
    $.__views.navigationWindow && $.addTopLevelView($.__views.navigationWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var root = $.navigationWindow;
    root.open();
    var rows = [];
    rows.push(Alloy.createController("activityRow", {
        name: "Activity 1",
        price: 32.3
    }).getView());
    $.activityTable.setData(rows);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;