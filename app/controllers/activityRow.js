var args = arguments[0] || {};
// set default args values
args.photo = args.photo || "http://placehold.it/50x50";
args.name = args.name || "Default activity name";
args.price = args.price || 10;
// fill in the row
$.photoImageView.image = args.photo;
$.nameLabel.text = args.name;
$.priceLabel.text = args.price + "€";


