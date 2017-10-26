function lastIndexOf(arr, val) {
  for (var i = arr.length - 1; i > -1; i--) {
    if (val === arr[i]) {
      var match = true,
        foo = i;
      break;
    }
  }
  if (match)
    return foo;
  else
    return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);