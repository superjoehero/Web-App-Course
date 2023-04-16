/*
function calculate(x, y, callback) {
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 3000);
}

function display(result) {
  console.log(`result = ${result}`);
}

calculate(100, 50, function (result) {
  console.log(`Result = ${result}`);
}); */

/*
const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";

function downloading(url, callback) {
  console.log(`downloading ${url}`);
  setTimeout(() => {
    callback(url);
  }, 3000);
}

downloading(url1, function (result) {
  console.log(`Download ${result} Complete!`);
});
*/

const connect = true;
const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";
const url4 = "kong.dev/file4.json";

function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log(`downloading from ${url}`);
    setTimeout(() => {
      if (connect) {
        resolve(`Download ${url} Complete`);
      } else {
        reject("Error");
      }
    }, 1000);
  });
}

// downloading(url1)
//   .then(function (result) {
//     console.log(result);
//     return downloading(url2);
//   })
//   .then(function (result) {
//     console.log(result);
//   });

//Async & Await
async function start() {
  console.log(await downloading(url1));
  console.log(await downloading(url2));
}

start();
