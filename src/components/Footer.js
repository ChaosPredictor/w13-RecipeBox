require('normalize.css/normalize.css');
require('styles/Footer.css');

import React from 'react';
import { Col } from 'react-bootstrap';

class FooterComponent extends React.Component {
  render() {
    return (
			<footer>
				<Col md={6}>coded by <a className="text-danger" target="_blank" href="https://www.freecodecamp.com/chaospredictor">Chaos Predictor</a></Col>
				<Col md={6} className="rightFooter">souces in <a className="text-danger" target="_blank" href="https://github.com/ChaosPredictor/w13-RecipeBox">GitHub</a></Col>
			</footer>
		);
  }
}

export default FooterComponent;
