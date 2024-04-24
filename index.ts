#! /usr/bin/env node
 
// Import the 'inquirer' module.which is a command line interface for node.js
import inquirer from "inquirer"

// declare a constant 'answers' and  assign  to the result of inquirer.promopt

const answers : {
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "Input",
            message: "Enter your sentence to count the words"
        }
    ]
)
 const words = answers.Sentence.trim().split("")

 // print te array of words to the console 
 console.log(words)

 // print the words count of the sentence to the console
 console.log(`your have written ${words.length} words. `)