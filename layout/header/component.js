import React from 'react';
import PropTypes from 'prop-types';


// Components
import Icon from 'components/ui/icon';

// Styles
import './styles.scss';

class Header extends React.PureComponent {
  static propTypes = { };

  render() {
    return (
      <header className="c-header">
        <h1 className="header-logo">
          <span>Estudio dental Inari</span>
          <svg>
            <use xlinkHref="#icon-logo" />
          </svg>
        </h1>

        <nav className="header-nav">
          <ul>
            <li>
              <a href="/">
                <Icon name="icon-facebook" className="-small" />
              </a>
            </li>
            <li>
              <a href="/">
                <Icon name="icon-twitter" className="-small" />
              </a>
            </li>
            <li>
              <a href="/">
                <Icon name="icon-instagram" className="-small" />
              </a>
            </li>
            <li>
              Contacto: <a href="tel:679242809">679 242 809</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
