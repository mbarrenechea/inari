import React from 'react';
import Plx from 'react-plx';

// Styles
import './styles.scss';

class TeamComponent extends React.Component {
  render() {
    return (
      <div className="c-team">
        <div className="wrapper">
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Plx
                parallaxData={[
                  {
                    start: '.c-team',
                    end: 'self',
                    endOffset: '20vh',
                    properties: [
                      {
                        startValue: -40,
                        endValue: 0,
                        property: 'translateX',
                        easing: 'easeOutSine'
                      },
                      {
                        startValue: 0.75,
                        endValue: 1,
                        property: 'opacity'
                      }
                    ]
                  }
                ]}
              >
                <h2>Nuestro equipo</h2>

                <div className="team-content">
                  <p>Somos un equipo joven, motivado y dinámico constituido por profesionales con gran experiencia. Liderados por la odontóloga Gemma Rubio, formamos un equipo con muchas ganas de ofrecer lo mejor a cada paciente y evolucionamos para dar el más exclusivo servicio de odontología avanzada y estética dental. Por eso cada paciente es un nuevo reto, un camino que iniciamos juntos.</p>
                </div>
              </Plx>
            </div>

            <div className="col-xs-12 col-md-4">
              <Plx
                parallaxData={[
                  {
                    start: '.c-team',
                    end: 'self',
                    endOffset: '40vh',
                    properties: [
                      {
                        startValue: 90,
                        endValue: 0,
                        property: 'translateX',
                        easing: 'easeOutSine'
                      },
                      {
                        startValue: 0.95,
                        endValue: 1,
                        property: 'scale',
                        easing: 'easeOutSine'
                      },
                      {
                        startValue: 0.75,
                        endValue: 1,
                        property: 'opacity'
                      }
                    ]
                  }
                ]}
              >
                <div className="team-img" />
              </Plx>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamComponent;
