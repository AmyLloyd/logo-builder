// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

//import 'inquirer'
const inquirer = require("inquirer");

//import fs
const fs = require("fs");

//import classes of shapes
const Shapes = require("./lib/shapes");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");
const Circle = require("./lib/circle");

//create array for shapeChoices
const shapeChoices = ["circle", "square", "triangle"];

// checkLength = () => {
//     if (answer.characters.length > 3) {
//         console.log("Logos only have up to 3 characters. Please try again.");
//         return
//     }
// }

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
            name: "textColour",
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
        const shape = answer.shape;
        console.log(answer.shape);
        chooseFunction(shape);
    //Stuck here with undefined shape
        console.log(chooseFunction());
        shape.setColor();
        shape.render();
        console.log(shape.render());


        // const svg = `<svg version="1.1"
        // width="300" height="200"
        // xmlns="http://www.w3.org/2000/svg">
        // ${shapeCode}<text x="10" y="10" font-weight="bold" fill="${answer.textColour}">${answer.characters}</text>
        // </svg>`
        fs.writeFile('logo.svg', answer, (err) =>
        err ? console.error(err)
        : console.log('Generated logo.svg'));
        console.log("Generated logo.svg");

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
        } else {
            console.log("something else went wrong");
        }
    });

function chooseFunction(shape) {
    if(shape === "triangle") {
        shape = new Triangle;
        return shape;
    } else if (shape === "square") {
        shape = new Square;
        return shape;
    } else if (shape === "circle") {
        shape = new Circle;
        return shape;
    }
}

