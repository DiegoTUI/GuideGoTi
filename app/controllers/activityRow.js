var args = arguments[0] || {};
// layout
$.textRowView.width = Alloy.Globals.screenWidth - $.textRowView.left - $.photoImageView.width - $.photoImageView.left;
Ti.API.info("screen width: " + Alloy.Globals.screenWidth + " - textRowView: " + $.textRowView.width);
// fill in the row
$.photoImageView.image = args.photo;
$.nameLabel.text = args.name;
$.priceLabel.text = args.price + "€";
// fill in the row data
$.activityRow.code = args.code;


