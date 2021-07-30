function stringLength(str) {
  if (str.length > 1 && str.length < 10) {
    return str.length;
  } else {
    throw Error('Here is my error');
  }
}


module.exports = stringLength;