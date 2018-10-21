import React from 'react';
import Plx from 'react-plx';

// Components
import Icon from 'components/ui/icon';

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

            <nav className="hero-nav">
              <ul>
                <li>
                  <a href="https://www.facebook.com/INARI-Estudio-Dental-270275533367706/" target="_blank" rel="noopener noreferrer">
                    <Icon name="icon-facebook" className="-small" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/inariestudiodental/" target="_blank" rel="noopener noreferrer">
                    <Icon name="icon-instagram" className="-small" />
                  </a>
                </li>
                <li>
                  Contacto: <a href="tel:679242809">679 242 809</a>
                </li>
              </ul>
            </nav>
          </Plx>
        </div>
      </div>
    );
  }
}

export default HeroComponent;
