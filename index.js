// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts

//import 'inquirer'
const inquirer = require("inquirer");
const shapeChoices = ["circle", "square", "triangle"];

inquirer
    .prompt([
        {
            type: "input",
            message: "What are the characters you would like on your logo? (maximum of 3 characters)",
            name: "characters",
        },
        {
            type: "input",
            message: "What colour would you like the text?",
            name: "text colour",
        },
        {
            type: "list",
            message: "Which shape would you like your logo?",
            name: "shape",
            choices: shapeChoices,
        },
        {
            type: "input",
            message: "What colour would you like for the shape?",
            name: "shapeColour",
        },
    ])
    .then((answer) => {
        console.log(answer);
    });