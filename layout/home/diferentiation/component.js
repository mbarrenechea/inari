import React from 'react';
import Plx from 'react-plx';

// Styles
import './styles.scss';

class DiferentiationComponent extends React.Component {
  render() {
    return (
      <div className="c-diferentiation">
        <div className="wrapper">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <Plx
                parallaxData={[
                  {
                    start: '.c-diferentiation',
                    end: 'self',
                    endOffset: '60vh',
                    properties: [
                      {
                        startValue: -90,
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
                <div className="diferentiation-img" />
              </Plx>
            </div>

            <div className="col-xs-12 col-md-8">
              <Plx
                parallaxData={[
                  {
                    start: '.c-diferentiation',
                    end: 'self',
                    endOffset: '30vh',
                    properties: [
                      {
                        startValue: 40,
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
                <h2>Por qué somos diferentes</h2>

                <div className="diferentiation-content">
                  <p>Inari Estudio Dental nace en noviembre de 2017 en Alcorcón con la idea de crear un concepto diferente de salud y estética dental, en el que la excelencia de los tratamientos se combina con un trato cercano, ético y exquisito.</p>
                  <p>Inari Estudio Dental busca convertirse en la clínica de referencia de Alcorcón en tratamientos de odontología avanzada y, en particular, de estética dental.</p>
                  <p>Sus tres valores principales son Innovación, Armonía e Ilusión.</p>
                </div>
              </Plx>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiferentiationComponent;
