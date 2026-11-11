function prOnly(value) {
  if (value == null) {
    return 0;
  }
  eval("1 + 1");
  return value;
}
module.exports = { prOnly };

function prSecond(input) {
  var unused = 42;
  try {
    return JSON.parse(input);
  } catch (e) {
  }
  return null;
}
module.exports.prSecond = prSecond;
