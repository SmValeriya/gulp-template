export function test() {
  console.log('hello from test!!!');
  const promise2 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('test settimeout');
    }, 500);
  });
  promise2.then(function (value) {
    console.log(value);
    // expected output: "test settimeout"
  });
}

const foo = 1;
console.log(foo);

function fooka() {
  console.log(baz);
}

const baz = 123;
