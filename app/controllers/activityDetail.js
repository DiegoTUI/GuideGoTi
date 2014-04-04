var args = arguments[0] || {};
// fill in the view
$.photoImageView.image = args.photo;
$.titleLabel.text = args.name;
// create the table
if (args.modalities && args.modalities.length) {
    var rows = [];
    args.modalities.forEach(function(modality) {
        rows.push(Alloy.createController("modalityRow", modality).getView());
    });
    Ti.API.info("Setting modality rows: " + rows.length);
    $.modalityTable.setData(rows);
}
