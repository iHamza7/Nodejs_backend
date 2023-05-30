const fs = require("fs");

//blocking synchronous way
// const readtext = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(readtext);

// const textout = `this is all about me: ${readtext}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textout);
// console.log("file written");

//blocking Asynchronous way

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/output.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/input.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("your file has written");
      });
    });
  });
});
console.log("thos is 😂");
