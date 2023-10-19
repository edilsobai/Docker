const fs = require("fs")

fs.appendFile("node-file.txt", "The file node has been created!", (err) => {
  if(err) throw err
  console.log("The file is saved")
})

setTimeout(() => console.log("The End!") ,30000)