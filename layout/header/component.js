import React from 'react';
import PropTypes from 'prop-types';


// Components
import './styles.scss';

class Header extends React.PureComponent {
  static propTypes = { };

  render() {
    return (
      <header className="c-header">
        <h1>
          Estudio dental Inari
          <svg>
            <use xlinkHref="#icon-logo" />
          </svg>
        </h1>
      </header>
    );
  }
}

export default Header;
