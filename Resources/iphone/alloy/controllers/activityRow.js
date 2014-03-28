function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "activityRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        className: "loc_row",
        dataId: "",
        id: "row",
        model: "undefined" != typeof $model.__transform["code"] ? $model.__transform["code"] : $model.get("code")
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.name = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "24dp"
        },
        top: "2dp",
        height: Ti.UI.SIZE,
        left: "5dp",
        right: "5dp",
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.__alloyId0.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;