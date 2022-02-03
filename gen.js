/**
 * Jokes aside, this is the generator used to generate the mycalc.js
 * It isn't well written either, i just threw it together in like 5 minutes
 */

const fs = require("fs");
var max = 101;

fs.writeFileSync("mycalc.js", `
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Whats your first number?", (num1) => {
        if(num1 > ${max}) {
            console.log("Error: Exceeds max of ${max}");
            process.exit(1);
        }

        rl.question("What operator do you want to use?", (op) => {
            if(!(op == "+" || op == "-" || op == "*" || op == "/")) {
                console.log("Error: Unsupported operator!!");
                process.exit(1);
            }

            rl.question("Whats your second number?", (num2) => {

`);

for(var i = 0; i < max; i++) {
    for(var j = 0; j < max; j++) {
        fs.appendFileSync("mycalc.js", `if(num1 == ${i} && op == "+" && num2 == ${j}) console.log("The correct answer is: ${i + j}");\n`);
        fs.appendFileSync("mycalc.js", `if(num1 == ${i} && op == "-" && num2 == ${j}) console.log("The correct answer is: ${i - j}");\n`);
        fs.appendFileSync("mycalc.js", `if(num1 == ${i} && op == "*" && num2 == ${j}) console.log("The correct answer is: ${i * j}");\n`);
        fs.appendFileSync("mycalc.js", `if(num1 == ${i} && op == "/" && num2 == ${j}) console.log("The correct answer is: ${i / j}");\n`);
    }
}

fs.appendFileSync("mycalc.js", `});
    });
});`);