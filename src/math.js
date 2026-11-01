function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    return NaN;
  }
  return a / b;
}

module.exports = { add, divide };
