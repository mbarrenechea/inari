import React from 'react';

// Styles
import './styles.scss';

class DiferentiationComponent extends React.Component {
  render() {
    return (
      <div className="c-diferentiation">
        <div className="wrapper">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="diferentiation-img" />
            </div>

            <div className="col-xs-12 col-md-8">
              <h2>Por qué somos diferentes</h2>

              <div className="diferentiation-content">
                <p>Inari Estudio Dental nace en noviembre de 2017 en Alcorcón con la idea de crear un concepto diferente de salud y estética dental, en el que la excelencia de los tratamientos se combina con un trato cercano, ético y exquisito.</p>
                <p>Inari Estudio Dental busca convertirse en la clínica de referencia de Alcorcón en tratamientos de odontología avanzada y, en particular, de estética dental.</p>
                <p>Sus tres valores principales son Innovación, Armonía e Ilusión.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiferentiationComponent;
