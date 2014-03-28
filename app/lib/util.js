/**
 * Generate a random id in base 36 with length 8.
 */
exports.randomId = function () {
	var random = Math.abs(Math.floor(Math.random() * 0x100000000000));
	var result = random.toString(36).slice(-8);
	while (result.length < 8)
	{
		result = '0' + result;
	}
	return result;
};