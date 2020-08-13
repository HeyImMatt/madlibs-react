function addCommas(n) {
	if (n == parseFloat(n)) {
  	return parseFloat(n).toLocaleString();
  }
  if (n == parseInt(n)) {
  	return n.toLocaleString();
  }
  return NaN;
}

module.exports = addCommas;