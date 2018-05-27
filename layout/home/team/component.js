import React from 'react';

// Styles
import './styles.scss';

class TeamComponent extends React.Component {
  render() {
    return (
      <div className="c-team">
        <div className="wrapper">
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <h2>Nuestro equipo</h2>

              <div className="team-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure eos tempora sit magnam fuga veritatis reprehenderit iste nihil corrupti consequatur nisi voluptatum asperiores quos, vero, sapiente deleniti reiciendis praesentium?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure eos tempora sit magnam fuga veritatis reprehenderit iste nihil corrupti consequatur nisi voluptatum asperiores quos, vero, sapiente deleniti reiciendis praesentium?</p>
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="team-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamComponent;
