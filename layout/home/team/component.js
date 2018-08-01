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
                <p>Somos un equipo joven, motivado y dinámico constituido por profesionales con gran experiencia. Liderados por la odontóloga Gemma Rubio, formamos un equipo con muchas ganas de ofrecer lo mejor a cada paciente y evolucionamos para dar el más exclusivo servicio de odontología avanzada y estética dental. Por eso cada paciente es un nuevo reto, un camino que iniciamos juntos.</p>
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
