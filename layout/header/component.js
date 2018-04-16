import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';


import './styles.scss';

class Header extends React.PureComponent {
  static propTypes = { items: PropTypes.array.isRequired };

  render() {
    const { items } = this.props;

    return (
      <header className="c-header">
        <nav>
          <ul>
            {
              items.map(item => (
                <li key={item.id}>
                  <Link route={item.route}>
                    <a>
                      {item.label}
                    </a>
                  </Link>
                  <ul>
                    {
                      item.children && item.children.map(child => (
                        <li key={child.route}>
                          <Link route={child.route}>
                            <a>
                              {child.label}
                            </a>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
