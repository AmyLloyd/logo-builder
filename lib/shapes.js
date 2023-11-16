
//Create a shapes Class
class Shape {
    constructor(name, color, svgCode) {
        this.name - name;
        this.color = color; 
        this.svgCode = svgCode;
        this.setColor = function () {
            console.log("Need to set color");   
              
        }
    }

};

//Create a class for each of the shape options
class Triangle extends Shape {
    constructor (name, color, svgCode, fontWeight) {
        super(name, color, svgCode);
        this.fontWeight = fontWeight;
    }
}

class Square extends Shape {
    constructor (name, color, svgCode, corners) {
        super(name, color, svgCode);
        this.corners = corners;
    }
}

class Circle extends Shape {
    constructor (name, color, svgCode, fontSize) {
     super (name, color, svgCode);
     this.fontSize = fontSize;
    }
}
//instantise objects
const triangle = new Triangle('triangle', '', `<polygon points="0,100 50,25 50,75 100,0" fill=${this.color}/>`);
const square = new Square('square', '', `<rect  width="100%" height="100%" fill="${this.color}"/>`);
const circle = new Circle('circle', '', `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`);




//Create function that takes shape input and converts it to a the SVG string needed for that shape

function shapes(answer) {
    if (answer.shape === "square") {
        return `<rect  width="100%" height="100%" fill="${answer.shapeColour}"/>`
    } else if (answer.shape === "circle") {
        return `<circle cx="25" cy="75" r="20" fill="${answer.shapeColour}"/>`
    } else if (answer.shape === "triangle") {
        return `<polygon points="0,100 50,25 50,75 100,0" fill="${answer.shapeColour}"/>`
    }
};

// function shapes(data) {
//     if (data === "square") {
//         return `<rect  width="100%" height="100%" fill="red" />`
//     } else if (data === "circle") {
//         return `<circle cx="25" cy="75" r="20" fill="red"/>`
//     } else if (data === "triangle") {
//         return `<polygon points="0,100 50,25 50,75 100,0" fill="red"/>`
//     }
// };

// shapes("square");
// const shape = shapes("square");
// console.log(shape);

module.exports = shapes;

