function calculateRectangleArea(l,w){
  var result;
  return result = ( l <= 0 || w <= 0 ) ? undefined : l * w;
}

function calculateTriangleArea(b,h){
  var result;
  return result = ( b <= 0 || h <= 0 ) ? undefined : b * h / 2;
}

function calculateCircleArea(x){
  var area = Math.PI * Math.pow(x, 2),
    result;
  return result = ( area < 0 || x < 0 ) ? undefined : area;
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(1.5)); // should print undefined
