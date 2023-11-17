const Circle = require('./circle');
const Shapes = require('./shapes');

describe ('Circle', () => {
    it('should render the SVG code for a circle of the chosen color.', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="red"/>')

    })
})
