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
const {Circle, Square, Triangle} = require("./lib/shapes");
const Logo= require("./lib/logo");
const { log } = require("console");


//create array for shapeChoices
const shapeChoices = ["circle", "square", "triangle"];




inquirer
    .prompt([
        {
            type: "input",
            message: "What are the characters you would like on your logo? (maximum of 3 characters)",
            name: "characters",
            validate:(characters)=> characters.length <=3 ||"Text cannot be more than 3"
        },
        {
            type: "input",
            message: "What colour would you like the text?",
            name: "textColour",
           
        },
        {
            type: "list",
            message: "Which shape would you like your logo?",
            name: "shapeForm",
            choices: shapeChoices,
        },
        {
            type: "input",
            message: "What colour would you like for the shape?",
            name: "shapeColour",
        },
    ])
    .then(({characters, textColour, shapeForm, shapeColour}) => {
        let shape;

        switch (shapeForm) {
            case "circle":
                shape= new Circle()
                break;
            case "square":
                    shape= new Square()
                    break;
        
            default:
                shape= new Triangle()
                break;
        }
     
    
        shape.setColor(shapeColour);
        const logo= new Logo();
        logo.setText(characters, textColour)
        logo.setShape(shape)
       
       
       fs.writeFileSync('./examples/logo.svg',logo.render())

     

    })
    .then(()=>{
        console.log("Logo Generated");
       })
    .catch((error) => {
        console.log(error);
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
        } else {
            console.log("something else went wrong");
        }
    });


