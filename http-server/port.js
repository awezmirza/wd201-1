/* eslint-disable quotes */
// const readline = require('readline')

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// lineDetail.question('Enter port - ', (Port) => {
//   console.log(`Hi ${Port}!`);
//   lineDetail.close()
// })
const minimist = require("minimist")
// (process.argv.slice(2));

const args = minimist(process.argv.slice(2), {
  default: {
    port: 3000
  }
})

console.log(args.port)
