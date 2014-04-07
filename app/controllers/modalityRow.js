var args = arguments[0] || {};
// fill in the row with the provided args
$.modalityNameLabel.text = args.name;
$.modalityPriceLabel.text = args.price + "€";

$.textView.width = Alloy.Globals.screenWidth * 0.7 ;
$.bookButtonView.width = Alloy.Globals.screenWidth * 0.3 ;

Ti.API.info("row width: " + $.modalityRow.size.width + " - textView width: " + $.textView.width + " - bookButtonView width: " + $.bookButtonView.width);
