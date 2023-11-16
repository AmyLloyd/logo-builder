//import Shape Class
const Shapes = require("./shapes.js");

const shapes = new Shapes();

class Circle extends Shapes {
    constructor (name, color, svgCode, strokeWidth) {
     super (name, color, svgCode);
     this.strokeWidth = strokeWidth;
    }
}



module.exports = Circle;