const Triangle = require('./triangle');
const Shapes = require('./shapes');

describe ('Triangle', () => {
    it('should render the SVG code for a triangle of the chosen color.', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>')

    })
})



