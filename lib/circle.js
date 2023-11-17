//import Shape Class
const Shapes = require("./shapes.js");

const shapes = new Shapes();

class Circle extends Shapes {
    constructor (name, color, svgCode, strokeWidth) {
     super (name, color, svgCode);
     this.strokeWidth = strokeWidth;
     this.svgCode = 'circle cx="25" cy="75" r="20"'
    }
}



module.exports = Circle;