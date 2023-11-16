
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

