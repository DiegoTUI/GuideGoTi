exports.randomId = function() {
    var random = Math.abs(Math.floor(17592186044416 * Math.random()));
    var result = random.toString(36).slice(-8);
    while (8 > result.length) result = "0" + result;
    return result;
};