var EventEmitter = require("events").EventEmitter;

var a = new EventEmitter();

console.log(a);

a.on("aaa", function (obj) {
  console.log("aaa:", obj);
});


a.emit("aaa", {x: 1});
