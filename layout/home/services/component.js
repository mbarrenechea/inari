import React from 'react';
import { Parallax } from 'react-scroll-parallax';

// Styles
import './styles.scss';

class ServicesComponent extends React.Component {
  render() {
    return (
      <div className="c-services">
        <div className="wrapper">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <h2>Nuestros servicios</h2>
              <ul className="services-list">
                <li>Odontología general</li>
                <li>Estética dental</li>
                <li>Implantología digital</li>
                <li>Ortodoncia</li>
                <li>Cirugía oral</li>
                <li>Odontopediatría</li>
                <li>TAC dental (3D)</li>
              </ul>
            </div>

            <div className="col-xs-12 col-md-8">
              <Parallax
                className="form"
                offsetYMin="-100px"
                offsetYMax="100px"
                slowerScrollRate
              >
                <div className="services-img" />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComponent;
