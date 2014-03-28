function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Alloy.createController("activityRow", {
                $model: __alloyId3
            });
            rows.push(__alloyId5.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
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
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.tableWindow.add($.__views.table);
    var __alloyId6 = Alloy.Collections["activity"] || activity;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    $.__views.navigationWindow = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.tableWindow,
        id: "navigationWindow"
    });
    $.__views.navigationWindow && $.addTopLevelView($.__views.navigationWindow);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    var root = $.navigationWindow;
    root.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;