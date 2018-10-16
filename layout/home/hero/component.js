import React from 'react';
import Plx from 'react-plx';

// Styles
import './styles.scss';

class HeroComponent extends React.Component {
  render() {
    return (
      <div className="c-hero">
        <div className="hero-content">
          <Plx
            parallaxData={[
              {
                start: '.c-hero',
                duration: '100vh',
                properties: [
                  {
                    startValue: 0,
                    endValue: 150,
                    property: 'translateY',
                    easing: 'easeOutSine'
                  },
                  {
                    startValue: 1,
                    endValue: 0,
                    property: 'opacity'
                  }
                ]
              }
            ]}
          >
            <h4>Estudio dental</h4>
            <h1>Odontología avanzada y estética dental</h1>
          </Plx>
        </div>
      </div>
    );
  }
}

export default HeroComponent;
