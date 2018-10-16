import React from 'react';
import Plx from 'react-plx';

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
              <Plx
                parallaxData={[
                  {
                    start: '.c-services',
                    end: 'self',
                    endOffset: '60vh',
                    properties: [
                      {
                        startValue: 0.9,
                        endValue: 1,
                        property: 'scale',
                        easing: 'easeOutSine'
                      },
                      {
                        startValue: 100,
                        endValue: 0,
                        property: 'translateY',
                        easing: 'easeOutSine'
                      },
                      {
                        startValue: 0.75,
                        endValue: 1,
                        property: 'opacity'
                      }
                    ]
                  }
                ]}
              >
                <div className="services-img" />
              </Plx>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComponent;
