var args = arguments[0] || {};
// set default args values
args.image = args.image || "http://placehold.it/50x50";
args.name = args.name || "Default activity name";
args.price = args.price || 10;
// fill in the row
$.image.image = args.image;
$.name.text = args.name;
$.price.text = args.price + "€";


