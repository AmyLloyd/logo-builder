const {Circle, Square, Triangle} = require("./shapes");

describe ('Triangle', () => {
    it('should render the SVG code for a shape of the chosen color.', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`)
    })
})

describe ('Square', () => {
    it('should render the SVG code for a shape of the chosen color.', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<rect x="90" y="60" width="120" height="120" fill="red"/>`)
    })
})

describe ('Circle', () => {
    it('should render the SVG code for the shape of the chosen color.', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual(`<circle cx="150" cy="110" r="80" fill="green"/>`)
    })
})