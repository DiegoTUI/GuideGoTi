// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// should we test?
Alloy.Globals.shouldTest = false;

// user and password for ATLAS
Alloy.Globals.atlasUser = "ISLAS";
Alloy.Globals.atlasPassword = "ISLAS";

// Screen width and height, in dip
Alloy.Globals.screenWidth = OS_IOS ? Ti.Platform.displayCaps.platformWidth : Ti.Platform.displayCaps.platformWidth * 160 / Ti.Platform.displayCaps.dpi;
Alloy.Globals.screenHeight = OS_IOS ? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformHeight * 160 / Ti.Platform.displayCaps.dpi;
