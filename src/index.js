module.exports = function check(str, bracketsConfig) {

	const arr = bracketsConfig.map((el) => {
		return el.join('');
	});
	
	while (arr.some((el) => str.includes(el))) {
		arr.forEach((el) => str = str.replaceAll(el, ''));
	}
	return !!!str;
	}