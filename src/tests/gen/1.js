function* gen() {

  var ret = yield 1;
  console.log(ret);

  ret = yield 2;
  console.log(ret);

  ret = yield 3;
  console.log(ret);
}

var g = gen();

var ret = g.next();
console.log(ret);

ret = g.next(100);
console.log(ret);

ret = g.next(200);
console.log(ret);

ret = g.next(300);
console.log(ret);

setTimeout(() => {}, 100);
