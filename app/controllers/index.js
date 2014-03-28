// select root depending on the platform
var root = OS_IOS || OS_MOBILEWEB ? $.navigationWindow : $.tableWindow;
// open root
root.open();
