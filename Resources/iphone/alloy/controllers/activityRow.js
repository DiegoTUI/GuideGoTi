function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "activityRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.activityRow = Ti.UI.createTableViewRow({
        height: "60dp",
        id: "activityRow",
        className: "activityRow"
    });
    $.__views.activityRow && $.addTopLevelView($.__views.activityRow);
    $.__views.image = Ti.UI.createImageView({
        top: "5dp",
        height: "50dp",
        width: "50dp",
        left: "5dp",
        id: "image"
    });
    $.__views.activityRow.add($.__views.image);
    $.__views.name = Ti.UI.createLabel({
        color: "#000",
        top: "2dp",
        height: "14dp",
        left: "60dp",
        font: {
            fontSize: "14dp"
        },
        id: "name"
    });
    $.__views.activityRow.add($.__views.name);
    $.__views.price = Ti.UI.createLabel({
        color: "#000",
        bottom: "2dp",
        height: "18dp",
        right: "2dp",
        font: {
            fontSize: "18dp"
        },
        id: "price"
    });
    $.__views.activityRow.add($.__views.price);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.image = args.image || "http://placehold.it/50x50";
    args.name = args.name || "Default activity name";
    args.price = args.price || 10;
    $.image.image = args.image;
    $.name.text = args.name;
    $.price.text = args.price + "€";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;