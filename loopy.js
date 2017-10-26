for (var i = 100; i <= 200; i++) {
  var list = [];
  (i % 3 === 0 && i % 4 === 0) ? console.log("LoopyLighthouse") : (i % 4 === 0) ? console.log("Lighthouse") : (i % 3 === 0) ? console.log("Loopy") : console.log(i);
  list.push(i);
}