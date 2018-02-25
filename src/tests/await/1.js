async function aaa() {
  var res = await bbb();
  console.log(res);
}

function bbb() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(100);
    }, 1000);
  });
}

aaa();
