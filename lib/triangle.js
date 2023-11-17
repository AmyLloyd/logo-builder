
//import Shape Class
const Shapes = require("./shapes.js");

const shapes = new Shapes();

//Create a class for each of the shape options
class Triangle extends Shapes {
    constructor (name, color, svgCode, stroke) {
        super(name, color);
        this.stroke = stroke;
        this.svgCode = 'polygon points="150, 18 244, 182 56, 182"';
    }
}

module.exports = Triangle;