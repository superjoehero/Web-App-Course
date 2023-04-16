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
