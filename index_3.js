import fs from "fs";

// //sync file read
// const data = fs.readFileSync("./test_file/input.txt", "utf-8");
//
// console.log(data);
//
// //sync file write
// const outputText = `Hello Node.js\n${data}This file is writed on ${new Date()}`;
// fs.writeFileSync("./test_file/output.txt", outputText);
// console.log("File write done!");

fs.readFile("./test_file/input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error: ", err);
  }
  const outputText = `Hello Node.js\n${data}This file is writed on ${new Date()}`;
  fs.writeFile("./test_file/output.txt", outputText, (err) => {
    if (err) {
      console.log("Error: ", err);
    }
    console.log("Done!");
  });
});
