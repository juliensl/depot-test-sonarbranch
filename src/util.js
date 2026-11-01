// Synthetic sample with deliberate issues.
function compare(a, b) {
  if (a == b) {
    return true;
  }
  return false;
}

function unusedParams(x, y, z) {
  var result = x;
  return result;
}

function emptyCatch() {
  try {
    JSON.parse("{");
  } catch (e) {
  }
}

module.exports = { compare, unusedParams, emptyCatch };
