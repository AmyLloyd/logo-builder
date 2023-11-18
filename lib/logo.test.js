const Logo = require('./logo');
const {Triangle} = require("./shapes");

describe('Logo', () => {
    it('should render SVG code for the chosen shape with the given text characters and text colour', () => {
        const logo = new Logo();
        const shape = new Triangle();
        logo.setText("pop", "green");
        logo.setShape(shape);
        logo.render(shape);   
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="\"/><text x="150" y="140" font-size="60" text-anchor="middle" fill="green">pop</text></svg>`)
    })
})