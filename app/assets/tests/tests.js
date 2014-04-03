// Run tests
(function(){
    if (Alloy.Globals.shouldTest) {
        Ti.include('/tests/jasmine-1.0.2.js');
        Ti.include('/tests/jasmine-titanium.js');
        
        // Include all the test files
        Ti.include('/tests/activity.js');
        Ti.include('/tests/util.js');
        Ti.include('/tests/network.js');
        
        jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
        jasmine.getEnv().execute();
    }
})();