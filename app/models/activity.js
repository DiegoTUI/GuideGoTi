exports.definition = {
	config: {
		columns: {
			"code": "string",
		    "name": "string",
		    "image": "string",
		    "price": "real",
		    "officePrice": "real"
		},
		adapter : {
            "type" : "sql",
            "collection_name" : "activities"
        }
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};