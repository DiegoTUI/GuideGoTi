var args = arguments[0] || {};
// layout
Ti.API.info("screen width: " + Alloy.Globals.screenWidth + " - screenHeight: " + Alloy.Globals.screenHeight +  " - textRowView: " + $.textRowView.width + " - activityRow: " + $.activityRow.width);
// fill in the row
$.photoImageView.image = args.photo;
$.nameLabel.text = args.name;
$.priceLabel.text = args.price + "€";
// fill in the row data
$.activityRow.code = args.code;


