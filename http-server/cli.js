const readline = require('readline')

const linedetails = readline.createInterface({
  input: process.stdin, output: process.stdout
})

linedetails.question('Pls Provide ur name- ', (name) => {
  console.log('Hi', name)
  linedetails.close()
})
