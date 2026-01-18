const readline = require('readline'); // Built-in module for input
const stringUtils = require('./stringUtils'); //importing lab modules
//  creating Interface 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('write your text which you want to reverse or capitilize: ', (answer) => {
  const reversed = stringUtils.reverseString(answer);
  const capitalized = stringUtils.capitalize(answer);
  console.log("\n--- Output ---");
  console.log("Original Input:", answer);
  console.log("Reversed:", reversed);
  console.log("Capitalized:", capitalized);
  rl.close(); 
});