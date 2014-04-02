var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.atlasUser = "ISLAS";

Alloy.Globals.atlasPassword = "ISLAS";

if ("production" !== Ti.App.deployType) {
    var behave = require("behave");
    require("specs/index");
    require("specs/util");
    require("specs/activity");
    require("specs/network");
    behave.run();
}

Alloy.createController("index");