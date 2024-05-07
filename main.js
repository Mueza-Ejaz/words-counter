#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n \t !***** SIMPLE WORD COUNTER *****!\n "));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.green("\n \t Enter your sentence to count the word:\n "),
    }
]);
const words = answers.Sentence.trim().split(" ");
//Print  the array of words to the console:
console.log(words);
// Print the word count of the sentence to the console:
console.log(chalk.red(`\n \t Your sentence word count is ${words.length}\n `));
