//import Shape Class
const Shapes = require("./shapes.js");

const shapes = new Shapes();

class Square extends Shapes {
    constructor (name, color, svgCode, corners) {
        super(name, color);
        this.svgCode = 'rect width="100%" height="100%"';
        this.corners = corners;
    }

    roundCorners() {
        if (this.corners === true) {
            const roundCorners = `rx="20" ry ="20"`;
            return roundCorners;
        }
    }
}

module.exports = Square;