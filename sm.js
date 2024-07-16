#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
console.log(randomNumber);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter the student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        message: " Select the courses in which you are interest",
        choices: ["Programming", "Technical Skills", "Degree", "Certification"]
    }
]);
const tutionFee = {
    "Programming": 5000,
    "Technical Skills": 2500,
    "Degree": 1500,
    "Certification": 8500
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentMode = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Pleasd select the payment Mode",
        choices: ["Bank Transfer", "Cheque", "Cash", "Drafs"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    }
]);
console.log(`You selected payment mode:${paymentMode.payment}`);
const tuitionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentMode.amount);
if (tuitionFees === paymentAmount) {
    console.log(`Congratulation, You have enrolled in:${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like next",
            choices: ["View Status", "Exist"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("***********Status***********");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tuition Fee paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("Existing Student Name Management System");
    }
}
else {
    console.log("Invalid amount due to course");
}
//     }
// else {
//     console.log("Invalid amount for your courses");
// }
