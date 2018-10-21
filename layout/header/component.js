import React from 'react';

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
      </header>
    );
  }
}

export default Header;
