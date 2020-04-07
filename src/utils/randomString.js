/**
 * Pseudo-random string generator
 * http://stackoverflow.com/a/27872144/383904
 * Default: return a random alpha-numeric string
 *
 *       |   rand   | charCode |  (0..61)rand += fix        = charCode ranges |
 * ------+----------+----------+----------------------------+-----------------+
 * 0..9  |   0..9   |  48..57  |  rand += 48                =     48..57      |
 * A..Z  |  10..35  |  65..90  |  rand += 55 /90-35 = 55 /  =     65..90      |
 * a..z  |  36..61  |  97..122 |  rand += 61 /122-61 = 61 / =     97..122     |
 *
 * @param {Integer} len Desired length
 * @param {String} an Optional (alphanumeric), "a" (alpha), "n" (numeric)
 * @return {String}
 */
function randomString(len = 4, an = 'a') {
  an = an && an.toLowerCase();
  var str = '',
    i = 0,
    min = an == 'a' ? 10 : 0,
    max = an == 'n' ? 10 : 62;
  for (; i++ < len;) {
    var r = Math.random() * (max - min) + min << 0;
    str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
  }
  return str;
}

module.exports = {
  randomString,
};
