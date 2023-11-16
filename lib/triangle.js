
//import Shape Class
const Shapes = require("./shapes.js");

const shapes = new Shapes();

//Create a class for each of the shape options
class Triangle extends Shapes {
    constructor (name, color, svgCode, stroke) {
        super(name, color, svgCode);
        this.stroke = stroke;
    }
}


module.exports = Triangle;