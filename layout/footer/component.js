import React from 'react';

// Styles
import './styles.scss';

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="c-footer">
        <div className="wrapper">
          <div className="footer-content">
            <h1 className="footer-logo">
              <span>Estudio dental Inari</span>
              <svg>
                <use xlinkHref="#icon-logo" />
              </svg>
            </h1>

            <nav className="footer-nav">
              <ul>
                <li>
                  Teléfono: <a href="tel:679242809">679 242 809</a>
                </li>
                <li>
                  Whatsapp: <a href="tel:679242809">679 242 809</a>
                </li>
                <li>
                  Email: <a href="mailto:info@inari.com">info@inari.com</a>
                </li>
                <li>
                  Avenida Leganés 6, Local 2B, 28921, Alcorcón
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
