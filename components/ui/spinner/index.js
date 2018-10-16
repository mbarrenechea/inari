import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

class Spinner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    className: null,
    style: null
  }

  render() {
    const { className, style } = this.props;
    const customClass = classnames({
      'c-spinner': true,
      [className]: !!className
    });

    return (
      <div className={customClass}>
        <div className="spinner-box" style={style}>
          <div className="icon" />
        </div>
      </div>
    );
  }
}

export default Spinner;
