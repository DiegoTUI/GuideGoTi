exports.definition = {
    config: {
        columns: {
            code: "string",
            name: "string",
            image: "string",
            price: "real",
            officePrice: "real"
        },
        adapter: {
            type: "sql",
            collection_name: "activities"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("activity", exports.definition, []);

collection = Alloy.C("activity", exports.definition, model);

exports.Model = model;

exports.Collection = collection;