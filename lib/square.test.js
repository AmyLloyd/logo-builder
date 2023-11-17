const Square = require('./square');
const Shapes = require('./shapes');

describe ('Square', () => {
    it('should render the SVG code for a square of the chosen color.', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="red"/>')

    })
})